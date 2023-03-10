import * as TwGL from 'twgl.js'
const { v3, m4, primitives } = TwGL
const { drawBufferInfo, createProgramInfo, setBuffersAndAttributes, setUniforms, createTextures } = TwGL

export type TweenShader = { resetSize: (progress?: number) => void; kill: () => void; progress: (n: number) => void }

export const fragment = `
precision mediump float;

// 背景
// varying vec2 vBgTexCoord;
// uniform sampler2D uBg;

// 溶解判斷圖
varying vec2 vNoiseTexCoord;
uniform sampler2D uNoise;

// 0.0 ~ 1.0
uniform float uProgress;
uniform vec3 uBgColor;

void main() {
	// 溶解效果
  // 清除低於進度值的顏色
  // RGB灰階圖，三色同數值，也介於 0 ~ 1 之間，剛好當做進度值
  vec4 noise = texture2D(uNoise, vNoiseTexCoord);
  if ((noise.r + noise.g + noise.b) / 3.0 <= uProgress) discard;
  
  // 沒被過濾的顏色
  gl_FragColor = vec4(uBgColor, 1.0); // texture2D(uBg, vBgTexCoord);
}
`

export const vertex = `
// 乾淨滿版一般矩陣
attribute vec4 position;
uniform mat4 matrix;

// 相對視窗比
// uniform mat4 uuBgRatio;
uniform mat4 uNoiseRatio;

// 傳遞給著色器的資訊
// varying vec2 vBgTexCoord;
varying vec2 vNoiseTexCoord;

void main () {
  gl_Position = matrix * position;
  // vBgTexCoord = (uuBgRatio * position).xy;
  vNoiseTexCoord = (uNoiseRatio * position).xy;
}
`

/**
 * @desc 用 pixijs 寫更輕鬆，但是太肥了
 */
export const createShaderTween = async (
  canvas: HTMLCanvasElement,
  { bg, noise }: { bg: string; noise: string },
  init = true,
): Promise<TweenShader> => {
  if (!canvas) return Promise.reject('canvas not exist.')
  const webgl: WebGLRenderingContext = canvas.getContext('webgl') as WebGLRenderingContext
  const programInfo = createProgramInfo(webgl, [vertex, fragment])
  webgl.useProgram(programInfo.program)

  // quad
  const bufferInfo = primitives.createXYQuadBufferInfo(webgl)
  drawBufferInfo(webgl, bufferInfo)
  setBuffersAndAttributes(webgl, programInfo, bufferInfo)

  // 容器
  const matrix = m4.identity()

  // 純色背景
  const hex = Array.from(bg.replace(/^#/, ''))
  const hexToRgb = Array.from({ length: 3 })
    .map((_, index) => index)
    .reduce((res, i: number) => [...res, parseInt(hex.slice(i * 2, i * 2 + 2).join(''), 16) / 255], [] as number[])
  const uBgColor = v3.create(hexToRgb[0], hexToRgb[1], hexToRgb[2])

  // 計算素材比例
  // let uBgRatio = m4.identity()
  let uNoiseRatio = m4.identity()

  // load texture
  return new Promise<TweenShader>((resolve, reject) => {
    createTextures(webgl, { noise: { src: noise } }, (err, textures, sources) => {
      if (err) return reject(err)
      let progressValue = 0
      const { noise } = sources as { [key: string]: HTMLImageElement }
      const { noise: uNoise } = textures

      // 計算視窗尺寸
      let windowRate = window.innerWidth / window.innerHeight
      const resetSize = (setProgress?: number) => {
        const { min } = Math

        // canvas size
        windowRate = window.innerWidth / window.innerHeight
        const width = Math.min(1920, window.innerWidth)
        const height = width / windowRate
        webgl.viewport(0, 0, width, height)

        // none 的時候會無尺寸
        // resizeCanvasToDisplaySize(canvas)
        canvas.width = width
        canvas.height = height

        // matrix
        m4.ortho(0, width, height, 0, -1, 1, matrix)
        m4.translate(matrix, [0, 0, 0], matrix)
        m4.scale(matrix, [width, height, 1], matrix)

        // bg
        // {
        //   uBgRatio = m4.identity()
        //   const ratio = windowRate / (bg.width / bg.height)
        //   const scale = [min(1, ratio), min(1, 1 / ratio), 1]
        //   const translate = [(1 - scale[0]) * 0.5, (1 - scale[1]) * 0.5, 0]
        //   m4.scale(uBgRatio, scale, uBgRatio)
        //   m4.translate(uBgRatio, translate, uBgRatio)
        // }

        // noise
        {
          uNoiseRatio = m4.identity()
          const ratio = windowRate / (noise.width / noise.height)
          const scale = [min(1, ratio), min(1, 1 / ratio), 1]
          const translate = [0.5 / scale[0] - 0.5, 0.5 / scale[1] - 0.5, 0]
          m4.scale(uNoiseRatio, scale, uNoiseRatio)
          m4.translate(uNoiseRatio, translate, uNoiseRatio)
        }

        requestAnimationFrame(() => progress(setProgress || progressValue))
      }

      // update
      const progress = (uProgress: number) => {
        progressValue = uProgress
        // draw
        // setUniforms(programInfo, { matrix, uBg, uBgRatio, uNoise, uNoiseRatio, uProgress })
        setUniforms(programInfo, { uBgColor, matrix, uNoise, uNoiseRatio, uProgress })
        drawBufferInfo(webgl, bufferInfo)
      }

      // destroyed
      const kill = () => {
        webgl.deleteProgram(programInfo.program)
        webgl.deleteBuffer(bufferInfo.indices as WebGLBuffer)
        // webgl.deleteTexture(uBg)
        webgl.deleteTexture(uNoise)
      }

      // init
      init && resetSize()

      resolve({ resetSize, kill, progress })
    })
  })
}
