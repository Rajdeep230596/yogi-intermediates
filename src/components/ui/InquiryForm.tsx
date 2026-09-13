import { useState, type FormEvent } from "react"
import { site } from "../../data/site"

type InquiryFormProps = {
  to?: string
  intent?: string
  defaultProduct?: string
}

export function InquiryForm({
  to = site.email,
  intent = "Product enquiry",
  defaultProduct = "",
}: InquiryFormProps) {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get("name") || "")
    const mobile = String(data.get("mobile") || "")
    const email = String(data.get("email") || "")
    const company = String(data.get("company") || "")
    const product = String(data.get("product") || "")
    const message = String(data.get("message") || "")
    const body = [
      `${intent} from the Yogi Intermediates website`,
      "",
      `Name: ${name}`,
      `Mobile: ${mobile}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Product / interest: ${product}`,
      "",
      message,
    ].join("\n")
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(intent)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  if (sent) {
    return (
      <div className="rounded-3xl border border-copper/30 bg-cream p-8 text-center">
        <p className="font-display text-2xl">Your message is ready to send</p>
        <p className="mt-3 text-sm leading-relaxed text-ink/65">
          Your email client should have opened. If it did not, write to{" "}
          <a className="text-copper underline" href={`mailto:${to}`}>
            {to}
          </a>
          .
        </p>
      </div>
    )
  }

  const field =
    "w-full rounded-2xl border border-line bg-white px-4 py-3 text-sm outline-none transition focus:border-copper"

  return (
    <form onSubmit={onSubmit} className="grid gap-4 md:grid-cols-2">
      <input className={field} name="name" required placeholder="Name" />
      <input className={field} name="mobile" required placeholder="Mobile number" />
      <input className={field} name="email" type="email" required placeholder="Email" />
      <input className={field} name="company" placeholder="Company" />
      <input
        className={`${field} md:col-span-2`}
        name="product"
        defaultValue={defaultProduct}
        placeholder="Product or requirement"
      />
      <textarea
        className={`${field} min-h-32 md:col-span-2`}
        name="message"
        placeholder="Tell us about specifications, volume, or destination"
      />
      <button
        type="submit"
        className="rounded-full bg-ink px-8 py-3.5 text-sm font-medium tracking-wide text-cream transition hover:bg-copper md:col-span-2"
      >
        Send enquiry
      </button>
    </form>
  )
}
