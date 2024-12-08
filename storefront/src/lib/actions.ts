"use server"

import { render } from "@react-email/render"
import { Resend } from "resend"
import KoalaWelcomeEmail from "../../email" // Assurez-vous d'avoir le bon chemin
const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const service = formData.get("service") as string
  const message = formData.get("message") as string
  const files = formData.getAll("file") as File[]

  const attachments = await Promise.all(
    files.map(async (file) => {
      const arrayBuffer = await file.arrayBuffer()
      return {
        filename: file.name,
        content: Buffer.from(arrayBuffer),
      }
    })
  )

  try {
    const data = await resend.emails.send({
      from: "La Lune Curieuse <confirmation@atelier.lalunecurieuse.com>",
      to: ["contact@lalunecurieuse.com"],
      subject: `Nouveau message de ${name} - Service: ${service}`,
      text: `Nom: ${name}\nEmail: ${email}\nService: ${service}\nMessage: ${message}`,
      attachments: attachments,
    })

    return { success: true, message: "Email envoyé avec succès" }
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error)
    return { success: false, message: "Erreur lors de l'envoi de l'email" }
  }
}
export async function sendConfirmation(formData: FormData) {
  const userFirstname = formData.get("userFirstname") as string
  const email = formData.get("email") as string // Ajoutez l'email si nécessaire

  try {
    // Utiliser Resend pour envoyer l'email
    const { data } = await resend.emails.send({
      from: "confirmation@atelier.lalunecurieuse.com",
      to: ["commande@lalunecurieuse.com, lerolldesign@gmail.com"], // Vous pouvez aussi envoyer à d'autres destinataires si nécessaire
      subject: "Félicitation 🍻",
      html: render(KoalaWelcomeEmail({ userFirstname })),
    })

    return { success: true, message: "Email envoyé avec succès!" }
  } catch (error) {
    return { success: false, message: "Erreur lors de l'envoi de l'email" }
  }
}
