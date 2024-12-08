import { useActionState } from "react"

import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import Input from "@modules/common/components/input"
import { login } from "../../../../lib/data/customer"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Login = ({ setCurrentView }: Props) => {
  const [message, formAction] = useActionState(login, null)

  return (
    <div
      className="max-w-sm w-full flex flex-col items-center"
      data-testid="login-page"
    >
      <h1
        className="text-large-semi uppercase mb-6
      text-[6vw] md:text-[4vw] xl:text-[1.8vw] font-semibold tracking-wider  !font-lune text-lune"
      >
        Connexion
      </h1>
      <p className="text-center text-base-regular text-ui-fg-base mb-8">
        Connectez-vous à votre compte client afin de bénéficier d&apos;
        meilleure expérience.
      </p>
      <form className="w-full" action={formAction}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="Email"
            name="email"
            type="email"
            title="Entrer une adresse mail valide @."
            autoComplete="email"
            required
            data-testid="email-input"
          />
          <Input
            label="Mot de passe"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            data-testid="password-input"
          />
        </div>
        <ErrorMessage error={message} data-testid="login-error-message" />
        <div className=" mt-6 items-center flex justify-center">
          <SubmitButton data-testid="sign-in-button" className="w-full mt-6">
            Connectez-vous
          </SubmitButton>
        </div>
      </form>
      <span className="text-center text-ui-fg-base text-small-regular mt-6">
        Vous n&apos;avez pas encore de compte{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
          className="underline font-semibold uppercase"
          data-testid="register-button"
        >
          Rejoignez-nous
        </button>
        .
      </span>
    </div>
  )
}

export default Login
