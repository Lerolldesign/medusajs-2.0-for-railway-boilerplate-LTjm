import Back from "@modules/pages/projet/back"
import Description from "@modules/pages/projet/description"
import HeaderGallery from "@modules/pages/projet/heroBanner"
import { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { StrictMode } from "react"
import { client } from "../../../../../../lib/sanity/client"
import { urlForImage } from "../../../../../../lib/sanity/image"
import { Galerie } from "../../../../../../lib/util/interface"

export const metadata: Metadata = {
  title: "Projets",
  description: "particuliers ou professionnels",
}

interface Params {
  params: {
    slug: string
  }
}

async function getGalerie(slug: string) {
  const query = `
  *[_type == "galerie" && slug.current == "${slug}"][0] {
    title,
    slug,
    publishedAt,
    excerpt,
    lien,
    categorie,
    _id,
    body,
    "image1": image1.asset->url,
    "image2": image2.asset->url,
    "image3": image3.asset->url,
    "image4": image4.asset->url,
    "image5": image5.asset->url,
    "image6": image6.asset->url,
    tags[]-> {
      _id,
      slug,
      name
    }
  }
  `

  const galerie = await client.fetch(query)
  return galerie
}

export const revalidate = 60

const page = async ({ params }: Params) => {
  console.log(params, "parmas")
  const galerie: Galerie = await getGalerie(params?.slug)
  console.log(galerie, "galerie")

  if (!galerie) {
    notFound()
  }

  return (
    <StrictMode>
      <div className="bg-[#121212] noise">
        <HeaderGallery galerie={galerie} />

        <Description galerie={galerie} />
        <Back />
        {/**   <GalerieProject galerie={galerie} />*/}
      </div>
    </StrictMode>
  )
}

export default page

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <Image src={urlForImage(value)} alt="Galerie" width={700} height={700} />
    ),
  },
}

const richTextStyles = `
mt-14
text-justify
max-w-2xl
m-auto
prose-headings:my-5
prose-heading:text-2xl
prose-p:mb-5
prose-p:leading-7
prose-li:list-disc
prose-li:leading-7
prose-li:ml-4
`
