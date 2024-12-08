import StepRestaurer from "@modules/pages/restaurer/stepRestaurer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Comment se déroule un chantier ?",
  description:
    "Réfection complète ou partielle suivant une technique semi-traditionnelle. Fauteuil, tabouret, chaise, banquette, pouf, abat-jour.",
}

export default function RendezVous() {
  return (
    <div className="pb-20 md:pb-32">
      <StepRestaurer />
    </div>
  )
}
