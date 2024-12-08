import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import { urlForImage } from "../../../lib/sanity/image"
import { Galerie } from "../../../lib/util/interface"

interface Props {
  galerie: Galerie
}

export default function Description({ galerie }: Props) {
  return (
    <>
      <div className="  relative  top-[35vw] md:top-0  md:bottom-[-20vw] xl:bottom-[-10vw] ">
        <div className=" h-[60vh] md:h-[45vh]  lg:h-[100vh] flex flex-col xl:flex-row gap-10 w-full xl:px-32 px-10  relative bottom-20 md:bottom-[-10vh]  xl:bottom-[-10vh]  items-center justify-center">
          <div className="md:w-2/3 xl:w-1/2 relative bottom-10 md:bottom-0">
            <h2 className="font-lune text-lune uppercase text-[2rem] xl:text-[3rem] 2xl:text-[4rem]">
              La demande
            </h2>
            <span
              className="text-creamy 
                 md:px-20 mx-10 md:mx-20 xl:mx-5 2xl:mx-24 py-10 md:py-20  relative
         leading-6 2xl:leading-7 
         text-[.85rem] xl:leading-6  xl:text-[.95rem] 2xl:text-[.98rem]
                
                "
            >
              <PortableText value={galerie.body} />
            </span>
          </div>
          <div className="2xl:w-1/2  text-right md:ml-72  2xl:mr-32  ">
            <div className="relative bottom-20 md:bottom-0">
              <h3 className="text-gray-500 py-3 md:py-5">Client</h3>
              <h4 className="text-creamy">{galerie.categorie}</h4>

              {/**    <h3 className="text-gray-500 py-3 md:py-5">
                Année de réalisation
              </h3> */}

              <span></span>
            </div>
            <a className="text-creamy" href={`${galerie.link}`}>
              {/**  <div className="w-1/2 absolute  right-[13vw] xl:right-[7vw] 2xl:right-[13vw] mt-[-3vh] md:mt-20">
                <Button href="atelier" variant="secondary">
                  Découvrir le projet
                </Button>
              </div> */}
            </a>
          </div>
        </div>
        <Carousel className="w-full hidden md:block md:h-full pb-44 gap-10 relative top-20 ">
          <div className=" justify-between flex flex-row gap-10 top-[20vw] px-20 w-full absolute z-40 ">
            <div>
              <CarouselPrevious className="text-white" />
            </div>
            <div>
              <CarouselNext className="text-white" />
            </div>
          </div>
          <CarouselContent className="ml-10">
            <CarouselItem className="pl-1 basis-[100vw] md:basis-1/2 lg:basis-[55vw]">
              <Image
                src={urlForImage(galerie?.image2)}
                alt={galerie.title}
                width={2880}
                height={1620}
                className="object-cover w-full  h-auto  md:h-auto md:max-h-[90vh] rounded-3xl p-2"
              />
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-[55vw]">
              <Image
                src={urlForImage(galerie?.image3)}
                alt={galerie.title}
                width={2880}
                height={1620}
                className="object-cover w-full h-1/2  md:h-auto md:max-h-[90vh] rounded-3xl p-2"
              />
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-[55vw]">
              <Image
                src={urlForImage(galerie?.image4)}
                alt={galerie.title}
                width={2880}
                height={1620}
                className="object-cover w-full h-1/2  md:h-auto md:max-h-[90vh] rounded-3xl p-2"
              />
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-[55vw]">
              <Image
                src={urlForImage(galerie?.image5)}
                alt={galerie.title}
                width={2880}
                height={1620}
                className="object-cover w-full h-1/2  md:h-auto md:max-h-[90vh] rounded-3xl p-2"
              />
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-[55vw]">
              <Image
                src={urlForImage(galerie?.image6)}
                alt={galerie.title}
                width={2880}
                height={1620}
                className="object-cover w-full h-1/2  md:h-auto md:max-h-[90vh] rounded-3xl p-2"
              />
            </CarouselItem>
          </CarouselContent>
          {/**   <CarouselContent className="-ml-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/2"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="flex items-center justify-center p-6">
                      <span className="text-2xl font-semibold">
                        {index + 1}
                      </span>
                      <Image
                        src={urlForImage(galerie?.image1)}
                        alt={galerie.title}
                        width={2880}
                        height={1620}
                        className="object-cover w-full  h-auto"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>*/}
        </Carousel>

        <div className="flex flex-col h-auto gap-5 md:hidden pb-20 w-[100vw] px-5  ">
          <Image
            src={urlForImage(galerie?.image2)}
            alt={galerie.title}
            width={2880}
            height={1620}
            className="object-cover w-full  h-full  md:h-auto rounded-3xl"
          />
          <Image
            src={urlForImage(galerie?.image3)}
            alt={galerie.title}
            width={2880}
            height={1620}
            className="object-cover w-full  h-full  md:h-auto rounded-3xl"
          />
          <Image
            src={urlForImage(galerie?.image4)}
            alt={galerie.title}
            width={2880}
            height={1620}
            className="object-cover w-full  h-full  md:h-auto rounded-3xl"
          />
          <Image
            src={urlForImage(galerie?.image5)}
            alt={galerie.title}
            width={2880}
            height={1620}
            className="object-cover w-full  h-full  md:h-auto rounded-3xl"
          />
          <Image
            src={urlForImage(galerie?.image6)}
            alt={galerie.title}
            width={2880}
            height={1620}
            className="object-cover w-full  h-full  md:h-auto rounded-3xl"
          />
        </div>
      </div>
    </>
  )
}
