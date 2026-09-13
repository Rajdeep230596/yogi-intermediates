import { PageHero } from "../components/ui/PageHero"
import { Reveal } from "../components/ui/Reveal"
import { cramsServices, images } from "../data/site"

export function Crams() {
  return (
    <>
      <PageHero
        kicker="CRAMS"
        title="From route scouting to commercial tons."
        image={images.scientist}
        text="Contract research and manufacturing for APIs, advanced intermediates, agrochemicals, pesticides, flavours, fragrances, and specialty chemicals."
      />
      <section className="mx-auto max-w-6xl px-5 py-20">
        <Reveal className="max-w-3xl">
          <p className="text-lg leading-relaxed text-ink/70">
            Yogi undertakes contract manufacturing of APIs and intermediates — a competitive
            advantage especially in the late-stage lifecycle of products. Quality, research, global
            manufacturing, and IP awareness sit together so innovator programs can move faster.
          </p>
          <p className="mt-4 leading-relaxed text-ink/65">
            The Panoli site is supported by technology, engineering, production, and compliance. We
            can assist at every stage: technology transfer from lab to commercial, and molecules from
            kilo to tons.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-3 md:grid-cols-2">
          {cramsServices.map((s, i) => (
            <Reveal key={s} delay={i * 0.04} className="rounded-3xl bg-cream px-6 py-5">
              <p className="text-xs tracking-[0.2em] text-copper uppercase">{String(i + 1).padStart(2, "0")}</p>
              <p className="mt-2 font-medium">{s}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
