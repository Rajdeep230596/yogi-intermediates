import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { nav, site } from "../../data/site"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [hover, setHover] = useState<string | null>(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setHover(null)
  }, [location.pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? "border-b border-white/8 bg-ink/92 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link to="/" className="group flex items-center gap-3 text-cream">
          <span className="relative grid h-10 w-10 place-items-center">
            <svg viewBox="0 0 40 40" className="h-10 w-10">
              <path
                d="M20 3L35 12V28L20 37L5 28V12L20 3Z"
                fill="none"
                stroke="#C46A2D"
                strokeWidth="1.6"
              />
            </svg>
            <span className="font-display absolute text-lg text-cream">Y</span>
          </span>
          <span className="leading-tight">
            <span className="block text-[11px] tracking-[0.28em] text-copper-light uppercase">Yogi</span>
            <span className="mt-0.5 inline-block rounded-md bg-[#e39a55] px-2 py-0.5 text-sm font-medium text-ink">
              Intermediates
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" onMouseLeave={() => setHover(null)}>
          {nav.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setHover(item.children ? item.label : null)}
            >
              <NavLink
                to={item.href}
                className="site-nav-link rounded-full px-3.5 py-2 text-[13px] tracking-wide transition"
              >
                {item.label}
              </NavLink>
              <AnimatePresence>
                {item.children && hover === item.label ? (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.22 }}
                    className="absolute top-full left-0 mt-3 flex w-64 flex-col gap-1.5 rounded-2xl border border-[#e39a55]/25 bg-ink/92 p-2 shadow-2xl backdrop-blur-xl"
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block rounded-lg bg-[#e39a55] px-3 py-2.5 text-sm font-medium text-ink transition hover:bg-[#c46a2d] hover:text-cream"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/enquiry"
            className="hidden rounded-full bg-copper px-5 py-2.5 text-xs font-medium tracking-[0.16em] text-cream uppercase transition hover:bg-copper-light hover:text-ink md:inline-flex"
          >
            Enquire
          </Link>
          <button
            type="button"
            aria-label="Menu"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-cream lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/8 bg-ink lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-5">
              {nav.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link to={item.href} className="block py-2 text-lg text-copper-light">
                    {item.label}
                  </Link>
                  {item.children?.map((child) => (
                    <Link
                      key={child.href}
                      to={child.href}
                      className="mt-1 block rounded-lg bg-[#e39a55] px-3 py-2 text-sm font-medium text-ink"
                    >
                      {child.label}
                    </Link>
                  ))}
                </motion.div>
              ))}
              <Link to="/contact" className="mt-3 text-sm text-copper-light">
                Contact · {site.phone}
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
