/* eslint-disable @next/next/no-async-client-component */
"use client"
import Button from "@modules/elements/button"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel" // Assurez-vous que ce chemin est correct
import Image from "next/image"
import Link from "next/link"
import { client } from "../../../lib/sanity/client"
import { urlForImage } from "../../../lib/sanity/image"
import { Galerie } from "../../../lib/util/interface"

// Fetch data from Sanity
async function getGaleries() {
  const query = `
    *[_type == "galerie"] {
      title,
      slug,
      publishedAt,
      excerpt, 
      "image1": image1.asset->url,
      excerpt,
      tags[]-> {
        _id,
        slug,
        name
      }
    }
  `
  const data = await client.fetch(query)
  return data
}

export const revalidate = 60

export default async function CarouselProject() {
  const galeries: Galerie[] = await getGaleries()

  return (
    <div className="p-10">
      <div className=" mb-16">
        <h1 className="flex text-[2.8rem] md:text-[3.5rem] leading-[2.5rem] lg:text-[5rem] 2xl:text-[8rem] font-lune uppercase text-lune pt-52">
          Réalisations
        </h1>
      </div>

      {/* Carousel Component */}
      <Carousel>
        <CarouselContent>
          <div className=" justify-between flex flex-row gap-10 top-[20vw] px-20 w-full absolute z-40 ">
            <div>
              <CarouselPrevious className="text-white" />
            </div>
            <div>
              <CarouselNext className="text-white" />
            </div>
          </div>
          {galeries.map((galerie, index) => (
            <CarouselItem key={index} className="flex flex-col mb-10 mx-3 ">
              <Link href={`/projets/${galerie?.slug?.current}`}>
                <Image
                  src={urlForImage(galerie?.image1)}
                  alt={galerie.title}
                  width={2880}
                  height={1620}
                  className="h-[40vh] w-full md:h-[60vh] grayscale hover:grayscale-0 bg-gray-800 rounded-lg transition-transform duration-300 group-hover:scale-105 md:rounded-[2vw] "
                />
              </Link>
              <div className="relative bottom-32 bg-black backdrop-blur-lg bg-opacity-20 w-full md:rounded-b-[2vw] p-5">
                <h2 className="font-semibold text-[1.4rem] md:text-[1.30rem] lg:text-[1.6rem] 2xl:text-[2rem] py-1 text-lune font-lune uppercase">
                  {galerie.title}
                </h2>
                <h3 className="text-[.85rem] md:text-[.75rem] lg:text-[.85rem] 2xl:text-[.95rem] pb-5 text-white">
                  {galerie.excerpt}
                </h3>
                <Button
                  href={`/projets/${galerie?.slug?.current}`}
                  variant="primary"
                >
                  Découvrir le projet
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
