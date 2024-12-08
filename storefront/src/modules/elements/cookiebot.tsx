import Script from "next/script"

export default function CookieBot() {
  return (
    <>
      <Script
        id="Cookiebot"
        src="https://consent.cookiebot.com/uc.js"
        data-cbid="a43e7b45-7c51-4756-b76e-92d2fade9466"
        data-blockingmode="auto"
        type="text/javascript"
        strategy="lazyOnload" // Charger le script après le chargement initial
      />
    </>
  )
}
