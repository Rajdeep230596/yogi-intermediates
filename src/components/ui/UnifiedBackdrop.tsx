import { useEffect, useRef, type RefObject } from "react"
import { ScrollVideo } from "./ScrollVideo"

type UnifiedBackdropProps = {
  chapterRef: RefObject<HTMLElement | null>
  scrollSrc: string
  loopSrc: string
}

function clamp(n: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, n))
}

function smoothstep(edge0: number, edge1: number, x: number) {
  const t = clamp((x - edge0) / (edge1 - edge0))
  return t * t * (3 - 2 * t)
}

export function UnifiedBackdrop({ chapterRef, scrollSrc, loopSrc }: UnifiedBackdropProps) {
  const layerRef = useRef<HTMLDivElement>(null)
  const loopRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const layer = layerRef.current
    const loop = loopRef.current
    const chapter = chapterRef.current
    if (!layer || !loop || !chapter) return

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const apply = () => {
      const chapterSpan = Math.max(chapter.offsetHeight - window.innerHeight, 1)
      const chapterProgress = clamp(-chapter.getBoundingClientRect().top / chapterSpan)
      const blend = smoothstep(0.62, 0.92, chapterProgress)
      layer.style.setProperty("--backdrop-blend", String(blend))
    }

    const startLoop = () => {
      loop.muted = true
      loop.loop = true
      loop.playsInline = true
      if (!reduce) void loop.play()
    }

    apply()
    if (loop.readyState >= 1) startLoop()
    else loop.addEventListener("loadedmetadata", startLoop, { once: true })

    window.addEventListener("scroll", apply, { passive: true })
    window.addEventListener("resize", apply)
    return () => {
      window.removeEventListener("scroll", apply)
      window.removeEventListener("resize", apply)
    }
  }, [chapterRef, loopSrc])

  return (
    <div
      ref={layerRef}
      className="home-backdrop pointer-events-none fixed inset-0 z-0 overflow-hidden bg-ink"
    >
      <video
        ref={loopRef}
        src={loopSrc}
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
        aria-hidden
        className="absolute inset-0 h-full w-full scale-[1.08] object-cover"
      />
      <div className="backdrop-scroll absolute inset-0">
        <ScrollVideo src={scrollSrc} trackRef={chapterRef} />
      </div>
      <div className="backdrop-wash absolute inset-0" />
    </div>
  )
}
