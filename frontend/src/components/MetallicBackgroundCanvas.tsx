'use client'

import { useEffect, useRef } from 'react'

const vertexShaderSource = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`

const fragmentShaderSource = `
  precision mediump float;
  uniform vec2 u_resolution;
  uniform float u_time;

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    uv.y *= u_resolution.y / u_resolution.x;

    float timeValue = u_time * 0.22;
    vec2 coordinate = uv * 3.0;

    float waveOne = sin(coordinate.x * 1.6 + timeValue) * cos(coordinate.y * 1.3 + timeValue * 0.85);
    float waveTwo = sin(coordinate.y * 2.2 - timeValue * 0.65) * cos(coordinate.x * 1.9 + timeValue * 1.15);
    float height = waveOne + waveTwo;

    float deltaX = cos(coordinate.x * 1.6 + timeValue) * cos(coordinate.y * 1.3 + timeValue * 0.85) * 1.6;
    float deltaY = sin(coordinate.x * 1.6 + timeValue) * -sin(coordinate.y * 1.3 + timeValue * 0.85) * 1.3;
    vec3 normal = normalize(vec3(-deltaX, -deltaY, 1.3));

    vec3 lightDirection = normalize(vec3(0.55, 0.85, 1.0));
    vec3 halfDirection = normalize(lightDirection + vec3(0.0, 0.0, 1.0));

    float specular = pow(max(dot(normal, halfDirection), 0.0), 36.0);

    vec3 chromeRose = vec3(0.96, 0.35, 0.52);
    vec3 deepRose = vec3(0.75, 0.08, 0.28);
    vec3 platinum = vec3(1.0, 0.96, 0.98);

    vec3 baseMetal = mix(deepRose, chromeRose, height * 0.5 + 0.5);
    vec3 metallicReflection = baseMetal + (platinum * specular * 0.65);
    vec3 porcelain = vec3(0.98, 0.972, 0.98);
    vec3 finalColor = mix(porcelain, metallicReflection, 0.38);

    gl_FragColor = vec4(finalColor, 1.0);
  }
`

function buildShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type)
  if (!shader) return null
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  return shader
}

function buildProgram(gl: WebGLRenderingContext) {
  const vertexShader = buildShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
  const fragmentShader = buildShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource)
  if (!vertexShader || !fragmentShader) return null
  const program = gl.createProgram()
  if (!program) return null
  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)
  gl.linkProgram(program)
  return program
}

export function MetallicBackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const gl = canvas.getContext('webgl')
    if (!gl) return

    const program = buildProgram(gl)
    if (!program) return
    gl.useProgram(program)

    const positionLocation = gl.getAttribLocation(program, 'a_position')
    const resolutionLocation = gl.getUniformLocation(program, 'u_resolution')
    const timeLocation = gl.getUniformLocation(program, 'u_time')

    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    )
    gl.enableVertexAttribArray(positionLocation)
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)

    function handleResize() {
      if (!canvas || !gl) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      gl.viewport(0, 0, canvas.width, canvas.height)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    const startTime = performance.now()
    let animationFrameId = 0

    function renderLoop() {
      if (!canvas || !gl) return
      const elapsed = (performance.now() - startTime) * 0.001
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height)
      gl.uniform1f(timeLocation, elapsed)
      gl.drawArrays(gl.TRIANGLES, 0, 6)
      animationFrameId = requestAnimationFrame(renderLoop)
    }

    renderLoop()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-screen h-screen pointer-events-none z-0 opacity-60"
    />
  )
}
