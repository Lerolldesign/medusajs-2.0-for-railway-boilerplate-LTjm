import Image from "next/image"

export default function HeroEnjoliver() {
  return (
    <div className="min-h-screen bg-[#111111] noise items-center justify-center flex flex-col my-auto text-center">
      <div className="flex text-[2.2rem] leading-[2.5rem] mb:text-[3.5rem] xl:text-7xl 2xl:text-[8rem] font-lune uppercase text-lune pt-52">
        <div className="flex flex-col ">
          <h1>Enjoliver vos espaces</h1>
          <h2 className="text-[1.4rem]/[1.6rem] small:text-[2.1rem] text-creamy pt-3 2xl:text-[3rem] px-10 sm:px-0 ">
            Confection sur mesure de vos décors textiles
          </h2>
        </div>
      </div>
      <div>
        <Image
          src="https://res.cloudinary.com/dvdup4fx9/image/upload/v1716877180/La%20Lune%20Curieuse/Sections/section_homepage_amenager_dxtvgg.avif"
          width={1920}
          height={1080}
          alt="image"
          className="object-cover h-[59vh] relative bottom-0 mt-20 left-0 rounded-b-[2vw]"
        />
      </div>
    </div>
  )
}
