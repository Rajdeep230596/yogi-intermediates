import { InquiryForm } from "../components/ui/InquiryForm"
import { PageHero } from "../components/ui/PageHero"
import { Reveal } from "../components/ui/Reveal"
import { images, site } from "../data/site"

export function Career() {
  return (
    <>
      <PageHero
        kicker="Career"
        title="We put our people first."
        image={images.factory}
        text="A promising career, a serious learning environment, and the chance to make an impact in bromine chemistry."
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-3xl">Join the Yogi journey</h2>
          <p className="mt-4 leading-relaxed text-ink/70">
            Employees are an integral part of the growth story — our most important assets. We keep
            a safe workplace and the highest ethical standards with customers and stakeholders. The
            culture asks for integrity, concern for people, and commitment at work.
          </p>
          <p className="mt-6 text-sm">
            Write to{" "}
            <a className="text-copper" href={`mailto:${site.hrEmail}`}>
              {site.hrEmail}
            </a>
            <br />
            or call{" "}
            <a className="text-copper" href={site.hrPhoneHref}>
              {site.hrPhone}
            </a>
          </p>
        </Reveal>
        <Reveal delay={0.08} className="rounded-[2rem] bg-cream p-8">
          <h3 className="font-display text-2xl">Send your interest</h3>
          <p className="mt-2 mb-6 text-sm text-ink/60">Share your name, role interest, and a short note. Your mail client will open to HR.</p>
          <InquiryForm to={site.hrEmail} intent="Career application — Yogi Intermediates" />
        </Reveal>
      </section>
    </>
  )
}
