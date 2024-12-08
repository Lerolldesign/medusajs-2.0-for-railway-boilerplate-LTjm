//import Button from "@modules/elements/button"

import Button from "../../../elements/button"

export default function HomeSectionIntroText() {
  return (
    <div className="bg-[#111111] noise  pt-[10vh] md:pt-[20vh] xl:pt-[60vh] 2xl:pt-[50vh] pb-[10vh] ">
      <div className="py-20 xl:py-[2vh] 2xl:py-[10vh] h-[90vh] 2xl:h-[110vh] justify-between items-center">
        <div className="relative top-5 md:top-20 xl:md:top-52 flex flex-col w-full px-[6vw] md:px-[15vw] xl:px-[8vw] 2xl:px-[4vw] justify-between items-center">
          <p className="text-creamy font-medium font-lune tracking-wider lg:px-72 text-[1.85rem] leading-[2.3rem] 2xl:text-6xl 2xl:leading-[4rem] text-center">
            La lune curieuse vous accompagnera dans vos projets de créations de
            décors textiles pour votre résidence, chambres d&apos;hôtes, hôtels,
            restaurants ou boutiques.
            <br />
          </p>
          <div className="max-w-lg mx-auto flex flex-col justify-center items-center gap-4 sm:flex-row md:mt-8 lg:mt-10 py-10">
            <Button href="atelier" variant="secondary">
              Découvrir l&apos;atelier
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
