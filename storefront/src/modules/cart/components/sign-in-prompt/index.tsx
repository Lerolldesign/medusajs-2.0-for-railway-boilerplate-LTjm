import { Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const SignInPrompt = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <Heading level="h2" className="txt-xlarge">
          Vous avez déjà un compte ?
        </Heading>
        <Text className="txt-medium text-ui-fg-subtle mt-2">
          Connectez-vous pour une meilleure expérience.
        </Text>
      </div>
      <div>
        <LocalizedClientLink href="/account">
          <button className="group relative inline-flex border focus:outline-none w-full sm:w-auto rounded-full text-white bg-lune ring-lune ring-offset-lune  items-center justify-center self-stretch px-6 py-4 text-sm text-center font-semibold   hover:bg-neutral-900  ">
            Connexion
          </button>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default SignInPrompt
