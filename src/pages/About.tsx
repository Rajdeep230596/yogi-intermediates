import { Link } from "react-router-dom"
import { PageHero } from "../components/ui/PageHero"
import { Reveal } from "../components/ui/Reveal"
import { images, values } from "../data/site"

const pillars = [
  {
    title: "Purpose-led",
    items: [
      "Fostering continuous learning and innovation",
      "Adopting developments in science and technology",
      "Becoming the preferred partner through quality and service",
      "Taking responsible care of the surrounding environment",
    ],
  },
  {
    title: "Mission",
    items: [
      "Always the market leader in technology, products, and service",
      "Best-in-class quality at competitive prices — value for money",
      "Operations that keep safety and the environment in place",
    ],
  },
  {
    title: "Vision",
    items: [
      "Investing in people, technology, and assets",
      "Upholding the principles of responsible care",
      "Continuously improving everything we do",
      "Delivering value to our customers",
    ],
  },
]

const character = [
  { title: "Responsible", text: "Safety and well-being of coworkers, communities, and the environment. We believe in a zero-injury workplace." },
  { title: "Focused", text: "We know what we are good at, and we participate where we can excel — for the long term." },
  { title: "Straightforward", text: "Open and honest. We get the facts out, make realistic promises, and keep them." },
  { title: "Collaborative", text: "A responsive partner to customers, suppliers, employees, and communities. Their success is ours." },
]

export function About() {
  return (
    <>
      <PageHero
        kicker="Company"
        title="Yogi means the one who creates bonds."
        image={images.lab}
        text="A well-known nationally and globally accepted name in bromine derivatives, established in 1995 by Pravinbhai Lakhani."
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <img src={images.glass} alt="Process chemistry" className="h-full min-h-[360px] w-full rounded-[2rem] object-cover" />
        </Reveal>
        <Reveal className="md:col-span-7" delay={0.08}>
          <p className="leading-relaxed text-ink/70">
            Yogi Intermediates comes with three decades of experience as a leading manufacturer of
            bromine and its derivatives. We started with one bromine-based product. We are now a
            pioneer and among India’s largest manufacturers of bromine derivatives, specialty
            chemicals, and API intermediates.
          </p>
          <p className="mt-4 leading-relaxed text-ink/70">
            We supply some of the best-known groups in pharmaceuticals, agrochemicals, flavour and
            fragrance, and pesticides. Our products are accepted in the domestic market and
            internationally — customers stay with Yogi for quality and delivery.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/journey" className="rounded-full bg-ink px-5 py-2.5 text-sm text-cream">
              The journey
            </Link>
            <Link to="/board" className="rounded-full border border-line px-5 py-2.5 text-sm">
              The board
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <p className="text-[11px] tracking-[0.3em] text-copper uppercase">Values</p>
            <h2 className="font-display mt-3 max-w-3xl text-4xl">
              Continuity of values, in an industry that never stands still.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05} className="rounded-3xl bg-paper p-6">
                <h3 className="font-display text-2xl">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-20 md:grid-cols-3">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06} className="rounded-[1.6rem] border border-line p-7">
            <h3 className="font-display text-3xl">{p.title}</h3>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ink/65">
              {p.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </section>

      <section className="bg-ink py-20 text-cream">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-2">
          {character.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
              <p className="text-xs tracking-[0.22em] text-copper-light uppercase">{c.title}</p>
              <p className="mt-3 text-lg leading-relaxed text-cream/75">{c.text}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
