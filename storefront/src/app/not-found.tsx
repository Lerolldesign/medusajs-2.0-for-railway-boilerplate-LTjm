//import { ArrowUpRightMini } from "@medusajs/icons"
import Button from "@modules/elements/button"
import Ornements from "@modules/layout/templates/ornements"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "404",
  description: "êtes-vous perdu ?",
}

export default function NotFound() {
  return (
    <>
      <Ornements />
      <div className="flex flex-col gap-2 items-center justify-center min-h-[calc(100vh-30px)]">
        <h1 className="text-[7rem] medium:text-[9rem] xlarge:text-[11rem] 2xlarge:text-[15rem] font-lune text-lune">
          404
        </h1>
        <p className="text-[.9rem] lg:text-[1.1rem] pb-10">
          Cette page n&apos;exite plus ou á été déplaçée
        </p>
        <span className="px-10">
          <Button href="/" variant="primary">
            Revenir á l&apos;accueil +
          </Button>
        </span>
      </div>
    </>
  )
}
