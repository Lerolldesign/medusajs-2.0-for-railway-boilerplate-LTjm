/* eslint-disable react-hooks/rules-of-hooks */

import { Metadata } from "next"

//import FeaturedProducts from "@modules/home/components/featured-products"
import { getCollectionsWithProducts } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import CookieBot from "@modules/elements/cookiebot"
import Banner from "@modules/home/components/hero/banner"
import HomeSectionEnjoliver from "@modules/home/components/sections/enjoliver"
import HomeSectionIlluminer from "@modules/home/components/sections/illuminer"
import HomeSectionIntroText from "@modules/home/components/sections/introText"
import HomeSectionRestaurer from "@modules/home/components/sections/restaurer"
import FooterLune from "@modules/layout/templates/footerLune"
//import CookieBot from "react-cookiebot"

//import Hero from "@modules/home/components/hero"

//const domainGroupId = "a43e7b45-7c51-4756-b76e-92d2fade9466"

export const metadata: Metadata = {
  title: "Tapisserie d’ameublement ▪ couture & décors",
  description:
    "Atelier artisanal de tapisserie d’ameublement. Création de décorations textiles sur mesure et restauration de sièges. Dijon, Gray, Langres",
}

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  return (
    <div className="bg-[#111111] noise ">
      <Banner />
      <HomeSectionIlluminer />
      <HomeSectionRestaurer />
      <HomeSectionEnjoliver />
      <HomeSectionIntroText />
      {/**      <div className="py-12">
       * <CookieBot domainGroupId={domainGroupId} />
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>  <CookieBot />*/}
      <FooterLune />
      <CookieBot />
    </div>
  )
}
