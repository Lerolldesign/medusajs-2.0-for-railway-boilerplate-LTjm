//import Button from "@modules/elements/button"
import Button from "@modules/elements/button"
import Image from "next/image"
import Link from "next/link"
export default function HomeSectionEnjoliver() {
  return (
    <div className="bg-[#111111] noise h-[70vh] md:h-[30vh] 2xl:h-[100vh] pt-[5vh] md:pt-[1vh] xl:pt-[95vh]  2xl:pt-[70vh] mx-auto">
      <div className="relative ">
        <div className=" flex xl:flex-row flex-col items-center justify-center ">
          <div className="full xl:w-1/3 z-20 relative pt-[5vh] md:mt-[-6vh] xl:mt-4">
            <h3 className="text-creamy mix-blend-multiply font-lune text-[2.7rem]/[3.9vh] mb:text-[3.9rem]/[3.9vh] xl:text-7xl 2xl:text-[6vw] 2xlarge:text-9xl relative top-7 md:top-[-2vh]  left-[1.2vw] md:left-[10vw] flex flex-col py-20 2xlarge:left-[17vw]">
              Réaliser
              <span className="text-2xl mt-1 md:text-3xl xl:text-5xl 2xl:text-7xl ml-[10vw] md: md:ml-[7.3vw] xlarge:text-6xl ">
                vos décors textiles
                <span className="flex relative  w-[52vw]  top-[26vh] md:top-[28vh] xl:top-20 2xlarge:top-24 left-4 md:right-20 lg:right-10  2xlarge:left-[-10vw] items-center font-inter justify-center">
                  <Button
                    href="/prestations/enjoliver-vos-espaces"
                    variant="secondary"
                  >
                    Découvrir +
                  </Button>
                </span>
              </span>
            </h3>
          </div>
          <div className="relative z-10 bottom-[18vh] xl:bottom-0 md:w-2/3 md:mx-32">
            <Link href="/prestations/enjoliver-vos-espaces">
              <Image
                src="https://res.cloudinary.com/dvdup4fx9/image/upload/v1716877180/La%20Lune%20Curieuse/Sections/section_homepage_amenager_dxtvgg.avif"
                width={1920}
                height={1080}
                alt="image"
                className="object-cover rounded-[2vw]  scale-95 opacity-65 hover:scale-100 noise mix-blend-multiply transition ease-in-out delay-150 hover:-translate-y-5 duration-500"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
