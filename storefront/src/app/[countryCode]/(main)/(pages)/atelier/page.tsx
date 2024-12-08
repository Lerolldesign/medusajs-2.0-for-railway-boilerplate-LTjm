import AtelierDecoration from "@modules/pages/atelier/atelierDecoration"
import AtelierImage from "@modules/pages/atelier/atelierImage"
import AtelierInspiration from "@modules/pages/atelier/atelierInspiration"
import IntroAtelier from "@modules/pages/atelier/introAtelier"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tapissier d’ameublement Céline Rondot",
  description:
    "Un atelier est un lieu où le savoir-faire artisanal et l’inspiration se rencontrent pour créer des pièces sur mesure originales et de qualité.",
}
export default function Atelier() {
  return (
    <>
      <IntroAtelier />
      <AtelierImage />
      <AtelierInspiration />
      <AtelierDecoration />
    </>
  )
}
