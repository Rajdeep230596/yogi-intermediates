import { AnimatePresence, motion } from "framer-motion"
import { Link } from "react-router-dom"
import type { Product } from "../../data/products"

type ProductTableProps = {
  products: Product[]
  caption?: string
}

export function ProductTable({ products, caption }: ProductTableProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-white">
      {caption ? (
        <div className="border-b border-line px-5 py-4 text-sm font-medium tracking-wide text-ink/70">
          {caption} · {products.length} listings
        </div>
      ) : null}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-cream/80 text-[11px] tracking-[0.18em] text-ink/50 uppercase">
            <tr>
              <th className="px-5 py-3 font-medium">Product</th>
              <th className="px-5 py-3 font-medium">CAS</th>
              <th className="px-5 py-3 font-medium">Also known as</th>
              <th className="px-5 py-3 font-medium" />
            </tr>
          </thead>
          <tbody>
            <AnimatePresence initial={false}>
              {products.map((p, i) => (
                <motion.tr
                  key={`${p.name}-${p.cas ?? i}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.28, delay: Math.min(i, 12) * 0.02 }}
                  className="border-t border-line/70 transition hover:bg-cream/60"
                >
                  <td className="px-5 py-3.5 font-medium">{p.name}</td>
                  <td className="px-5 py-3.5 font-mono text-xs text-ink/60">{p.cas ?? "—"}</td>
                  <td className="px-5 py-3.5 text-ink/55">{p.other ?? "—"}</td>
                  <td className="px-5 py-3.5 text-right">
                    <Link
                      to={`/enquiry?product=${encodeURIComponent(p.name)}`}
                      className="text-xs tracking-wide text-copper uppercase transition hover:text-ink"
                    >
                      Enquire
                    </Link>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>
    </div>
  )
}
