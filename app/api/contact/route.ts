import { NextResponse } from "next/server"
import { Resend } from "resend"
import sgMail from "@sendgrid/mail"

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()
    if (!name || !email || !message) return NextResponse.json({ error: "Missing fields" }, { status: 400 })

    const TO = process.env.CONTACT_TO || "hanad.muqaddar@brainscraft.io"
    const FROM = process.env.CONTACT_FROM || "noreply@portfolio.local"

    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY)
      await resend.emails.send({ from: FROM, to: [TO], reply_to: email, subject: `Portfolio Contact: ${name}`, text: message })
    } else if (process.env.SENDGRID_API_KEY) {
      sgMail.setApiKey(process.env.SENDGRID_API_KEY)
      await sgMail.send({ to: TO, from: FROM, replyTo: email, subject: `Portfolio Contact: ${name}`, text: message })
    } else return NextResponse.json({ error: "No email provider configured" }, { status: 500 })

    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
