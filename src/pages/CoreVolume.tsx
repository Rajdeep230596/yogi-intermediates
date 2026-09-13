import { InquiryForm } from "../components/ui/InquiryForm"
import { PageHero } from "../components/ui/PageHero"
import { ProductTable } from "../components/ui/ProductTable"
import { Reveal } from "../components/ui/Reveal"
import { coreProducts } from "../data/products"
import { images } from "../data/site"

export function CoreVolume() {
  return (
    <>
      <PageHero
        kicker="Core & volume"
        title="The products we make at scale."
        image={images.tubes}
        text="Alkyl and aryl bromides, inorganic salts, and hydrobromic acid — developed in-house and supplied consistently."
      />
      <section className="mx-auto max-w-6xl px-5 py-16">
        <Reveal>
          <ProductTable products={coreProducts} caption="Core & volume products" />
        </Reveal>
        <Reveal className="mt-16 rounded-[2rem] bg-cream p-8 md:p-10">
          <h2 className="font-display text-3xl">Need a specification or a quote?</h2>
          <p className="mt-2 mb-6 text-sm text-ink/60">Share the product, grade, and destination. We will respond from Ahmedabad.</p>
          <InquiryForm intent="Core & volume enquiry" />
        </Reveal>
      </section>
    </>
  )
}
