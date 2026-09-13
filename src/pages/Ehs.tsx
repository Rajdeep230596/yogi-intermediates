import { PageHero } from "../components/ui/PageHero"
import { Reveal } from "../components/ui/Reveal"
import { images } from "../data/site"

const points = [
  "Facility approved by Alcumus ISOQAR — ISO 9001:2015",
  "Fire hydrant system and extinguishers across the unit",
  "Round-the-clock ambulance and occupational health centre",
  "On-site emergency mock drills and periodic health check-ups",
  "Dedicated storage for hazardous and flammable chemicals",
  "PPE for every front-line worker — helmets, gloves, glasses, shoes",
  "Dedicated safety officers for production, storage, and maintenance",
  "Emergency alarm for fire or explosion",
  "ETP with primary, secondary, and tertiary treatment",
  "Liquid effluent to CETP; solid/liquid waste to approved landfill or incineration",
  "Zero liquid discharge system — 50 KLD with SS evaporator, RO, and bioreactors",
]

export function Ehs() {
  return (
    <>
      <PageHero
        kicker="Environment, health & safety"
        title="Cleaner processes. Safer people. Zero liquid discharge."
        image={images.plant}
        text="Hazards are real in bromine chemistry. So is the machinery we installed to control them."
      />
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-3 md:grid-cols-2">
          {points.map((p, i) => (
            <Reveal key={p} delay={i * 0.03} className="rounded-3xl bg-cream px-5 py-4 text-sm leading-relaxed">
              {p}
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-14 rounded-[2rem] bg-ink p-8 text-cream md:p-12">
          <h2 className="font-display text-3xl">EHS policy, in practice</h2>
          <p className="mt-4 leading-relaxed text-cream/70">
            We develop clean and safe technologies at the right stage of process development, design,
            purchase, manufacture, maintenance, and packaging. The policy is communicated to
            employees, contractors, visitors, and stakeholders. Environmental protection, energy and
            material minimisation, pollution prevention, and safe behaviour are integrated into how
            we select people and run the plant.
          </p>
        </Reveal>
      </section>
    </>
  )
}
