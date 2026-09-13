import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import { PageHero } from "../components/ui/PageHero"
import { Reveal } from "../components/ui/Reveal"
import { images, infraSpecs } from "../data/site"

const links = [
  { title: "Manufacturing", href: "/infrastructure/manufacturing", text: "Reactors, distillation, dryers, tank farm." },
  { title: "Chemistry", href: "/infrastructure/chemistry", text: "Halogenation to Suzuki — the reaction slate." },
  { title: "QA / QC", href: "/infrastructure/qa-qc", text: "GC, HPLC, and a quality system that never sleeps." },
  { title: "Utilities", href: "/infrastructure/utilities", text: "Steam, brine, nitrogen, vacuum, and power." },
  { title: "EHS", href: "/infrastructure/ehs", text: "ISO 9001, ZLD, and a zero-injury ambition." },
]

export function Infrastructure() {
  return (
    <>
      <PageHero
        kicker="Infrastructure"
        title="A site built for multi-step chemistry."
        image={images.plant}
        text="Glass-lined, MS, and SS reactors. Distillation. Pressure filters. Dryers. Heating, chilling, cooling, and vacuum — with a dedicated utility block and ETP."
      />
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {infraSpecs.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.03} className="rounded-3xl bg-cream p-6">
              <p className="text-xs tracking-[0.18em] text-ink/40 uppercase">{s.label}</p>
              <p className="font-display mt-2 text-2xl">{s.value}</p>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {links.map((l, i) => (
            <Reveal key={l.href} delay={i * 0.05}>
              <Link
                to={l.href}
                className="group flex items-center justify-between rounded-[1.6rem] border border-line p-6 transition hover:border-copper/40"
              >
                <div>
                  <h2 className="font-display text-2xl">{l.title}</h2>
                  <p className="mt-1 text-sm text-ink/55">{l.text}</p>
                </div>
                <ArrowUpRight className="text-copper" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
