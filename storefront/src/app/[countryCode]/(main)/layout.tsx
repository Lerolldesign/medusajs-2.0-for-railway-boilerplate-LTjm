import { Metadata } from "next"

//import Footer from "@modules/layout/templates/footer"
//import Nav from "@modules/layout/templates/nav"
import { getBaseURL } from "@lib/util/env"
import Tidio from "@modules/elements/tidio"
import HeaderNew from "@modules/layout/templates/headernew"
import Ornements from "@modules/layout/templates/ornements"
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default async function PageLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <GoogleTagManager gtmId="GTM-N46KK3DR" />
      <GoogleAnalytics gaId="G-FCCXBCQNZZ" />
      <Ornements />

      <HeaderNew />

      {props.children}
      {/**      <Footer />*/}

      <Tidio />
    </>
  )
}
