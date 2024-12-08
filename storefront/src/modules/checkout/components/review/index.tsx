"use client"

import { Heading, Text, clx } from "@medusajs/ui"
import Link from "next/link"

import { useSearchParams } from "next/navigation"
import PaymentButton from "../payment-button"

const Review = ({ cart }: { cart: any }) => {
  const searchParams = useSearchParams()

  const isOpen = searchParams.get("step") === "review"

  const paidByGiftcard =
    cart?.gift_cards && cart?.gift_cards?.length > 0 && cart?.total === 0

  const previousStepsCompleted =
    cart.shipping_address &&
    cart.shipping_methods.length > 0 &&
    (cart.payment_collection || paidByGiftcard)

  return (
    <div>
      <div className="flex flex-row items-center justify-between mb-6">
        <Heading
          level="h2"
          className={clx(
            "flex flex-row text-[6vw] md:text-[4vw] xl:text-[1.8vw] font-semibold tracking-wider gap-x-4 md:gap-x-2  uppercase !font-lune text-lune",
            {
              "opacity-50 pointer-events-none select-none": !isOpen,
            }
          )}
        >
          Confirmation
        </Heading>
      </div>
      {isOpen && previousStepsCompleted && (
        <>
          <div className="flex items-start gap-x-1 w-full mb-6">
            <div className="w-full">
              <Text className="txt-medium-plus text-ui-fg-base mb-1">
                En cliquant sur le bouton Passer la commande, vous confirmez que
                vous avez lu, compris et accepté nos Conditions de vente et
                Politique de retour de La Lune Curieuse.{" "}
                <Link href="/documents/cgv">lire +</Link>
              </Text>
            </div>
          </div>
          <PaymentButton cart={cart} data-testid="submit-order-button" />
        </>
      )}
    </div>
  )
}

export default Review
