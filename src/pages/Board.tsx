import { PageHero } from "../components/ui/PageHero"
import { Reveal } from "../components/ui/Reveal"
import { directors, images } from "../data/site"

export function Board() {
  return (
    <>
      <PageHero
        kicker="Leadership"
        title="One vision,"
        italic="one team."
        image={images.factory}
        text="A family of technocrats — founder, plant, markets, and the next wave of systems."
      />
      <section className="mx-auto max-w-6xl space-y-8 px-5 py-20">
        {directors.map((d, i) => (
          <Reveal key={d.name} delay={i * 0.05}>
            <article
              className={`grid items-start gap-8 rounded-[2rem] p-8 md:grid-cols-12 md:p-12 ${
                i % 2 === 0 ? "bg-cream" : "bg-ink text-cream"
              }`}
            >
              <div className="md:col-span-4">
                <p className={`text-xs tracking-[0.22em] uppercase ${i % 2 === 0 ? "text-copper" : "text-copper-light"}`}>
                  {d.role}
                </p>
                <h2 className="font-display mt-2 text-4xl">{d.name}</h2>
                <p className={`mt-4 font-display text-lg italic ${i % 2 === 0 ? "text-ink/55" : "text-cream/55"}`}>
                  “{d.quote}”
                </p>
              </div>
              <p className={`md:col-span-8 leading-relaxed ${i % 2 === 0 ? "text-ink/70" : "text-cream/70"}`}>
                {d.bio}
              </p>
            </article>
          </Reveal>
        ))}
      </section>
    </>
  )
}
