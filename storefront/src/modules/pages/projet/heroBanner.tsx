import Image from "next/image"
import { urlForImage } from "../../../lib/sanity/image"
import { Galerie } from "../../../lib/util/interface"

interface Props {
  galerie: Galerie
}

export default function HeroBanner({ galerie }: Props) {
  return (
    <>
      <div className="h-screen  md:min-h-screen bg-creamy noise items-center justify-center flex flex-col text-center">
        <div className="flex text-[2.2rem] leading-[2.5rem] mb:text-[3.5rem] xl:text-7xl 2xl:text-[8rem] font-lune uppercase text-lune pt-56 md:pt-48 lg:pt-72  2xl:mt-[20vh] py-10 relative">
          <h1>{galerie.title}</h1>
        </div>
        <div className="w-full rounded-t-[7vw] md:rounded-t-[5vw]">
          <Image
            src={urlForImage(galerie?.image1)}
            alt={galerie.title}
            width={2880}
            height={1620}
            className="object-cover w-full rounded-t-[7vw] md:rounded-t-[5vw] h-[80vh] md:h-[70vh] xl:h-[80vh] "
          />
        </div>
      </div>
    </>
  )
}
