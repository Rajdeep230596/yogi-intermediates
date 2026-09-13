import { PageHero } from "../components/ui/PageHero"
import { Reveal } from "../components/ui/Reveal"
import { images, utilities } from "../data/site"

export function Utilities() {
  return (
    <>
      <PageHero
        kicker="Utilities"
        title="The plant behind the plant."
        image={images.factory}
        text="Steam, brine, nitrogen, vacuum, DM water, and power — sized for bromine chemistry."
      />
      <section className="mx-auto max-w-6xl px-5 py-16">
        <Reveal>
          <h2 className="font-display text-3xl">Process utilities</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {utilities.process.map((u) => (
              <span key={u} className="rounded-full bg-cream px-4 py-2 text-sm">
                {u}
              </span>
            ))}
          </div>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {utilities.groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.05} className="rounded-[1.5rem] border border-line p-6">
              <h3 className="font-display text-2xl">{g.title}</h3>
              <ul className="mt-4 space-y-1.5 text-sm text-ink/65">
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
