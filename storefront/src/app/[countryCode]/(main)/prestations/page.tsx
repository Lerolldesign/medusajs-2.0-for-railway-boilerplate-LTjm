import Button from "@modules/elements/button"
import Image from "next/image"
import Link from "next/link"

export default function page() {
  return (
    <>
      <div className="flex flex-col gap-0 space-y-[-20vh] md:space-y-[-18vh] lg:space-y-0 md:justify-between h-[302vh] md:h-[295vh] lg:h-screen lg:flex-row bg-browny noise">
        <Link href="/prestations/illuminer-votre-interieur" className="">
          <div className="">
            <Image
              src="https://res.cloudinary.com/dvdup4fx9/image/upload/v1726666936/La%20Lune%20Curieuse/Sections/abat-jours-trio_nirmpw.webp"
              width={1920}
              height={1080}
              alt="image"
              className="object-cover w-full h-[100vh] lg:h-screen   mix-blend-multiply"
            />
          </div>
          <div className="flex flex-col relative bottom-[50vh] w-[80vw] left-10 md:left-14 xl:left-3  lg:bottom-[20vh] xl:bottom-[45vh] 2xl:bottom-[35vh] xl:w-[32vw]  items-center justify-center">
            <h2 className=" text-creamy  font-lune py-3 text-3xl/[1.9rem] xl:text-2xl 2xl:text-3xl text-center">
              créer vos <br /> abat-jours
            </h2>

            <p className="text-white text-center w-full lg:w-[15vw] text-xs pb-5">
              Restauration et création d’abat-jours sur-mesure, cousu ou
              contrecollé
            </p>

            <Button href="/services/enjoliver-vos-espaces" variant="primary">
              Découvrir +
            </Button>
          </div>
        </Link>

        <Link href="/prestations/enjoliver-vos-espaces" className="">
          <div className="">
            <Image
              src="https://res.cloudinary.com/dvdup4fx9/image/upload/v1726667938/La%20Lune%20Curieuse/Sections/patshwork_doqeu2.webp"
              width={1920}
              height={1080}
              alt="image"
              className="object-cover w-full h-[100vh] lg:h-screen  mix-blend-multiply "
            />
          </div>
          <div className="flex flex-col relative bottom-[50vh] w-[80vw] left-10 md:left-14 xl:left-3  lg:bottom-[20vh] xl:bottom-[45vh] 2xl:bottom-[38vh] xl:w-[32vw]  items-center justify-center">
            <h2 className=" text-creamy py-5 font-lune text-3xl/[2rem] xl:text-2xl 2xl:text-3xl/[2.5rem] text-center">
              Confectionner
              <br /> vos décors textiles
            </h2>
            <p className="text-white text-center w-full lg:w-[15vw] text-xs pb-5">
              Réalisation sur-mesure de rideaux, voilage, coussins,…
            </p>
            <Button href="/services/enjoliver-vos-espaces" variant="primary">
              Découvrir +
            </Button>
          </div>
        </Link>

        <Link href="/prestations/restaurer-vos-sieges" className="">
          <div className="">
            <Image
              src="https://res.cloudinary.com/dvdup4fx9/image/upload/v1726668903/La%20Lune%20Curieuse/Sections/IMG_20220722_100336593_2_ss8tlf.jpg"
              width={1920}
              height={1080}
              alt="image"
              className="object-cover w-full h-[100vh] lg:h-screen  mix-blend-multiply "
            />
          </div>
          <div className="flex flex-col relative bottom-[50vh] w-[80vw] left-10 md:left-14 xl:left-3  lg:bottom-[20vh] xl:bottom-[30vh] xl:w-[32vw]  2xl:bottom-[32vh] items-center justify-center">
            <h2 className=" text-creamy font-lune py-5 text-3xl xl:text-2xl 2xl:text-3xl text-center">
              Restaurer vos siéges
            </h2>
            <p className="text-white text-center w-full lg:w-[15vw] text-xs pb-5">
              Restauration complète ou partielle de vos fauteuils, chaises,
              tabourets, banquettes,…
            </p>

            <Button href="/services/enjoliver-vos-espaces" variant="primary">
              Découvrir +
            </Button>
          </div>
        </Link>
      </div>
    </>
  )
}
