<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
// Generated in part with Gemini

const canvasRef = ref(null)

onMounted(() => {
  const canvas = canvasRef.value
  const ctx = canvas.getContext('2d')
  let animationFrameId
  let particles = []

  const particleCount = window.innerWidth < 768 ? 40 : 160
  const connectionDistance = 120
  const mouseGrabDistance = 150

  const dotColor = '59, 130, 246'    // #3b82f6 (Primary Blue)
  const darkThemeLine = '244, 244, 245'  // #f4f4f5 (Off-white)
  const lightThemeLine = '39, 39, 42'    // #27272a (Zinc-800)

  let mouse = { x: null, y: null }

  const resize = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width
      this.y = Math.random() * canvas.height
      this.vx = (Math.random() - 0.5) * 0.15
      this.vy = (Math.random() - 0.5) * 0.15
      this.radius = 2
    }
    update() {
      this.x += this.vx
      this.y += this.vy

      if (this.x < -this.radius) this.x = canvas.width + this.radius
      else if (this.x > canvas.width + this.radius) this.x = -this.radius

      if (this.y < -this.radius) this.y = canvas.height + this.radius
      else if (this.y > canvas.height + this.radius) this.y = -this.radius
    }
    draw() {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(${dotColor}, 0.8)`
      ctx.fill()
    }
  }

  const initParticles = () => {
    particles = []
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }
  }

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const isDark = document.documentElement.classList.contains('dark')
    const activeLineColor = isDark ? darkThemeLine : lightThemeLine

    for (let i = 0; i < particles.length; i++) {
      particles[i].update()
      particles[i].draw()

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < connectionDistance) {
          let lineOpacity = 0.5 - (distance / connectionDistance) * 0.5

          if (mouse.x && mouse.y) {
            const dxMouse = particles[i].x - mouse.x
            const dyMouse = particles[i].y - mouse.y
            const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse)

            if (distMouse < mouseGrabDistance) {
              lineOpacity += 0.4 * (1 - distMouse / mouseGrabDistance)
            }
          }

          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.strokeStyle = `rgba(${activeLineColor}, ${lineOpacity})`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      }

      if (mouse.x && mouse.y) {
        const dx = particles[i].x - mouse.x
        const dy = particles[i].y - mouse.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < mouseGrabDistance) {
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.strokeStyle = `rgba(${activeLineColor}, ${0.8 - (distance / mouseGrabDistance) * 0.8})`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      }
    }
    animationFrameId = requestAnimationFrame(animate)
  }

  window.addEventListener('resize', () => {
    resize()
    initParticles()
  })
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX
    mouse.y = e.clientY
  })
  window.addEventListener('mouseout', () => {
    mouse.x = null
    mouse.y = null
  })

  resize()
  initParticles()
  animate()

  onUnmounted(() => {
    window.removeEventListener('resize', resize)
    cancelAnimationFrame(animationFrameId)
  })
})
</script>

<template>
  <canvas ref="canvasRef" class="fixed inset-0 -z-10 bg-background pointer-events-none"></canvas>
</template>