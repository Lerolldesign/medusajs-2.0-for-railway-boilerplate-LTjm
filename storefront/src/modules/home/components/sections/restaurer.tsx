//import Button from "@modules/elements/button"
import Button from "@modules/elements/button"
import Image from "next/image"
import Link from "next/link"

export default function HomeSectionRestaurer() {
  return (
    <div className="bg-[#111111] noise h-[40vh] 2xl:h-[100vh] md:mx-auto  pt-[27vh] md:pt-[1vh] xl:pt-[25vh] 2xl:pt-[60vh]">
      <div className="relative ">
        <div className="flex xl:flex-row flex-col items-center justify-center">
          <div className="relative z-10 bottom-[18vh] xl:bottom-0 md:w-2/3 md:mx-32">
            <Link href="/prestations/restaurer-vos-sieges">
              <Image
                src="https://res.cloudinary.com/dvdup4fx9/image/upload/v1716877176/La%20Lune%20Curieuse/Sections/section_homepage_restaurer_hl6ax3.avif"
                width={1920}
                height={1080}
                alt="image"
                className="object-cover rounded-[2vw] scale-95 opacity-65 hover:scale-100 noise mix-blend-multiply transition ease-in-out delay-150 hover:-translate-y-5 duration-500"
              />
            </Link>
          </div>
          <div className="full xl:w-1/3 z-20 relative pt-[6vh] md:mt-[-6vh] xl:mt-4">
            <h3 className="text-creamy font-lune text-[2.7rem]/[3.9vh] mb:text-[3.9rem]/[3.9vh] xl:text-7xl 2xl:text-[6vw] 2xlarge:text-9xl relative left-[10vw] md:left-[-15vw] bottom-[60vh] md:bottom-[55vh] flex flex-col  medium:!bottom-[10vh] 2xlarge:bottom-[10vh] lg:bottom-0">
              Restaurer
              <span className="text-2xl mt-1 md:text-3xl xl:text-5xl xlarge:text-6xl 2xl:text-7xl ml-[7.3vw]">
                vos siéges
              </span>
              <span className="flex relative  top-[25vh] md:top-[28vh] xl:top-20 2xlarge:top-24 right-10 md:right-5 lg:right-10  2xlarge:right-32  items-center font-inter justify-center">
                <Button
                  href="/prestations/restaurer-vos-sieges"
                  variant="secondary"
                >
                  Découvrir +
                </Button>
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}
