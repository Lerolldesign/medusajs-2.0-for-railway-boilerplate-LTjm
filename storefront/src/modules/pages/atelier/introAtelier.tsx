import Image from "next/image"

export default function IntroAtelier() {
  return (
    <div className="flex relative h-[140vh] md:h-[140vh] xl:h-[120vh] overflow-hidden bg-amber-50 noise">
      <Image
        src="https://res.cloudinary.com/dvdup4fx9/image/upload/v1716983211/La%20Lune%20Curieuse/Sections/celine001_weay7n.avif"
        width={1920}
        height={1080}
        alt="Céline Rondot"
        className="top-[40vh] h-[75vh] md:h-[80vh] lg:h-[100vh] xl:h-[92vh] 2xl:h-[80vh] 2xlarge:h-[95vh] w-[120vw] md:w-[78vw] xl:top-[10vh] xl:w-[38vw] 2xl:w-[34vw] lg:mx-32 lg:my-20 noise  mix-blend-multiply rounded-[3vw]"
      />

      <div className="flex flex-col absolute pt-20 top-48 w-full mt-[32vh] md:mt-[60vh] lg:mt-0 ">
        <div className="w-full">
          <h2 className="lg:mx-28 2xl:left-[11vw] relative text-6xl md:text-8xl lg:text-[18rem] xl:text-[14rem] 2xl:text-[19rem] font-lune uppercase text-lune justify-center items-center text-center">
            Atelier
          </h2>
        </div>
        <div className="w-full lg:px-32 xl:top-[45vh] absolute top-52 md:left-20 lg:left-0">
          <p
            className="h-full w-[80vw] md:w-1/2 lg:w-1/3 relative lg:ml-[50vw] lg:mr-[20vw] mx-10 leading-6 2xl:leading-7 
            text-[.85rem] xl:leading-6  xl:text-[.95rem] 2xl:text-[.98rem]"
          >
            Comme le paysage qui évolue au fil des saisons, mes inspirations
            artistiques et mes envies créatives m’ont portée vers des
            réalisations artisanales. Je me tourne vers la création de
            luminaires en travaillant le bois de lierre. Pour pouvoir les
            habiller je me forme à la fabrication d’abat-jours. Je découvre
            alors le contact d’un nouveau médium, le tissu. Et de fil en
            aiguille, j’aboutis à la formation de tapissière en couture décors
            et obtiens mon CAP. Je peaufine les techniques et ouvre mon atelier
            pour mettre mes mains et mon expérience à votre service. Je vous y
            accueille dans un cadre convivial pour donner vie à vos projets de
            décoration ou de restauration.
          </p>
        </div>
      </div>
    </div>
  )
}
