import { Mail, MapPin, Phone } from "lucide-react"
import { InquiryForm } from "../components/ui/InquiryForm"
import { PageHero } from "../components/ui/PageHero"
import { Reveal } from "../components/ui/Reveal"
import { images, site } from "../data/site"

export function Contact() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Ahmedabad office. Two Gujarat plants."
        image={images.plant}
        text="Speak with commercial, technical, or plant teams — we answer the same day whenever we can."
      />
      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-16 md:grid-cols-3">
        <Reveal className="rounded-[1.6rem] bg-cream p-7">
          <Phone className="text-copper" size={20} />
          <h2 className="font-display mt-4 text-2xl">Call</h2>
          <a className="mt-2 block text-sm" href={site.phoneHref}>
            {site.phone}
          </a>
          <a className="block text-sm text-ink/60" href={site.phoneAltHref}>
            {site.phoneAlt}
          </a>
        </Reveal>
        <Reveal delay={0.06} className="rounded-[1.6rem] bg-ink p-7 text-cream">
          <Mail className="text-copper-light" size={20} />
          <h2 className="font-display mt-4 text-2xl">Write</h2>
          {site.emails.map((e) => (
            <a key={e} className="mt-2 block text-sm text-cream/75" href={`mailto:${e}`}>
              {e}
            </a>
          ))}
        </Reveal>
        <Reveal delay={0.12} className="rounded-[1.6rem] border border-line p-7">
          <MapPin className="text-copper" size={20} />
          <h2 className="font-display mt-4 text-2xl">{site.office.title}</h2>
          {site.office.lines.map((l) => (
            <p key={l} className="text-sm leading-relaxed text-ink/65">
              {l}
            </p>
          ))}
        </Reveal>
      </section>
      <section className="mx-auto grid max-w-6xl gap-6 px-5 pb-8 md:grid-cols-2">
        {site.plants.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06} className="rounded-[1.6rem] bg-cream p-7">
            <h3 className="font-display text-2xl">{p.title}</h3>
            {p.lines.map((l) => (
              <p key={l} className="mt-1 text-sm text-ink/65">
                {l}
              </p>
            ))}
          </Reveal>
        ))}
      </section>
      <section className="mx-auto max-w-3xl px-5 pb-20">
        <Reveal className="rounded-[2rem] border border-line p-8">
          <h2 className="font-display mb-6 text-3xl">Send a message</h2>
          <InquiryForm intent="Contact form — Yogi Intermediates" />
        </Reveal>
      </section>
    </>
  )
}
