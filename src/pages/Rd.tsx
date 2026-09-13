import { PageBackdrop } from "../components/ui/PageBackdrop"
import { PageHero } from "../components/ui/PageHero"
import { Reveal } from "../components/ui/Reveal"
import { rdEquipment } from "../data/site"
import { videos } from "../data/videos"

export function Rd() {
  return (
    <div className="relative z-10">
      <PageBackdrop src={videos.productsRd} />
      <PageHero
        kicker="Research & development"
        title="Promoters who are technocrats sit with the chemists."
        text="Process development and innovation are the pillars. Two teams, five PhD leaders, and a budget that stays committed."
      />
      <section className="mx-auto max-w-6xl px-5 py-20 text-cream">
        <Reveal className="max-w-3xl">
          <p className="leading-relaxed text-cream/75">
            YIPL has a modern, well-equipped in-house R&D lab for testing, new-product development,
            and constant improvement of existing lines. We pursue innovation with the wonder of
            chemistry — staying a step ahead of competition and closer to customer expectation.
          </p>
          <p className="mt-4 leading-relaxed text-cream/75">
            Technologies and materials are developed to harmonise with the global environment while
            keeping a competitive advantage. cGMP quality-management thinking applies to key
            starting materials and intermediates. The centre handles a wide window of pressure and
            temperature.
          </p>
        </Reveal>
        <Reveal className="mt-14">
          <h2 className="font-display text-3xl text-white">The R&D floor</h2>
        </Reveal>
        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {rdEquipment.map((item, i) => (
            <Reveal
              key={item}
              delay={i * 0.03}
              className="rounded-2xl border border-white/10 bg-ink/45 px-5 py-4 text-sm backdrop-blur-md"
            >
              {item}
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
