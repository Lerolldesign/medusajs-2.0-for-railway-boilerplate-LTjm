import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { CiFacebook, CiInstagram } from "react-icons/ci"
import styles from "./style.module.scss"

export default function Index() {
  return (
    <div className={styles.footer}>
      <LocalizedClientLink
        className="hover:text-lune"
        data-testid="nav-store-link"
        href="/contact"
      >
        Contact
      </LocalizedClientLink>
      <div className="max-w-[90vw] items-center md:max-w-[50vw] flex relative right-10 md:right-20 gap-5">
        <LocalizedClientLink
          className="hover:text-lune text-[1.75rem]"
          data-testid="nav-store-link"
          href="https://www.facebook.com/lalunecurieuse/"
        >
          <CiFacebook />
        </LocalizedClientLink>
        <LocalizedClientLink
          className="hover:text-lune text-[1.75rem]"
          data-testid="nav-store-link"
          href="https://www.instagram.com/lalunecurieuse/"
        >
          <CiInstagram />
        </LocalizedClientLink>
      </div>
    </div>
  )
}
