import { useEffect, useRef, type RefObject } from "react"

type ScrollVideoProps = {
  src: string
  trackRef: RefObject<HTMLElement | null>
  className?: string
}

function clamp(n: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, n))
}

export function ScrollVideo({ src, trackRef, className = "" }: ScrollVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const targetRef = useRef(0)
  const lastTimeRef = useRef(-1)

  useEffect(() => {
    const video = videoRef.current
    const track = trackRef.current
    if (!video || !track) return

    video.pause()
    video.muted = true
    video.playsInline = true

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.currentTime = 0
      return
    }

    const measure = () => {
      const total = track.offsetHeight - window.innerHeight
      if (total <= 0) return 0
      return clamp(-track.getBoundingClientRect().top / total)
    }

    const apply = (progress: number) => {
      video.style.transform = `scale(${1 + progress * 0.08})`
      const duration = video.duration
      if (!Number.isFinite(duration) || duration <= 0) return
      const next = progress * Math.max(duration - 0.05, 0)
      if (Math.abs(next - lastTimeRef.current) < 0.008 || video.seeking) return
      lastTimeRef.current = next
      video.currentTime = next
    }

    let raf = 0
    const tick = () => {
      apply(targetRef.current)
      raf = requestAnimationFrame(tick)
    }

    const onScroll = () => {
      targetRef.current = measure()
    }

    const onReady = () => apply(measure())

    targetRef.current = measure()
    video.addEventListener("loadedmetadata", onReady)
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      video.removeEventListener("loadedmetadata", onReady)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [src, trackRef])

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      playsInline
      preload="auto"
      aria-hidden
      className={`h-full w-full origin-center object-cover will-change-transform ${className}`}
    />
  )
}
