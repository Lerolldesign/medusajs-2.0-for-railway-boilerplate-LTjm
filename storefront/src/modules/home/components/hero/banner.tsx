import Image from "next/image"

export default function Banner() {
  return (
    <>
      <div className="relative h-[100vh] overflow-hidden bg-neutral-900 ">
        <div className="overlay absolute top-0 left-0 w-full h-full bg-black/[.1] backdrop-blur-sm"></div>
        <Image
          src="https://lunecloud.fra1.digitaloceanspaces.com/bg-slider.png"
          width={1920}
          height={1080}
          alt="image"
          className="object-cover w-screen h-[100vh] sm:h-full"
        />
        <div className="flex-col w-full bottom-[30vh] lg:bottom-52 absolute flex justify-center items-center text-white text-center">
          <h1 className="px-72 text-lune py-7 tracking-wider font-lune text-[2.15rem] leading-[2.3rem] xl:text-[4rem] xl:leading-[4.3rem] 2xl:text-6xl 2xl:leading-[6rem]">
            Tapissière d’ameublement
          </h1>
          <p className="tracking-wider px-10 lg:px-72 font-lune text-[1.85rem] leading-[2.3rem] 2xl:text-6xl 2xl:leading-[4rem]">
            Atelier artisanal <br />
            et d&#39;inspiration
            <br /> dédié à l&#39;embellissement
            <br /> intérieur et extérieur
          </p>
        </div>
      </div>
    </>
  )
}
