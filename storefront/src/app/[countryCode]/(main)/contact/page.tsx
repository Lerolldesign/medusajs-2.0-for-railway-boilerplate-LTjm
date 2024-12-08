import Button from "@modules/elements/button"
import { Metadata } from "next"
import Link from "next/link"
import CircularTextButton from "../../../../modules/elements/CircularTextButton"

export const metadata: Metadata = {
  title: "Contacter l'atelier",
  description:
    "Vous avez une demande de restauration, un projet de création textile contactez-nous",
}

export default function Contact() {
  return (
    <div className="flex flex-col lg:flex-row md:w-screen h-screen 2xl:items-center lg:justify-center">
      <div className="w-full 2xl:w-2/3 relative top-[25vh] 2xl:top-[5vh] px-5 h-[40vh]">
        <h1 className="text-[2.8rem]/[3rem] md:text-[4rem]/[4rem] 2xl:text-[9rem]/[8rem] font-lune text-lune uppercase">
          Vous avez <br /> une demande ?
        </h1>
        <div className="text-[1.3rem] top-5 md:text-[1.5rem] 2xl:text-[2.8rem] relative md:left-20 2xl:top-20 2xl:tracking-[1px] text-browny/90">
          <Link
            className="text-browny font-lune font-semibold"
            href="mailto:contact@lalunecurieuse.com?subject=Message site !"
          >
            contact@lalunecurieuse.com
          </Link>
          <p className="hidden md:block text-[1rem] tracking-wide ">
            {" "}
            3 Rue de l&apos;Église, 21610 Chaume-et-Courchamp{" "}
            <span className="relative left-5 hover:!text-white">
              <Button
                href="https://api.whatsapp.com/send?phone=+33603031520"
                variant="secondary"
              >
                <span className="!text-lune hover:!text-white !font-bold">
                  Appeler l&apos;atelier
                </span>
              </Button>
            </span>
          </p>
        </div>
      </div>
      <div className="w-full  2xl:w-[20vw] relative top-20 lg:top-72 2xl:top-0">
        <p className="text-[.9rem] px-7 md:text-[1.2rem] pb-20 w-full md:w-[50vw] xl:w-[30vw]  2xl:w-[20vw]">
          Mon expertise peut répondre à vos besoins. Faites moi savoir comment
          je peux vous aider...
          <br />
          <span className="relative top-10 md:hidden text-[.85rem] tracking-wide ">
            3 Rue de l&apos;Église, 21610 Chaume-et-Courchamp <br /> +33 (0)6 03
            03 15 20
          </span>
        </p>
        <span className="absolute right-10">
          <CircularTextButton />
        </span>
      </div>
      <div className="bg-lune h-auto justify-center items-center flex"></div>
    </div>
  )
}
