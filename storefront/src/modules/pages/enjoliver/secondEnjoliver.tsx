import Image from "next/image"

export default function SecondEnjoliver() {
  return (
    <div>
      <div className=" bg-creamy noise  ">
        <div className="relative top-5 md:top-20 xl:md:top-52 flex w-full px-[10vw] md:px-[15vw] xl:px-[8vw] 2xl:px-[10vw]">
          <p className="text-creamy !font-extralight tracking-wider lg:px-72 font-lune text-[1.85rem] leading-[2.3rem] 2xl:text-6xl 2xl:leading-[4rem] text-center"></p>
        </div>
      </div>
      <div className="mx-auto noise">
        <div className="flex flex-col lg:flex-row py-0 md:py-5 lg:py-10 items-center justify-center">
          <div className="relative bottom-[20vh] md:bottom-[10vh]  w-full xl:w-[45vw] 2xl:w-[45vw] rounded-r-3xl">
            <Image
              src="https://res.cloudinary.com/dvdup4fx9/image/upload/v1716886239/La%20Lune%20Curieuse/Sections/salon-2_lbtnwk.avif"
              width={1920}
              height={1080}
              alt="image"
              className="object-cover p-5 md:p-5  h-[60vh] md:h-[65vh] 2xl:h-[100vh] rounded-[9vw] md:rounded-[6vw] md:rounded-l-3xl"
            />

            <h4 className="relative top-0 md:top-10 text-2xl md:text-2xl xl:text-3xl 2xl:text-6xl text-center text-gray-600 py-10 md:py-20 font-lune mx-10 md:mx-20">
              Plaid, coussin, pouf, tête de lit, ciel de lit, baldaquin, chemin
              de lit, décors de table
            </h4>
          </div>
          <div className="relative bottom-[10vh]  lg:bottom-[10vh] w-full xl:w-[50vw] 2xl:w-[50vw]  ">
            <h3
              className="text-lune font-lune text-[2.5rem]/[5vh]  mb:text-[3.5rem] xl:text-7xl 2xl:text-9xl relative  flex flex-col top-0 md:top-10 lg:top-0
         left-5 md:left-20 xl:left-[-2vw] 2xl:left-[-2vw]"
            >
              Embellir
              <br />
              <span className="text-3xl md:text-3xl xl:text-5xl 2xl:text-7xl ml-[4vw]">
                son intérieur
              </span>
            </h3>
            <p
              className="text-gray-600 md:px-5 mx-10 md:mx-20 xl:mx-10 2xl:mx-24 py-10 md:py-20  relative
         leading-6 2xl:leading-7 
         text-[.85rem] xl:leading-6  xl:text-[.95rem] 2xl:text-[.98rem]"
            >
              Plaid, coussin, pouf, tête de lit, baldaquin, nappe,
              abat-jour…Tant d’éléments qui embellissent toutes les pièces de la
              maison, du hall d’entrée à la cuisine en passant par le salon, la
              chambre ou le bureau en les transformant en espaces fonctionnels 
              et chaleureux. Chaque recoin de votre intérieur pourra être ainsi
              sublimé sans oublier de rester utile et confortable.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
