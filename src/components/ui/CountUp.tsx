import { useEffect, useRef, useState } from "react"

type CountUpProps = {
  value: number
  suffix?: string
  duration?: number
}

export function CountUp({ value, suffix = "", duration = 1400 }: CountUpProps) {
  const [n, setN] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true
        const start = performance.now()
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration)
          const eased = 1 - (1 - t) ** 3
          setN(Math.round(value * eased))
          if (t < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [duration, value])

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  )
}
