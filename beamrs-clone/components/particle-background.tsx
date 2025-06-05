"use client"

import { useEffect, useRef, useCallback } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
  pulse: number
  pulseSpeed: number
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>()
  const mouseRef = useRef({ x: 0, y: 0 })

  const createParticles = useCallback((width: number, height: number) => {
    const particles: Particle[] = []
    const particleCount = Math.floor((width * height) / 8000)

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.6 + 0.4,
        color: Math.random() > 0.6 ? "#ef4444" : "#ffffff",
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
      })
    }

    particlesRef.current = particles
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      createParticles(canvas.width, canvas.height)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((particle, index) => {
        // Update pulse
        particle.pulse += particle.pulseSpeed

        // Mouse interaction
        const mouseDistance = Math.sqrt(
          Math.pow(particle.x - mouseRef.current.x, 2) + Math.pow(particle.y - mouseRef.current.y, 2),
        )

        if (mouseDistance < 150) {
          const force = (150 - mouseDistance) / 150
          const angle = Math.atan2(particle.y - mouseRef.current.y, particle.x - mouseRef.current.x)
          particle.vx += Math.cos(angle) * force * 0.01
          particle.vy += Math.sin(angle) * force * 0.01
        }

        // Update position with slight acceleration
        particle.x += particle.vx
        particle.y += particle.vy

        // Add slight drift
        particle.vx *= 0.999
        particle.vy *= 0.999

        // Wrap around edges with smooth transition
        if (particle.x < -10) particle.x = canvas.width + 10
        if (particle.x > canvas.width + 10) particle.x = -10
        if (particle.y < -10) particle.y = canvas.height + 10
        if (particle.y > canvas.height + 10) particle.y = -10

        // Calculate pulsing size and opacity
        const pulseSize = particle.size + Math.sin(particle.pulse) * 0.5
        const pulseOpacity = particle.opacity + Math.sin(particle.pulse) * 0.2

        // Draw particle with glow effect
        const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, pulseSize * 3)

        if (particle.color === "#ef4444") {
          gradient.addColorStop(0, `rgba(239, 68, 68, ${pulseOpacity})`)
          gradient.addColorStop(0.5, `rgba(239, 68, 68, ${pulseOpacity * 0.3})`)
          gradient.addColorStop(1, `rgba(239, 68, 68, 0)`)
        } else {
          gradient.addColorStop(0, `rgba(255, 255, 255, ${pulseOpacity})`)
          gradient.addColorStop(0.5, `rgba(255, 255, 255, ${pulseOpacity * 0.2})`)
          gradient.addColorStop(1, `rgba(255, 255, 255, 0)`)
        }

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, pulseSize * 3, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Draw core particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, pulseSize, 0, Math.PI * 2)
        ctx.fillStyle =
          particle.color === "#ef4444" ? `rgba(239, 68, 68, ${pulseOpacity})` : `rgba(255, 255, 255, ${pulseOpacity})`
        ctx.fill()

        // Draw connections with enhanced effects
        particlesRef.current.slice(index + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            const opacity = (1 - distance / 120) * 0.3
            const lineWidth = (1 - distance / 120) * 1.5

            // Create gradient line
            const lineGradient = ctx.createLinearGradient(particle.x, particle.y, otherParticle.x, otherParticle.y)

            if (particle.color === "#ef4444" || otherParticle.color === "#ef4444") {
              lineGradient.addColorStop(0, `rgba(239, 68, 68, ${opacity})`)
              lineGradient.addColorStop(0.5, `rgba(255, 100, 100, ${opacity * 0.8})`)
              lineGradient.addColorStop(1, `rgba(239, 68, 68, ${opacity})`)
            } else {
              lineGradient.addColorStop(0, `rgba(255, 255, 255, ${opacity * 0.5})`)
              lineGradient.addColorStop(0.5, `rgba(200, 200, 255, ${opacity * 0.3})`)
              lineGradient.addColorStop(1, `rgba(255, 255, 255, ${opacity * 0.5})`)
            }

            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = lineGradient
            ctx.lineWidth = lineWidth
            ctx.stroke()
          }
        })
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    animate()

    window.addEventListener("resize", resizeCanvas)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [createParticles])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }} />
}
