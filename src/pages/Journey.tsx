import { PageHero } from "../components/ui/PageHero"
import { Reveal } from "../components/ui/Reveal"
import { images, timeline } from "../data/site"

export function Journey() {
  return (
    <>
      <PageHero
        kicker="1995 — today"
        title="A plant, then a recovery unit, then a research centre."
        italic="Then the world."
        image={images.industrial}
        text="From one bromine product to India’s largest derivatives house — built in measured steps."
      />
      <section className="mx-auto max-w-4xl px-5 py-20">
        <div className="relative border-l border-line pl-8 md:pl-12">
          {timeline.map((item, i) => (
            <Reveal key={item.year} delay={i * 0.04} className="relative mb-14 last:mb-0">
              <span className="absolute top-1 -left-[39px] h-3.5 w-3.5 rounded-full bg-copper md:-left-[55px]" />
              <p className="text-xs tracking-[0.28em] text-copper uppercase">{item.year}</p>
              <h2 className="font-display mt-2 text-3xl">{item.title}</h2>
              <p className="mt-3 leading-relaxed text-ink/65">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
