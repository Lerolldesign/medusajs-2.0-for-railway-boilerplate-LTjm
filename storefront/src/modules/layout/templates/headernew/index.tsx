import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"

import HeaderMenu from "@modules/layout/templates/menu"
import { Suspense } from "react"
//import { PiUserCircleGearFill } from "react-icons/pi"
import Logo_brown from "../logoBrown"

export default function HeaderNew() {
  return (
    <>
      <header className="flex justify-between fixed z-50 w-full px-10 py-10 md:px-20 md:py-16 ">
        <div>
          <Suspense>
            <Logo_brown />
          </Suspense>
        </div>
        <div className="flex items-center justify-center gap-5 ">
          <Suspense>
            {/**   <LocalizedClientLink
              className="hover:text-lune text-creamy hidden xsmall:block"
              href="/account"
              data-testid="nav-account-link"
            >
              <PiUserCircleGearFill className="size-6" />
            </LocalizedClientLink> */}
          </Suspense>

          <Suspense
            fallback={
              <LocalizedClientLink
                className="hover:text-ui-fg-base flex gap-2  "
                href="/cart"
                data-testid="nav-cart-link"
              >
                <span className="hidden md:block">Article </span> (0)
              </LocalizedClientLink>
            }
          >
            <CartButton />
          </Suspense>
          <Suspense>
            <HeaderMenu />
          </Suspense>
        </div>
      </header>
    </>
  )
}
