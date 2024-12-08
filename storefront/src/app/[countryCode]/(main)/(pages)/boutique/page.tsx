import Description from "@modules/pages/boutique/description"
import { HoverImageLinks } from "@modules/pages/boutique/hoverImageLinks"
import IntroBoutique from "@modules/pages/boutique/intro"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Boutique en ligne & créations uniques",
  description:
    "Produits confectionnés à la main avec un savoir-faire artisanal dans mon atelier en Bourgogne. Restauration ou création sur mesure de projets de décoration.",
}

export default function Boutique() {
  return (
    <div>
      <IntroBoutique />
      <Description />
      <div className="px-10">
        <HoverImageLinks />
      </div>
    </div>
  )
}
