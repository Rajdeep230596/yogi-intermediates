import { PageHero } from "../components/ui/PageHero"
import { Reveal } from "../components/ui/Reveal"
import { images } from "../data/site"

const instruments = [
  "GC-MS",
  "LC-MS",
  "HPLC",
  "UPLC",
  "DSC",
  "UV–Vis spectrophotometer",
  "Karl Fischer moisture analyser",
  "Lovibond / Nessleriser for APHA",
  "TGA",
  "ICP-OES",
  "IR moisture balance",
  "Auto titrator",
  "Polarimeter",
]

const objectives = [
  "Incorporate sustainable business practices",
  "Ensure timely delivery",
  "Learn systematically from customer feedback",
  "Train people properly",
  "Improve the quality-management system continually",
]

export function QaQc() {
  return (
    <>
      <PageHero
        kicker="QA / QC"
        title="Laboratories that work around the clock."
        image={images.scientist}
        text="Quality is maintained — and improved — because both management and operators strive for it."
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-3xl">Analytical support</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/65">
            QC labs are equipped for chromatographic, spectroscopic, and wet-chemistry work so every
            lot can be released with a complete picture.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {instruments.map((i) => (
              <span key={i} className="rounded-full border border-line px-3 py-1.5 text-xs">
                {i}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display text-3xl">Quality assurance</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/65">
            Complete customer satisfaction through product quality, timely delivery, and
            sustainability. Certified to ISO 9001:2015, with systems moving toward ISO 14000.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-ink/70">
            {objectives.map((o) => (
              <li key={o} className="rounded-2xl bg-cream px-4 py-3">
                {o}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>
    </>
  )
}
