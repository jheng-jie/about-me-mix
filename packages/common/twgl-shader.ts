import * as TwGL from 'twgl.js'
const {
  m4,
  primitives,
  drawBufferInfo,
  createProgramInfo,
  setBuffersAndAttributes,
  resizeCanvasToDisplaySize,
  setUniforms,
  createTextures,
} = TwGL

export type TweenShader = { resetSize: () => void; kill: () => void; progress: (n: number) => void }

export const fragment = `
precision mediump float;

// 背景
varying vec2 vBgTexCoord;
uniform sampler2D uBg;

// 溶解判斷圖
varying vec2 vNoiseTexCoord;
uniform sampler2D uNoise;

// 0.0 ~ 1.0
uniform float progress;

void main() {
	// 溶解效果 
  // 清除低於進度值的顏色
  // RGB灰階圖，三色同數值，也介於 0 ~ 1 之間，剛好當做進度值
  vec4 noise = texture2D(uNoise, vNoiseTexCoord);
  if (noise.r <= progress) discard;
  
  // 沒被過濾的顏色
  gl_FragColor = texture2D(uBg, vBgTexCoord);
}
`

export const vertex = `
// 乾淨滿版一般矩陣
attribute vec4 position;
uniform mat4 matrix;

// 相對視窗比
uniform mat4 bgRatio;
uniform mat4 noiseRatio;

// 傳遞給著色器的資訊
varying vec2 vBgTexCoord;
varying vec2 vNoiseTexCoord;

void main () {
  gl_Position = matrix * position;
  vBgTexCoord = (bgRatio * position).xy;
  vNoiseTexCoord = (noiseRatio * position).xy;
}
`

/**
 * @desc 用 pixijs 寫更輕鬆，但是太肥了
 */
export const createShader = async (
  canvas: HTMLCanvasElement,
  { bg, noise }: { bg: string; noise: string },
): Promise<TweenShader> => {
  const webgl: WebGLRenderingContext = canvas.getContext('webgl')
  const programInfo = createProgramInfo(webgl, [vertex, fragment])
  webgl.useProgram(programInfo.program)

  // quad
  const bufferInfo = primitives.createXYQuadBufferInfo(webgl)
  drawBufferInfo(webgl, bufferInfo)
  setBuffersAndAttributes(webgl, programInfo, bufferInfo)

  // 容器
  const matrix = m4.identity()

  // 計算素材比例
  let bgRatio = m4.identity()
  let noiseRatio = m4.identity()

  // load texture
  return new Promise<TweenShader>((resolve, reject) => {
    createTextures(webgl, { bg: { src: bg }, noise: { src: noise } }, (err, textures, sources) => {
      if (err) return reject(err)
      let progressValue = 0
      const { bg, noise } = sources as { [key: string]: HTMLImageElement }
      const { bg: uBg, noise: uNoise } = textures

      // 計算視窗尺寸
      let windowRate = window.innerWidth / window.innerHeight
      const resetSize = () => {
        const { min, max } = Math

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
        {
          bgRatio = m4.identity()
          const ratio = windowRate / (bg.width / bg.height)
          const scale = [min(1, ratio), min(1, 1 / ratio), 1]
          const translate = [(1 - scale[0]) * 0.5, (1 - scale[1]) * 0.5, 0]
          m4.scale(bgRatio, scale, bgRatio)
          m4.translate(bgRatio, translate, bgRatio)
        }

        // noise
        {
          noiseRatio = m4.identity()
          const ratio = windowRate / (noise.width / noise.height)
          const scale = [min(1, ratio), min(1, 1 / ratio), 1]
          const translate = [(1 - scale[0]) * 0.5, (1 - scale[1]) * 0.5, 0]
          m4.scale(noiseRatio, scale, noiseRatio)
          m4.translate(noiseRatio, translate, noiseRatio)
        }

        progress(progressValue)
      }

      // update
      const progress = (progress: number) => {
        progressValue = progress
        // draw
        setUniforms(programInfo, { matrix, uBg, bgRatio, uNoise, noiseRatio, progress })
        drawBufferInfo(webgl, bufferInfo)
      }

      // destroyed
      const kill = () => {
        webgl.deleteProgram(programInfo.program)
        webgl.deleteBuffer(bufferInfo.indices)
        webgl.deleteTexture(uBg)
        webgl.deleteTexture(uNoise)
      }

      // init
      resetSize()

      resolve({ resetSize, kill, progress })
    })
  })
}
