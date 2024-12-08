import Image from "next/image"

export default function IntroEnjoliver() {
  return (
    <div className="bg-[#111111] noise">
      <div className="py-20 xl:py-[2vh] 2xl:py-[10vh] h-[90vh] 2xl:h-[110vh] justify-between">
        <div className="relative top-5 md:top-20 xl:md:top-52 flex w-full px-[6vw] md:px-[15vw] xl:px-[8vw] 2xl:px-[4vw]">
          <p className="text-creamy font-medium font-lune tracking-wider lg:px-72 text-[1.85rem] leading-[2.3rem] 2xl:text-6xl 2xl:leading-[4rem] text-center">
            Quels que soient vos besoins et désirs, l’atelier de la lune
            curieuse mettra tout en œuvre pour vous accompagner dans vos projets
            et concevra avec vous tous types de décors textiles.
          </p>
        </div>
      </div>

      <div className=" bg-creamy mx-auto noise">
        <div className="flex flex-col lg:flex-row py-32 md:py-20 lg:py-10 items-center justify-center">
          <div className="relative bottom-[10vh] md:bottom-[5vh]  lg:bottom-[10vh] w-full xl:w-[45vw] 2xl:w-[45vw] ">
            <h3
              className="text-lune z-30 font-lune text-[2.5rem]/[5vh]  mb:text-[3.5rem] xl:text-6xl 2xl:text-9xl relative  flex flex-col top-5 md:top-10 lg:top-0
left-5 md:left-20 xl:left-[45vw] 2xl:left-[16vw] "
            >
              Habiller
              <span className="text-3xl md:text-3xl xl:text-4xl 2xl:text-7xl ml-[4vw] px-3 ">
                vos fenêtres
              </span>
            </h3>
            <div
              className="text-gray-600 md:px-5 2xl:left-10 mx-10 md:mx-20 xl:mx-24 2xl:mx-28 pt-10 pb-20 md:py-20  relative
leading-6 2xl:leading-7 
text-[.85rem] xl:leading-6  xl:text-[.85rem] 2xl:text-[.98rem]"
            >
              <p>
                Voici l&apos;un des éléments les plus distinctifs d&apos;un bel intérieur
                : les rideaux. Éléments de décoration à part entière et de
                diverses utilités, il est important de bien les choisir. Store
                ou voilage, rideaux lourds ou légers, en lin, en coton ou en
                soie, unis ou à motif, transparent ou coloré. Les décors de
                fenêtres offrent de multiples possibilités pour sublimer nos
                intérieurs. Les finitions sont variées, elles peuvent être
                accompagnées de passementeries ou d&apos;apiècements de tissus afin
                de donner une note originale et unique à votre pièce. Les
                tringles jouent également un rôle esthétique et technique et
                doivent être choisies avec autant d&apos;attention que les étoffes et
                la finition .
              </p>
            </div>
          </div>
          <div className="relative bottom-[10vh] md:bottom-[5vh] lg:bottom-[10vh] w-full xl:w-[50vw] 2xl:w-[50vw] rounded-[5vw] md:rounded-r-3xl 2xl:left-10">
            <Image
              src="https://res.cloudinary.com/dvdup4fx9/image/upload/v1716885705/La%20Lune%20Curieuse/Sections/rideaux_vnvgdr.avif"
              width={1920}
              height={1080}
              alt="image"
              className="object-cover p-5 md:p-5  h-[60vh] md:h-[65vh] 2xl:h-[100vh] rounded-[9vw] md:rounded-[6vw] md:rounded-r-3xl "
            />

            <h4 className="relative top-0 md:top-10 text-2xl md:text-2xl xl:text-3xl 2xl:text-6xl text-center text-gray-600 py-10 md:py-20 font-lune mx-10 md:mx-20">
              Rideaux, voilages, stores, parois japonaises, embrasses,
              tringlerie
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}
