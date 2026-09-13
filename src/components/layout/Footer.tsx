import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import { site } from "../../data/site"

const columns = [
  {
    title: "Company",
    links: [
      ["About", "/about"],
      ["Journey", "/journey"],
      ["Board", "/board"],
      ["Our reach", "/reach"],
      ["Career", "/career"],
      ["Contact", "/contact"],
      ["Enquiry", "/enquiry"],
    ],
  },
  {
    title: "Products",
    links: [
      ["Core & volume", "/products/core-volume"],
      ["Bromine derivatives", "/products/bromine"],
      ["Oil & gas", "/products/oil-gas"],
      ["CRAMS", "/crams"],
    ],
  },
  {
    title: "Capability",
    links: [
      ["Infrastructure", "/infrastructure"],
      ["Manufacturing", "/infrastructure/manufacturing"],
      ["Chemistry", "/infrastructure/chemistry"],
      ["QA / QC", "/infrastructure/qa-qc"],
      ["EHS", "/infrastructure/ehs"],
      ["R&D", "/rd"],
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative z-20 bg-ink text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="text-[11px] tracking-[0.3em] text-copper-light uppercase">{site.tagline}</p>
          <h2 className="font-display mt-3 text-3xl leading-tight">
            Made in India
            <br />
            <em className="text-copper-light">for the world.</em>
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/60">
            India’s leading manufacturer of bromine derivatives, specialty chemicals, and API
            intermediates — from Panoli and Sanand to more than 25 countries.
          </p>
          <a
            href={site.brochure}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm text-copper-light"
          >
            Download brochure <ArrowUpRight size={16} />
          </a>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <p className="text-[11px] tracking-[0.22em] text-cream/40 uppercase">{col.title}</p>
            <ul className="mt-4 space-y-2">
              {col.links.map(([label, href]) => (
                <li key={href}>
                  <Link to={href} className="text-sm text-cream/70 transition hover:text-cream">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-cream/40 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <p>
            <a href={site.emailHref}>{site.email}</a>
            <span className="mx-2">·</span>
            <a href={site.phoneHref}>{site.phone}</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
