import { motion } from "framer-motion"
import { MolecularField } from "./MolecularField"

type PageHeroProps = {
  kicker: string
  title: string
  italic?: string
  text?: string
  image?: string
}

export function PageHero({ kicker, title, italic, text, image }: PageHeroProps) {
  return (
    <section
      className={`relative isolate overflow-hidden pt-32 pb-20 text-cream md:pt-40 md:pb-24 ${
        image ? "bg-ink" : "bg-transparent"
      }`}
    >
      {image ? (
        <>
          <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink/88 to-ink-soft" />
          <MolecularField />
          <div className="grain absolute inset-0" />
        </>
      ) : null}
      <div className="relative mx-auto max-w-6xl px-5">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[11px] tracking-[0.32em] text-copper-light uppercase"
        >
          {kicker}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08 }}
          className="font-display mt-4 max-w-4xl text-4xl leading-[1.05] font-medium md:text-6xl"
        >
          {title}
          {italic ? (
            <>
              {" "}
              <em className="text-copper-light">{italic}</em>
            </>
          ) : null}
        </motion.h1>
        {text ? (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-cream/72 md:text-lg"
          >
            {text}
          </motion.p>
        ) : null}
      </div>
    </section>
  )
}
