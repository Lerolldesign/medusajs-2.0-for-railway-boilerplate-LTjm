import { Heading, Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"

const EmptyCartMessage = () => {
  return (
    <div
      className="py-48 px-2 flex flex-col justify-center items-start"
      data-testid="empty-cart-message"
    >
      <Heading
        level="h1"
        className="flex flex-row text-4xl md:text-5xl xl:text-6xl gap-x-2 items-baseline font-lune text-lune  "
      >
        Panier
      </Heading>
      <Text className="text-base-regular text-[.85rem] md:text-[.95rem] xl:text-[1rem] mt-4 mb-6 max-w-[32rem] md:max-w-[29rem] lg:max-w-[32rem]">
        Vous n&apos;avez rien dans votre panier. Changeons cela ! Utilisez le
        lien ci-dessous pour commencer à explorer mes produits.
      </Text>
      <div>
        <InteractiveLink href="/boutique">
          Accéder à la boutique
        </InteractiveLink>
      </div>
    </div>
  )
}

export default EmptyCartMessage
