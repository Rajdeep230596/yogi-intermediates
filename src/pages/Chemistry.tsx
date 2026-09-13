import { PageHero } from "../components/ui/PageHero"
import { Reveal } from "../components/ui/Reveal"
import { images, reactionList, reactions } from "../data/site"

export function Chemistry() {
  return (
    <>
      <PageHero
        kicker="Chemistry & reaction capability"
        title="HBr chemistry — and everything around it."
        image={images.glass}
        text="Halogenation, Grignard, oxidation, Friedel–Crafts, heterocycles, reduction, Suzuki, and chiral routes."
      />
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-4 md:grid-cols-2">
          {reactions.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.04} className="rounded-[1.5rem] border border-line p-6">
              <p className="text-xs tracking-[0.2em] text-copper uppercase">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="font-display mt-2 text-2xl">{r.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{r.text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-16">
          <h2 className="font-display text-3xl">Reactions we handle routinely</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {reactionList.map((r) => (
              <span key={r} className="rounded-full bg-cream px-3 py-1.5 text-xs text-ink/70">
                {r}
              </span>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  )
}
