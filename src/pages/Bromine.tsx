import { useMemo, useState } from "react"
import { InquiryForm } from "../components/ui/InquiryForm"
import { PageHero } from "../components/ui/PageHero"
import { ProductTable } from "../components/ui/ProductTable"
import { Reveal } from "../components/ui/Reveal"
import { bromineGroups } from "../data/products"
import { images } from "../data/site"

export function Bromine() {
  const [active, setActive] = useState(bromineGroups[0].id)
  const group = useMemo(
    () => bromineGroups.find((g) => g.id === active) ?? bromineGroups[0],
    [active],
  )

  return (
    <>
      <PageHero
        kicker="Bromine & its derivatives"
        title="Eighteen families. One bromine house."
        image={images.lab}
        text="Alkyl, aryl, inorganic, ester, fluoro, PTC, quaternary, and API lines — filter the family you need."
      />
      <section className="mx-auto max-w-6xl px-5 py-16">
        <Reveal>
          <div className="scrollbar-thin flex gap-2 overflow-x-auto pb-3">
            {bromineGroups.map((g) => (
              <button
                key={g.id}
                type="button"
                onClick={() => setActive(g.id)}
                className={`shrink-0 rounded-full px-4 py-2 text-xs tracking-wide transition ${
                  active === g.id ? "bg-ink text-cream" : "bg-cream text-ink/70 hover:bg-line"
                }`}
              >
                {g.title}
              </button>
            ))}
          </div>
        </Reveal>
        <div className="mt-8">
          <ProductTable products={group.products} caption={group.title} />
        </div>
        <Reveal className="mt-16 rounded-[2rem] bg-cream p-8 md:p-10">
          <h2 className="font-display text-3xl">Ask for a CAS, grade, or pack size</h2>
          <p className="mt-2 mb-6 text-sm text-ink/60">If a molecule is not listed, we can still discuss custom synthesis.</p>
          <InquiryForm intent="Bromine derivatives enquiry" />
        </Reveal>
      </section>
    </>
  )
}
