import { PageHero } from "../components/ui/PageHero"
import { Reveal } from "../components/ui/Reveal"
import { images, infraSpecs } from "../data/site"

export function Manufacturing() {
  return (
    <>
      <PageHero
        kicker="Manufacturing facility"
        title="World-class equipment, commissioned at speed."
        image={images.factory}
        text="Manufacturing is a passion. That passion built plants with working efficiency and a reputation for flawless project execution."
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2">
        <Reveal>
          <p className="leading-relaxed text-ink/70">
            The site holds a wide range of reactor sizes — glass-lined, MS, and SS — with matching
            distillation columns and downstream processing: pressure filters, dryers, and more.
            Utilities cover heating, chilling, cooling, and vacuum.
          </p>
          <p className="mt-4 leading-relaxed text-ink/70">
            A separate utility block sits beside an ETP with multi-effect evaporation, sewage
            treatment, water softening, and a solid-waste incinerator. Storage includes a
            multi-disciplinary racking system, a large solvent tank farm, and solid warehouses.
            Pack-out uses HDPE drums, MS composite drums, ISO tanks, and IBCs.
          </p>
          <p className="mt-4 leading-relaxed text-ink/70">
            Analytical capability includes GC, HPLC, infrared spectroscopy, Karl Fischer, UV
            chamber, and FT-IR. More than 100 qualified people run the site — ready for multi-step
            chemistry, advanced intermediates, and contract manufacturing.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <img src={images.industrial} alt="Plant" className="h-full min-h-[360px] w-full rounded-[2rem] object-cover" />
        </Reveal>
      </section>
      <section className="bg-cream py-16">
        <div className="mx-auto grid max-w-6xl gap-3 px-5 sm:grid-cols-2 md:grid-cols-4">
          {infraSpecs.map((s) => (
            <div key={s.label} className="rounded-2xl bg-paper p-5">
              <p className="text-[11px] tracking-wide text-ink/40 uppercase">{s.label}</p>
              <p className="font-display mt-1 text-xl">{s.value}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
