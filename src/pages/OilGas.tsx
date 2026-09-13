import { Link } from "react-router-dom"
import { InquiryForm } from "../components/ui/InquiryForm"
import { PageHero } from "../components/ui/PageHero"
import { Reveal } from "../components/ui/Reveal"
import { oilGas } from "../data/products"
import { images } from "../data/site"

export function OilGas() {
  return (
    <>
      <PageHero
        kicker="Oil & gas"
        title="Specialty chemicals for drilling and completion."
        image={images.industrial}
        text="Sodium bromide for oilfield density, plus a full additive slate for mud, shale, corrosion, and fluid loss."
      />
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {oilGas.map((name, i) => (
            <Reveal key={name} delay={i * 0.03}>
              <Link
                to={`/enquiry?product=${encodeURIComponent(name)}`}
                className="block rounded-3xl border border-line bg-white p-5 transition hover:-translate-y-0.5 hover:border-copper/40"
              >
                <p className="text-[11px] tracking-[0.2em] text-copper/70 uppercase">{String(i + 1).padStart(2, "0")}</p>
                <h2 className="mt-2 font-medium">{name}</h2>
                <p className="mt-3 text-xs text-ink/45">View products / enquire</p>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-16 rounded-[2rem] bg-cream p-8 md:p-10">
          <h2 className="font-display text-3xl">Field-grade enquiry</h2>
          <p className="mt-2 mb-6 text-sm text-ink/60">Tell us the well chemistry, density, and destination market.</p>
          <InquiryForm intent="Oil & gas specialty enquiry" />
        </Reveal>
      </section>
    </>
  )
}
