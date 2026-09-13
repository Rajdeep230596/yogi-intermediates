import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import { PageBackdrop } from "../components/ui/PageBackdrop"
import { PageHero } from "../components/ui/PageHero"
import { Reveal } from "../components/ui/Reveal"
import { images } from "../data/site"
import { videos } from "../data/videos"

const cards = [
  {
    title: "Core & Volume",
    href: "/products/core-volume",
    text: "High-volume alkyl, aryl, and inorganic bromides — the workhorses of the catalogue.",
    image: images.tubes,
  },
  {
    title: "Bromine & Derivatives",
    href: "/products/bromine",
    text: "Eighteen families from alkyl bromides to API intermediates and quaternary salts.",
    image: images.lab,
  },
  {
    title: "Oil & Gas Specialties",
    href: "/products/oil-gas",
    text: "Completion fluids, inhibitors, scavengers, and mud additives for drilling chemistry.",
    image: images.industrial,
  },
]

export function Products() {
  return (
    <div className="relative z-10">
      <PageBackdrop src={videos.productsRd} />
      <PageHero
        kicker="Catalogue"
        title="Intermediates designed around the end use."
        text="Over two decades we have developed products for pharmaceutical, agrochemical, polymer additive, paint, and construction-chemical industries — all on in-house technology."
      />
      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-20 md:grid-cols-3">
        {cards.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.07}>
            <Link
              to={c.href}
              className="group block overflow-hidden rounded-[2rem] border border-white/10 bg-ink/50 text-cream backdrop-blur-md"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={c.image}
                  alt=""
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent" />
              </div>
              <div className="p-7">
                <h2 className="font-display text-3xl text-white">{c.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-cream/65">{c.text}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm text-copper-light">
                  Open list <ArrowUpRight size={16} />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </section>
    </div>
  )
}
