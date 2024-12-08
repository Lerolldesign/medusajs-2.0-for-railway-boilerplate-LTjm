// src/pages/api/sendAdminMessage.ts
import { render } from "@react-email/render"
import type { NextApiRequest, NextApiResponse } from "next"
import { Resend } from "resend"
import KoalaWelcomeEmail from "../../../../email"

// Créez une instance de Resend avec votre clé API
const resend = new Resend(process.env.RESEND_API_KEY!)

// Vérifier et gérer les CORS si nécessaire
const cors = require("cors")

const corsMiddleware = cors({
  methods: ["POST"],
  origin: "*", // Vous pouvez ajuster cela en fonction des besoins de votre projet
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Appliquez le middleware CORS (si besoin)
  await corsMiddleware(req, res, () => {})

  // Gérer les méthodes HTTP non autorisées
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" })
  }

  // Vérifier que les données sont présentes dans la requête
  const { email, userFirstname } = req.body

  if (!email || !userFirstname) {
    return res.status(400).json({ error: "Email et prénom sont nécessaires." })
  }

  try {
    // Envoi de l'email avec Resend
    const { data } = await resend.emails.send({
      from: "confirmation@atelier.lalunecurieuse.com",
      to: ["commande@lalunecurieuse.com"],
      subject: "Félicitations 🍻",
      html: render(KoalaWelcomeEmail({ userFirstname })),
    })

    // Retourner une réponse de succès avec les données de l'email
    return res.status(200).json({ message: "Message bien envoyé", data })
  } catch (error: any) {
    // Gestion des erreurs d'envoi d'email
    console.error("Erreur lors de l'envoi de l'email:", error)
    return res
      .status(500)
      .json({ error: "Une erreur est survenue lors de l'envoi de l'email" })
  }
}
