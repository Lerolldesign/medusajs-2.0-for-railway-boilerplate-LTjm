// src/pages/api/sendAdminMessage.ts
import { render } from "@react-email/render"
import type { NextApiRequest, NextApiResponse } from "next"
import { Resend } from "resend"
import KoalaWelcomeEmail from "../../../email"

const resend = new Resend(process.env.RESEND_API_KEY!)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  // Récupérer le body de la requête
  const { email, userFirstname } = req.body

  try {
    const { data } = await resend.emails.send({
      from: "confirmation@atelier.lalunecurieuse.com",
      to: ["commande@lalunecurieuse.com"],
      subject: "Félicitation 🍻",
      html: render(KoalaWelcomeEmail({ userFirstname })),
    })

    res.status(200).json({ message: "Message bien envoyé", data })
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}
