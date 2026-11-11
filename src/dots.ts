type Dot = {
  homeX: number
  homeY: number
  x: number
  y: number
  scale: number
}

const GAP = 28
const BASE_RADIUS = 1.2
const MAX_SCALE = 2.15
const INFLUENCE = 120
const PULL = 12
const RETURN_SPEED = 0.14
const SCALE_SPEED = 0.19

let canvas: HTMLCanvasElement | null = null
let ctx: CanvasRenderingContext2D | null = null
let dots: Dot[] = []
let raf = 0
let width = 0
let height = 0
let mouseX = -9999
let mouseY = -9999
let mouseActive = false
let running = false

function buildDots(): void {
  dots = []
  const cols = Math.ceil(width / GAP) + 1
  const rows = Math.ceil(height / GAP) + 1
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      const homeX = col * GAP
      const homeY = row * GAP
      dots.push({ homeX, homeY, x: homeX, y: homeY, scale: 1 })
    }
  }
}

function resize(): void {
  if (!canvas || !ctx) return
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  width = window.innerWidth
  height = window.innerHeight
  canvas.width = Math.floor(width * dpr)
  canvas.height = Math.floor(height * dpr)
  canvas.style.width = `${width}px`
  canvas.style.height = `${height}px`
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  buildDots()
}

function fadeForY(y: number): number {
  const t = y / Math.max(height, 1)
  if (t < 0.34) return 1
  if (t > 0.78) return 0
  return 1 - (t - 0.34) / 0.44
}

function tick(): void {
  if (!ctx || !canvas) return

  ctx.clearRect(0, 0, width, height)

  let closestIndex = -1
  let closestDist = Number.POSITIVE_INFINITY

  if (mouseActive) {
    for (let i = 0; i < dots.length; i += 1) {
      const dot = dots[i]
      const dx = mouseX - dot.homeX
      const dy = mouseY - dot.homeY
      const dist = Math.hypot(dx, dy)
      if (dist < closestDist) {
        closestDist = dist
        closestIndex = i
      }
    }
  }

  for (let i = 0; i < dots.length; i += 1) {
    const dot = dots[i]
    let targetX = dot.homeX
    let targetY = dot.homeY
    let targetScale = 1

    if (mouseActive) {
      const dx = mouseX - dot.homeX
      const dy = mouseY - dot.homeY
      const dist = Math.hypot(dx, dy)

      if (dist < INFLUENCE) {
        const strength = 1 - dist / INFLUENCE
        targetScale = 1 + strength * (MAX_SCALE - 1)
      }

      if (i === closestIndex && closestDist < INFLUENCE * 1.15) {
        const pull = Math.min(PULL, closestDist * 0.22)
        const angle = Math.atan2(mouseY - dot.homeY, mouseX - dot.homeX)
        targetX = dot.homeX + Math.cos(angle) * pull
        targetY = dot.homeY + Math.sin(angle) * pull
        targetScale = Math.max(targetScale, 1.8)
      }
    }

    dot.x += (targetX - dot.x) * RETURN_SPEED
    dot.y += (targetY - dot.y) * RETURN_SPEED
    dot.scale += (targetScale - dot.scale) * SCALE_SPEED

    const alpha = 0.35 * fadeForY(dot.homeY)
    if (alpha <= 0.01) continue

    ctx.beginPath()
    ctx.fillStyle = `rgba(15, 118, 110, ${alpha})`
    ctx.arc(dot.x, dot.y, BASE_RADIUS * dot.scale, 0, Math.PI * 2)
    ctx.fill()
  }

  raf = window.requestAnimationFrame(tick)
}

function onMove(event: PointerEvent): void {
  mouseActive = true
  mouseX = event.clientX
  mouseY = event.clientY
}

function onLeave(): void {
  mouseActive = false
  mouseX = -9999
  mouseY = -9999
}

export function bootDots(): void {
  if (running) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  if (window.matchMedia('(pointer: coarse)').matches) return

  canvas = document.querySelector<HTMLCanvasElement>('canvas.page-dots')
  if (!canvas) {
    canvas = document.createElement('canvas')
    canvas.className = 'page-dots'
    canvas.setAttribute('aria-hidden', 'true')
    document.body.prepend(canvas)
  }
  ctx = canvas.getContext('2d')
  if (!ctx) return

  running = true
  resize()
  window.addEventListener('resize', resize)
  window.addEventListener('pointermove', onMove, { passive: true })
  window.addEventListener('pointerleave', onLeave)
  document.addEventListener('pointerout', (event) => {
    if (!event.relatedTarget) onLeave()
  })
  raf = window.requestAnimationFrame(tick)
}

export function destroyDots(): void {
  if (!running) return
  window.cancelAnimationFrame(raf)
  window.removeEventListener('resize', resize)
  window.removeEventListener('pointermove', onMove)
  window.removeEventListener('pointerleave', onLeave)
  canvas?.remove()
  canvas = null
  ctx = null
  dots = []
  running = false
}
