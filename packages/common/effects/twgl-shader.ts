import * as TwGL from 'twgl.js'
const { v3, m4, primitives } = TwGL
const { drawBufferInfo, createProgramInfo, setBuffersAndAttributes, setUniforms, createTextures } = TwGL

export type TweenShader = { resetSize: (progress?: number) => void; kill: () => void; progress: (n: number) => void }

// create vec3
const hexToVec3 = (hex: string) => {
  const hexArray = Array.from(hex.replace(/^#/, ''))
  const hexToRgb = Array.from({ length: 3 })
    .map((_, index) => index)
    .reduce((res, i: number) => [...res, parseInt(hexArray.slice(i * 2, i * 2 + 2).join(''), 16) / 255], [] as number[])
  return v3.create(hexToRgb[0], hexToRgb[1], hexToRgb[2])
}

export const fragment = `
precision mediump float;

// 溶解判斷圖
varying vec2 vNoiseTexCoord;
uniform sampler2D uNoise;

// 溶解判斷圖2
varying vec2 vNoise2TexCoord;
uniform sampler2D uNoise2;

// 0.0 ~ 1.0
uniform float uProgress;
uniform vec3 uBgColor;
uniform vec3 uBg2Color;

void main() {
	// 溶解效果
  // 清除低於進度值的顏色 (noise.r + noise.g + noise.b) / 3.0 <= uProgress
  // RGB灰階圖，三色同數值，也介於 0 ~ 1 之間，剛好當做進度值
  
  vec4 color = vec4(uBgColor, 1.0);
  float progress = uProgress * 2.0; 
  
  // first  
  if (progress < 1.0) {
    vec4 noise = texture2D(uNoise, vNoiseTexCoord);
    if (noise.r < progress) {
      color = vec4(uBg2Color, 1.0);
    }
  } else {
    color = vec4(uBg2Color, 1.0);
  }
  
  // second
  if (progress > 0.8) {
    vec4 noise2 = texture2D(uNoise2, vNoise2TexCoord);
    if (noise2.r < (progress - 0.8) / 1.2) discard;
  }

  // final
  color.a = 1.0 - uProgress;
  color.r -= (max(0.5, uProgress) - 0.5) / 0.5;
  gl_FragColor = color;
}
`

export const vertex = `
// 乾淨滿版一般矩陣
attribute vec4 position;
uniform mat4 matrix;

// 相對視窗比
uniform mat4 uNoiseRatio;
uniform mat4 uNoise2Ratio;

// 傳遞給著色器的資訊
varying vec2 vNoiseTexCoord;
varying vec2 vNoise2TexCoord;

void main () {
  gl_Position = matrix * position;
  vNoiseTexCoord = (uNoiseRatio * position).xy;
  vNoise2TexCoord = (uNoise2Ratio * position).xy;
}
`

/**
 * @desc 用 pixijs 寫更輕鬆，但是太肥了
 */
export const createShaderTween = async (
  canvas: HTMLCanvasElement,
  { bg, bg2, noise, noise2 }: { bg: string; bg2: string; noise: string; noise2: string },
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
  const uBgColor = hexToVec3(bg)
  const uBg2Color = hexToVec3(bg2)

  // 計算素材比例
  let uNoise2Ratio = m4.identity()
  let uNoiseRatio = m4.identity()

  // load texture
  return new Promise<TweenShader>((resolve, reject) => {
    createTextures(webgl, { noise: { src: noise }, noise2: { src: noise2 } }, (err, textures, sources) => {
      if (err) return reject(err)
      let progressValue = 0
      const { noise, noise2 } = sources as { [key: string]: HTMLImageElement }
      const { noise: uNoise, noise2: uNoise2 } = textures

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

        // noise
        {
          uNoiseRatio = m4.identity()
          const ratio = windowRate / (noise.width / noise.height)
          const scale = [min(1, ratio), min(1, 1 / ratio), 1]
          const translate = [0.5 / scale[0] - 0.5, 0.5 / scale[1] - 0.5, 0]
          m4.scale(uNoiseRatio, scale, uNoiseRatio)
          m4.translate(uNoiseRatio, translate, uNoiseRatio)
        }

        // noise2
        {
          uNoise2Ratio = m4.identity()
          const ratio = windowRate / (noise2.width / noise2.height)
          const scale = [min(1, ratio), min(1, 1 / ratio), 1]
          const translate = [(1 - scale[0]) * 0.5, (1 - scale[1]) * 0.5, 0]
          m4.scale(uNoise2Ratio, scale, uNoise2Ratio)
          m4.translate(uNoise2Ratio, translate, uNoise2Ratio)
        }

        requestAnimationFrame(() => progress(setProgress || progressValue))
      }

      // update
      const progress = (uProgress: number) => {
        progressValue = uProgress
        // draw
        setUniforms(programInfo, { uBgColor, uBg2Color, matrix, uNoise, uNoise2, uNoiseRatio, uNoise2Ratio, uProgress })
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
