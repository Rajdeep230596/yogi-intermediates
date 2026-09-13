import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

type PageBackdropProps = {
  src: string
}

export function PageBackdrop({ src }: PageBackdropProps) {
  const [node, setNode] = useState<HTMLElement | null>(null)

  useEffect(() => {
    setNode(document.body)
  }, [])

  if (!node) return null

  return createPortal(
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden bg-ink">
      <video
        src={src}
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
        aria-hidden
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/55 via-ink/25 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-ink/20" />
    </div>,
    node,
  )
}
