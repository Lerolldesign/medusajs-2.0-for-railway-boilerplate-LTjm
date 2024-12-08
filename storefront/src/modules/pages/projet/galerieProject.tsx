import { Galerie } from "../../../lib/util/interface"
import { PortableText } from "@portabletext/react"
import { urlForImage } from "../../../lib/sanity/image"
import Image from "next/image"
import Link from "next/link"

interface Props {
  galerie: Galerie
}

export default function GalerieProject({ galerie }: Props) {
  return (
    <>
      <div className="flex flex-col w-full px-32 py-20 bg-[#121212] noise gap-7">
        <div className="flex w-full gap-5">
          <div className="w-1/2 text-white">01</div>
          <div className="w-1/2 text-white">02</div>
        </div>
        <div className="flex w-full gap-5">
          <div className="w-1/2 text-white">03</div>
          <div className="w-1/2 text-white">04</div>
        </div>
      </div>
    </>
  )
}
