import { useSearchParams } from "react-router-dom"
import { InquiryForm } from "../components/ui/InquiryForm"
import { PageHero } from "../components/ui/PageHero"
import { images } from "../data/site"

export function Enquiry() {
  const [params] = useSearchParams()
  const product = params.get("product") ?? ""

  return (
    <>
      <PageHero
        kicker="Enquiry"
        title="Tell us the molecule. We’ll take it from there."
        image={images.tubes}
        text="Specifications, volume, destination, or a custom route — the technical and commercial team in Ahmedabad will respond."
      />
      <section className="mx-auto max-w-3xl px-5 py-16">
        <div className="rounded-[2rem] bg-cream p-8 md:p-10">
          {product ? (
            <p className="mb-6 text-sm text-ink/60">
              Enquiry regarding <strong className="text-ink">{product}</strong>
            </p>
          ) : null}
          <InquiryForm
            key={product}
            defaultProduct={product}
            intent={product ? `Enquiry — ${product}` : "Website enquiry"}
          />
        </div>
      </section>
    </>
  )
}
