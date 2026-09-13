import { PageHero } from "../components/ui/PageHero"
import { Reveal } from "../components/ui/Reveal"
import { countries, images } from "../data/site"

export function Reach() {
  return (
    <>
      <PageHero
        kicker="Export"
        title="A leading Indian exporter of bromide compounds."
        image={images.plant}
        text="High-purity products at precise composition — preferred by international buyers for quality and value."
      />
      <section className="mx-auto max-w-6xl px-5 py-20">
        <Reveal>
          <p className="max-w-3xl text-lg leading-relaxed text-ink/70">
            We serve the domestic market and multinational pharmaceutical and agrochemical
            companies. Shipments go to more than 25 countries including China, Malaysia, Japan, the
            United Kingdom, the USA, Singapore, Dubai, Saudi Arabia, and the UAE.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Reveal className="rounded-[1.8rem] bg-cream p-8">
            <h2 className="font-display text-3xl">Gulf</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/65">
              Saudi Arabia, Dubai, Azerbaijan, Turkey, Jordan, UAE, Israel, Oman, Qatar, Bahrain, and
              Kuwait import our products for industrial applications that demand accurate, repeatable
              results.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="rounded-[1.8rem] bg-ink p-8 text-cream">
            <h2 className="font-display text-3xl">Africa</h2>
            <p className="mt-3 text-sm leading-relaxed text-cream/70">
              Potassium, ammonium, calcium, and sodium bromide powders move into Nigeria, South
              Africa, Kenya, Algeria, and Egypt — chosen for quality and competitive pricing.
            </p>
          </Reveal>
        </div>
        <div className="mt-12 flex flex-wrap gap-2">
          {countries.map((c, i) => (
            <Reveal key={c} delay={i * 0.015}>
              <span className="rounded-full border border-line px-4 py-2 text-sm text-ink/70">{c}</span>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
