//import Button from "@modules/elements/button"
import Button from "@modules/elements/button"
import Image from "next/image"
import Link from "next/link"

export default function HomeSectionIlluminer() {
  return (
    <div className="bg-[#111111] noise h-[85vh] md:h-[110vh]  pt-[0vh] md:pt-[1vh] xl:pt-[10vh] 2xl:pt-[30vh] mx-auto">
      <div className="relative top-[0] md:top-32">
        <div className=" flex xl:flex-row flex-col items-center justify-center ">
          <div className="full xl:w-1/3 z-20 relative pt-[6vh] md:mt-[-6vh] xl:mt-4">
            <h3
              className="text-creamy font-lune text-[2.7rem]/[6vh] mb:text-[3.9rem]/[3vh] xl:text-7xl 2xl:text-[6vw] 2xlarge:text-9xl relative top-8 
            md:top-[-1vh] left-[-13vw] md:left-[5vw] xl:left-[22vw] xl:top-[-10vh] 2xlarge:left-[20vw] flex flex-col py-20 
            w-[50vw] large:w-[40vw]  2xlarge:w-[50vw] 
            md:w-ful"
            >
              Créer & restaurer
              <span className="text-2xl mt-[-.5vh] md:text-3xl xl:text-5xl 2xl:text-7xl xlarge:text-6xl ml-[3.3vw] md:ml-[10vw] xl:ml-[3.3vw] xlarge:ml-[2vw]">
                vos abat-jours
                <span className="flex  w-[52vw]  relative top-[25vh] md:top-[28vh] xl:top-24 2xlarge:top-32 left-10 md:right-[20vw] lg:right-10 xl:left-[-10vw] 2xlarge:right-12  items-center font-inter justify-center">
                  <Button
                    href="/prestations/illuminer-votre-interieur"
                    variant="secondary"
                  >
                    Découvrir +
                  </Button>
                </span>
              </span>
            </h3>
          </div>

          <div className="relative z-10 bottom-[18vh] xl:bottom-0 md:w-2/3 md:mx-32">
            <Link href="/prestations/illuminer-votre-interieur">
              <Image
                src="https://res.cloudinary.com/dvdup4fx9/image/upload/v1716880738/La%20Lune%20Curieuse/Sections/section_homepage_illuminer_bis_rh8u9a.avif"
                width={1920}
                height={1080}
                alt="image"
                className="object-cover rounded-[2vw]  noise  scale-95 opacity-65 hover:scale-100 noise mix-blend-multiply transition ease-in-out delay-150 hover:-translate-y-5 duration-500"
              />
              {/** "https://lunecloud.fra1.digitaloceanspaces.com/illuminer_vos_interieurs.avif"*/}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
