import Button from "@modules/elements/button"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { client } from "../../../../../lib/sanity/client"
import { urlForImage } from "../../../../../lib/sanity/image"
import { Galerie } from "../../../../../lib/util/interface"

export const metadata: Metadata = {
  title: "Réalisations - Du rêve à la réalité",
  description:
    "Une décoration à votre image pour votre résidence, chambres d'hôtes, hôtels, restaurants ou boutiques,  que vous soyez particuliers ou professionnels",
}

{
  /** CASESTUDIES */
}
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

export default async function Project() {
  const galeries: Galerie[] = await getGaleries()

  // Afficher les données récupérées dans la console pour le débogage
  console.log(galeries)

  return (
    <main className=" mx-auto py-auto px-12 md:px-16 lg:px-20 2xl:px-36 bg-creamy justify-items-center noise h-[230vh] lg:h-[150vh]">
      <div className="max-w-2xl mb-16 ">
        <div className="flex text-[2.8rem]  md:text-[3.5rem] leading-[2.5rem] mb:text-[3.5rem]  lg:text-[5rem] 2xl:text-[8rem] 2xl:leading-[7rem]  font-lune uppercase text-lune pt-52">
          <h1 className="text-left md:text-left">Réalisations</h1>
        </div>
      </div>

      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mb-12">
        {galeries.map((galerie, index) => (
          <div key={index} className="flex flex-col mb-10">
            <Link href={`/projets/${galerie?.slug?.current}`}>
              <Image
                src={urlForImage(galerie?.image1)}
                alt={galerie.title}
                width={2880}
                height={1620}
                className="md:rounded-[2vw] rounded-[15vw] object-cover w-full h-auto md:h-auto md:max-h-[50vh] hover:opacity-40 transition duration-150 ease-out hover:ease-in"
              />
            </Link>
            <div className="mx-5 mt-3">
              <h2 className="font-semibold text-[1.4rem] md:text-[1.30rem] lg:text-[1.6rem]  2xl:text-[2rem] py-1 text-lune font-lune uppercase">
                {galerie.title}
              </h2>
              <h3 className="text-[.85rem] md:text-[.75rem] lg:text-[.85rem] 2xl:text-[.95rem] pb-5">
                {galerie.excerpt}
              </h3>

              <Button
                href={`/projets/${galerie?.slug?.current}`}
                variant="primary"
              >
                Découvrir le projet
              </Button>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
