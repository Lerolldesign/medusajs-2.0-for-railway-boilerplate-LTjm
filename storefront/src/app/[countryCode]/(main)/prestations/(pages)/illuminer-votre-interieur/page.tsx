import ImageList from "@modules/pages/illuminer/components/ImageList"
import HeroIlluminer from "@modules/pages/illuminer/heroIlluminer"
import IntroIlluminer from "@modules/pages/illuminer/introIlluminer"
import Restauration from "@modules/pages/restauration"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Restaurer vos sièges - S’installer confortablement",
  description:
    "Réfection complète ou partielle suivant une technique semi-traditionnelle. Fauteuil, tabouret, chaise, banquette, pouf.",
}

export default function Illuminervotreinterieur() {
  return (
    <div>
      <HeroIlluminer />
      <IntroIlluminer />
      <ImageList />
      <Restauration />
    </div>
  )
}
