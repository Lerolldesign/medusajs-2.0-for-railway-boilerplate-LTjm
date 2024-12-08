import Image from "next/image"

export default function Logo_brown_sanity() {
  return (
    <div>
      <Image
        className="w-[18vw] md:w-[11vw] lg:w-[6.5vw] 2xl:w-[5.5vw]  "
        src="https://lunecloud.fra1.digitaloceanspaces.com/logo-ocre.png"
        height="100"
        width="100"
        alt="Logo"
      />
    </div>
  )
}
