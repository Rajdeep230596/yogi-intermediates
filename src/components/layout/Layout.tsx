import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { useEffect, useState } from "react"
import { Link, Outlet, useLocation } from "react-router-dom"
import { Footer } from "./Footer"
import { Header } from "./Header"

export function Layout() {
  const location = useLocation()
  const [booting, setBooting] = useState(true)

  useEffect(() => {
    const t = window.setTimeout(() => setBooting(false), 1100)
    return () => window.clearTimeout(t)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-paper">
      <AnimatePresence>
        {booting ? (
          <motion.div
            className="fixed inset-0 z-[80] grid place-items-center bg-ink text-cream"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="relative mx-auto mb-4 grid h-16 w-16 place-items-center">
                <svg viewBox="0 0 64 64" className="h-16 w-16">
                  <path
                    d="M32 6L54 19V45L32 58L10 45V19L32 6Z"
                    fill="none"
                    stroke="#C46A2D"
                    strokeWidth="1.8"
                  />
                </svg>
                <span className="font-display absolute text-2xl">Y</span>
              </div>
              <p className="text-[11px] tracking-[0.4em] text-copper-light uppercase">Yogi Intermediates</p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />

      <Link
        to="/enquiry"
        className="fixed right-5 bottom-5 z-40 inline-flex items-center gap-2 rounded-full bg-copper px-4 py-3 text-xs font-medium tracking-[0.14em] text-cream uppercase shadow-xl transition hover:-translate-y-0.5 hover:bg-ink md:right-8 md:bottom-8"
      >
        Enquire <ArrowUpRight size={14} />
      </Link>
    </div>
  )
}
