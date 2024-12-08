"use client"

import { useLenis } from "@studio-freight/react-lenis"
import Image from "next/image"
import { Parallax } from "./Parallax"

const ImageList = () => {
  // @ts-ignore
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
    // console.log(scroll);
  })
  const scrollToLastImage = () => {
    if (lenis) {
      lenis.scrollTo("#last-image", { lerp: 0.01 })
    }
  }

  return (
    <>
      {/**   <button
        onClick={scrollToLastImage}
        className="bg-white text-black capitalize p-4 font-semibold text-xl mt-16 hover:bg-white/90"
      >
        scroll to anchor
      </button>*/}
      <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5  lg:w-screen md:gap-3 md:px-20 h-full   md:my-auto bg-[#131313] noise py-32">
        <div className="flex-col gap-3 md:gap-5 ">
          {/*01*/}
          <Parallax speed={1} className="self-start">
            <Image
              className="rounded-[2rem]"
              src={
                "https://res.cloudinary.com/dvdup4fx9/image/upload/v1733568281/La%20Lune%20Curieuse/grids/abat-jour/05_l7tb92.avif"
              }
              alt="Image"
              width={600}
              height={500}
              priority
              sizes="30vw"
            />
          </Parallax>

          {/*02 hidden*/}
          <Parallax speed={-20} className="hidden self-center overflow-hidden">
            <Image
              className="rounded-[2rem]"
              src={
                "https://lunecloud.fra1.digitaloceanspaces.com/illuminer/galery/06.avif"
              }
              alt="Image"
              width={600}
              height={400}
              priority
              sizes="30vw"
            />
          </Parallax>
          {/*03 hidden*/}
          <Parallax speed={3} className="self-end">
            <Image
              className="rounded-[2rem]"
              src={
                "https://res.cloudinary.com/dvdup4fx9/image/upload/v1733567498/La%20Lune%20Curieuse/grids/abat-jour/flower_pzuxkc.jpg"
              }
              alt="Image"
              width={400}
              height={600}
              sizes="30vw"
            />
          </Parallax>
        </div>

        <div className="flex-col gap-3 md:gap-5 ">
          {/*04*/}
          <Parallax speed={-1} className="self-start">
            <Image
              className="rounded-[2rem]"
              src={
                "https://res.cloudinary.com/dvdup4fx9/image/upload/v1733568462/La%20Lune%20Curieuse/grids/abat-jour/01_fakrdt.avif"
              }
              alt="Image"
              width={600}
              height={400}
              sizes="50vw"
            />
          </Parallax>
          {/*05*/}
          <Parallax speed={-1} className="self-end">
            <Image
              className="rounded-[2rem]"
              src={
                "https://res.cloudinary.com/dvdup4fx9/image/upload/v1733567501/La%20Lune%20Curieuse/grids/abat-jour/bergere-abat-jour-jaune_tvfrnv.jpg"
              }
              alt="Image"
              width={600}
              height={400}
              sizes="50vw"
            />
          </Parallax>
          {/*06 hidden*/}
          <Parallax speed={-1} className="self-start">
            <Image
              className="rounded-[2rem]"
              src={
                "https://res.cloudinary.com/dvdup4fx9/image/upload/v1733567503/La%20Lune%20Curieuse/grids/abat-jour/combe_awuvwl.jpg"
              }
              alt="Image"
              width={600}
              height={400}
              sizes="50vw"
            />
          </Parallax>
        </div>

        <div className="flex-col gap-3 md:gap-5 ">
          {/*07*/}
          <Parallax speed={-1} className="self-center">
            <Image
              className="rounded-[2rem]"
              src={
                "https://res.cloudinary.com/dvdup4fx9/image/upload/v1733568499/La%20Lune%20Curieuse/grids/abat-jour/04_oyxofp.avif"
              }
              alt="Image"
              width={400}
              height={600}
              sizes="50vw"
            />
          </Parallax>

          <Parallax speed={-1} className="self-end">
            <Image
              className="rounded-[2rem]"
              src={
                "https://res.cloudinary.com/dvdup4fx9/image/upload/v1733568652/La%20Lune%20Curieuse/grids/abat-jour/02_ib6nkc.avif"
              }
              alt="Image"
              width={600}
              height={400}
              sizes="50vw"
            />
          </Parallax>

          <Parallax speed={-1} className="self-start ">
            <Image
              className="rounded-[2rem]"
              src={
                "https://res.cloudinary.com/dvdup4fx9/image/upload/v1733567502/La%20Lune%20Curieuse/grids/abat-jour/kitch_bz2bxp.jpg"
              }
              alt="Image"
              width={600}
              height={500}
              sizes="50vw"
              id="last-image"
            />
          </Parallax>
        </div>

        <div className="flex-col gap-3 md:gap-5 block md:hidden lg:block">
          <Parallax speed={1} className="self-start">
            <Image
              className="rounded-[2rem]"
              src={
                "https://res.cloudinary.com/dvdup4fx9/image/upload/v1733568296/La%20Lune%20Curieuse/grids/abat-jour/03_uipn2r.avif"
              }
              alt="Image"
              width={400}
              height={600}
              sizes="50vw"
            />
          </Parallax>
          <Parallax speed={2} className="self-end">
            <Image
              className="rounded-[2rem]"
              src={
                "https://res.cloudinary.com/dvdup4fx9/image/upload/v1733568516/La%20Lune%20Curieuse/grids/abat-jour/06_xbxvxz.avif"
              }
              alt="Image"
              width={400}
              height={600}
              sizes="50vw"
            />
          </Parallax>
        </div>
        {/**
      <Parallax speed={-1} className="self-center">
        <Image
          src={"https://lunecloud.fra1.digitaloceanspaces.com/illuminer_vos_interieurs.avif"}
          alt="Image"
          width={400}
          height={600}
          sizes="50vw"
        />
    </Parallax> **/}
      </div>
    </>
  )
}

export default ImageList
