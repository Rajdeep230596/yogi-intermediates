import { motion } from "framer-motion"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { useRef } from "react"
import { Link } from "react-router-dom"
import { CountUp } from "../components/ui/CountUp"
import { Reveal } from "../components/ui/Reveal"
import { UnifiedBackdrop } from "../components/ui/UnifiedBackdrop"
import { countries, images, site, stats } from "../data/site"
import { videos } from "../data/videos"
import { families } from "../data/products"

export function Home() {
  const chapterRef = useRef<HTMLDivElement>(null)

  return (
    <div className="relative z-10 bg-transparent">
      <UnifiedBackdrop
        chapterRef={chapterRef}
        scrollSrc={videos.geminiScroll}
        loopSrc={videos.restLoop}
      />

      <div className="relative z-10">
        <div ref={chapterRef}>
      <section className="relative isolate min-h-[100svh] text-cream">
        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pt-32 pb-16 md:pb-24">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-[11px] tracking-[0.38em] text-copper-light uppercase"
          >
            {site.tagline}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="hero-title font-display mt-5 max-w-5xl font-medium"
          >
            <span className="hero-kicker">
              <span className="inline-block bg-[#e39a55] px-[0.22em] text-cream">
                Leading manufacturer
              </span>
              <br />
              <span className="inline-block bg-[#e39a55] px-[0.22em] text-cream">
                in the field of
              </span>{" "}
            </span>
            <span className="hero-brand text-copper-light uppercase">bromine derivatives.</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.86 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full bg-copper px-6 py-3 text-sm font-medium text-cream transition hover:bg-copper-light hover:text-ink"
            >
              Explore products <ArrowRight size={16} />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-6 py-3 text-sm text-cream transition hover:border-cream"
            >
              Our story
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 -mt-10 px-5">
        <div className="mx-auto grid max-w-7xl gap-3 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="rounded-3xl bg-cream p-6 shadow-lg shadow-ink/5">
              <p className="font-display text-4xl text-ink md:text-5xl">
                <CountUp value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-ink/55">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-5 py-24 text-cream">
        <Reveal>
          <p className="text-[11px] tracking-[0.3em] text-copper-light uppercase">About us</p>
          <h2 className="font-display mt-3 text-4xl leading-[1.05] font-medium md:text-6xl">
            A nationally
            <br />
            and globally
            <br />
            accepted name
            <br />
            in bromine.
          </h2>
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-copper-light">
            About Yogi <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>

      <section className="relative py-24 text-cream">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <p className="text-[11px] tracking-[0.3em] text-copper-light uppercase">Our products</p>
            <h2 className="font-display mt-3 max-w-3xl text-4xl leading-tight md:text-5xl">
              From concept to fruition — and beyond.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {families.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.06}>
                <Link
                  to={f.href}
                  className="group flex h-full flex-col justify-between rounded-[1.6rem] border border-white/12 bg-ink/45 p-8 backdrop-blur-md transition hover:-translate-y-1 hover:border-copper-light/50 hover:bg-ink/60"
                >
                  <div>
                    <p className="text-xs tracking-[0.22em] text-copper-light/80 uppercase">0{i + 1}</p>
                    <h3 className="font-display mt-3 text-3xl text-white">{f.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-cream/65">{f.text}</p>
                  </div>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm text-cream/45 transition group-hover:text-copper-light">
                    View range <ArrowUpRight size={16} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
        </div>

      <section className="relative py-24 text-cream">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2">
          <Reveal>
            <p className="text-[11px] tracking-[0.3em] text-copper-light uppercase">Quality commitment</p>
            <h2 className="font-display mt-3 text-4xl md:text-5xl">Control from the first assay to the last drum.</h2>
            <Link to="/infrastructure/qa-qc" className="mt-6 inline-flex items-center gap-2 text-sm text-copper-light">
              Quality systems <ArrowRight size={16} />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[11px] tracking-[0.3em] text-copper-light uppercase">Research</p>
            <h2 className="font-display mt-3 text-4xl md:text-5xl">An in-house R&D centre, led by PhDs.</h2>
            <Link to="/rd" className="mt-6 inline-flex items-center gap-2 text-sm text-copper-light">
              Visit R&D <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 text-cream md:grid-cols-2">
        <Reveal>
          <img src={images.plant} alt="Manufacturing facility" className="h-[420px] w-full rounded-[2rem] object-cover" />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-[11px] tracking-[0.3em] text-copper-light uppercase">Infrastructure</p>
          <h2 className="font-display mt-3 text-4xl md:text-5xl">Glass-lined reactors. Distillation. ZLD.</h2>
          <p className="mt-5 leading-relaxed text-cream/70">
            Panoli is equipped with glass-lined, MS, and SS reactors up to 15 KL, distillation
            columns to 20 metres, ANFDs, centrifuges, chilling to −50 °C, a 100 MT bromine farm, and
            an effluent plant with multi-effect evaporation and zero liquid discharge.
          </p>
          <Link to="/infrastructure" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-copper-light">
            Tour the site <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>

      <section className="overflow-hidden py-20 text-cream">
        <Reveal className="mx-auto max-w-7xl px-5">
          <p className="text-[11px] tracking-[0.3em] text-copper-light uppercase">Our reach</p>
          <h2 className="font-display mt-3 text-4xl">Exporting bromide compounds to 25+ countries.</h2>
        </Reveal>
        <div className="mt-10 flex overflow-hidden">
          <div className="marquee-track flex min-w-max gap-10 pr-10 text-3xl text-cream/25 md:text-5xl">
            {[...countries, ...countries].map((c, i) => (
              <span key={`${c}-${i}`} className="font-display whitespace-nowrap">
                {c}
              </span>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl px-5">
          <Link to="/reach" className="inline-flex items-center gap-2 text-sm font-medium text-copper-light">
            See markets <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="relative px-5 py-24 text-cream">
        <Reveal className="relative mx-auto max-w-4xl text-center">
          <p className="text-[11px] tracking-[0.3em] text-copper-light uppercase">Brochure</p>
          <h2 className="font-display mt-4 text-4xl md:text-6xl">The full catalogue, in one file.</h2>
          <p className="mx-auto mt-5 max-w-xl text-cream/60">
            Infrastructure, chemistry, CRAMS, and the product range — ready to share with your
            sourcing or technical team.
          </p>
          <a
            href={site.brochure}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-copper px-7 py-3.5 text-sm font-medium"
          >
            Download brochure <ArrowUpRight size={16} />
          </a>
        </Reveal>
      </section>
      </div>
    </div>
  )
}
