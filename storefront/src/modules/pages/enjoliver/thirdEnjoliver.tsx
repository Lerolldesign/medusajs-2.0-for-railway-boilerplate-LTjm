import Image from "next/image"

export default function ThirdEnjoliver() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center text-center h-[220vh] md:min-h-screen bg-creamy mx-auto noise">
        <Image
          src="https://res.cloudinary.com/dvdup4fx9/image/upload/v1716886558/La%20Lune%20Curieuse/Sections/ext_salon_kacay3.avif"
          width={1920}
          height={1080}
          alt="image"
          className="w-[90vw] h-[60vh]  md:h-[80vh]  object-cover rounded-[3vw] "
        />

        <div className=" flex flex-col relative bottom-3 md:bottom-5">
          <h3
            className="text-lune font-lune text-[2.5rem]/[5vh] mb:text-[3.5rem] xl:text-7xl 2xl:text-9xl relative  flex flex-col top-0 md:top-10 lg:top-0
       left-0 lg:left-20 xl:left-[-2vw] 2xl:left-[-2vw]"
          >
            Aussi Bien
            <span className="text-3xl md:text-3xl xl:text-5xl 2xl:text-7xl ml-[4vw]">
              à l&apos;extérieur
            </span>
          </h3>
          <p
            className="text-gray-600 md:px-5 text-center mx-0 lg:mx-20 px-1 xl:mx-10 2xl:mx-24 pt-10 pb-3 lg:py-10 md:pt-20  md:pb-10  relative 
       leading-6 2xl:leading-7 
       text-[.85rem] xl:leading-6  xl:text-[.95rem] 2xl:text-[.98rem] w-[80vw] lg:w-[40vw]"
          >
            Naturellement, les extérieurs sont un prolongement de notre lieu de
            vie : terrasse, jardin, bord de piscine ou encore bâteau, il est
            possible de profiter de la belle saison dans une ambiance sur mesure
            grâce à un large choix de tissus outdoor ainsi que des mousses
            spécialement conçues pour ne pas retenir l&apos;eau et sécher plus
            rapidement.
          </p>
        </div>
        <h4 className="relative top-0 md:top-3 text-2xl md:text-2xl xl:text-3xl 2xl:text-6xl text-center text-gray-600 py-10 md:py-20 font-lune mx-10 md:mx-20">
          coussins, banquette, chaises longues, pouf, voile d&apos;ombrage ou parasol
        </h4>
      </div>
    </div>
  )
}
