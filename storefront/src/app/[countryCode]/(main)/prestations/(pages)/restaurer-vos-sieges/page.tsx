import ImageListSiege from "@modules/pages/illuminer/components/ImageListSiege"
import Restauration from "@modules/pages/restauration"
import HeroRestaurer from "@modules/pages/restaurer/heroRestaurer"
import IntroRestaurer from "@modules/pages/restaurer/introRestaurer"

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Restaurer vos sièges - S’installer confortablement",
  description:
    "Réfection complète ou partielle suivant une technique semi-traditionnelle. Fauteuil, tabouret, chaise, banquette, pouf.",
}

export default function RestaurerPage() {
  return (
    <>
      <HeroRestaurer />
      <IntroRestaurer />
      <ImageListSiege />
      {/**  <StepRestaurer /> */}
      <Restauration />
    </>
  )
}
