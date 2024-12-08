"use client"

import { useRef, useState } from "react"
import { sendEmail } from "../../lib/actions"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")
  const [acceptConditions, setAcceptConditions] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!acceptConditions) {
      setMessage(
        "Veuillez accepter les conditions avant d'envoyer le formulaire."
      )
      return
    }
    setIsSubmitting(true)
    setMessage("")

    const formData = new FormData(event.currentTarget)
    const result = await sendEmail(formData)

    setIsSubmitting(false)

    if (result.success) {
      setMessage(result.message)
      formRef.current?.reset()
      setAcceptConditions(false)
    } else {
      setMessage(result.message)
    }
  }

  return (
    <div className="small:!overflow-hidden overflow-scroll relative bottom-15">
      <h2 className="text-[1.7rem] small:text-5xl font-bold mb-10 small:mb-6 text-center font-lune text-lune">
        Contacter Céline
      </h2>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col small:flex-row justify-between gap-2 small:gap-5">
          <div className="w-full small:w-1/2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nom
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Votre nom"
            />
          </div>
          <div className="w-full small:w-1/2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Votre email"
            />
          </div>
        </div>
        <div>
          <span className="block text-sm font-medium text-gray-700 mb-1">
            Prestations
          </span>
          <div className="flex space-x-4">
            {["tapisserie", "tissus", "restauration"].map((service) => (
              <label key={service} className="inline-flex items-center">
                <input
                  type="radio"
                  name="service"
                  value={service}
                  className="form-radio h-4 w-4 text-lune"
                  defaultChecked={service === "tapisserie"}
                />
                <span className="ml-2 text-sm text-gray-700 capitalize">
                  {service}
                </span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="w-full px-3 py-2 border bg-creamy noise border-lune rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-lune focus:border-creamy"
            placeholder="Votre message"
          ></textarea>
        </div>
        <div>
          <label
            htmlFor="file"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Pièces jointes (max 4 MB au total)
          </label>
          <input
            id="file"
            name="file"
            type="file"
            multiple
            accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-lune file:text-creamy hover:file:bg-browny"
            onChange={(e) => {
              const files = e.target.files
              if (files) {
                const totalSize = Array.from(files).reduce(
                  (acc, file) => acc + file.size,
                  0
                )
                if (totalSize > 40 * 1024 * 1024) {
                  alert(
                    "La taille totale des fichiers ne doit pas dépasser 10 MB"
                  )
                  e.target.value = ""
                }
              }
            }}
          />
        </div>
        <div className="flex items-center">
          <input
            id="accept-conditions"
            name="accept-conditions"
            type="checkbox"
            className="h-4 w-4 text-lune focus:ring-lune border-gray-300 rounded"
            checked={acceptConditions}
            onChange={(e) => setAcceptConditions(e.target.checked)}
            required
          />
          <label
            htmlFor="accept-conditions"
            className="ml-2 block !text-[.85rem] text-gray-900 mt-4"
          >
            J&apos;accepte les conditions d&apos;utilisation
          </label>
        </div>
        <button
          type="submit"
          disabled={isSubmitting || !acceptConditions}
          className="w-full py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-lune hover:bg-browny focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-creamy disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
        </button>
      </form>
      {message && (
        <div
          className={`mt-4 p-2 rounded ${
            message.includes("succès")
              ? "bg-green-100 text-lune"
              : "bg-red-100 text-red-800"
          }`}
        >
          {message}
        </div>
      )}
    </div>
  )
}
