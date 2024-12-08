import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"
export default function Logo_brown() {
  return (
    <div>
      {/**import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"
import { useRouter } from "next/navigation"

const Logo_brown = () => {
  const router = useRouter()

  return (
    <LocalizedClientLink href="/">
      <Image
        className="w-[18vw] md:w-[11vw] lg:w-[6.5vw] 2xl:w-[5.5vw] left-[10%] md:left-[8%] top-[7%] cursor-pointer fixed lg:left-[5%] 2xl:left-[4%] md:top-[7%] z-50 "
        src="https://lunecloud.fra1.digitaloceanspaces.com/logo-ocre.png"
        height="100"
        width="100"
        alt="Logo"
      />
    </LocalizedClientLink>
  )
}

export default Logo_brown
 */}

      <LocalizedClientLink href="/" data-testid="nav-store-link">
        <Image
          className="w-[18vw] md:w-[11vw] lg:w-[6.5vw] 2xl:w-[5.5vw]  "
          src="https://lunecloud.fra1.digitaloceanspaces.com/logo-ocre.png"
          height="100"
          width="100"
          alt="Logo"
        />
      </LocalizedClientLink>

      {/**   <Link href="./">
        <Image
          className="w-[18vw] md:w-[11vw] lg:w-[6.5vw] 2xl:w-[5.5vw] left-[10%] md:left-[8%] top-[7%] cursor-pointer fixed lg:left-[5%] 2xl:left-[4%] md:top-[7%] z-50 "
          src="https://lunecloud.fra1.digitaloceanspaces.com/logo-ocre.png"
          height="100"
          width="100"
          alt="Logo"
        />
      </Link> */}
    </div>
  )
}
