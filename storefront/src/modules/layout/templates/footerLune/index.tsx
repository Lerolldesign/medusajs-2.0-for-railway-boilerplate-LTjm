"use client"
import AnimatedLink from "@modules/elements/animatedlink"
import Button from "@modules/elements/button"
import gsap from "gsap"
import { useEffect, useState } from "react"

const FooterLune = () => {
  const [circleWidth, setCircleWidth] = useState(0)

  useEffect(() => {
    const updateCircleSize = () => {
      setCircleWidth(window.innerWidth * 2) // Double the screen width for a wider effect
    }

    updateCircleSize()
    window.addEventListener("resize", updateCircleSize)

    const footer = document.getElementById("footer")
    const circle = document.getElementById("circle")

    const handleScroll = () => {
      if (footer && circle) {
        const footerPosition = footer.getBoundingClientRect().top
        const screenHeight = window.innerHeight

        if (footerPosition < screenHeight && footerPosition > 0) {
          gsap.to(circle, { opacity: 1, y: 0, duration: 1 })
        } else {
          gsap.to(circle, { opacity: 0, y: 100, duration: 1 })
        }
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", updateCircleSize)
    }
  }, [])

  return (
    <footer
      id="footer"
      className="relative   overflow-hidden h-[80vh] xsmall:h-[60vh] medium:h-[70vh]  large:h-[92vh] xlarge:h-[75vh]  2xlarge:h-[92vh] py-48   text-white text-center"
    >
      <div
        id="circle"
        className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-amber-100 noise opacity-0 flex items-center justify-center z-10"
        style={{
          width: `${circleWidth}px`,
          height: `${circleWidth}px`,
          borderRadius: "50%",
        }}
      >
        {/* Bouton centré dans le cercle avec positionnement ajusté */}
        <div
          className="text-black z-50 absolute top-[33%] xsmall:top-[16%] medium:top-[10%] large:top-[12%] xlarge:top-[11%] 2xlarge:top-[10%]"
          style={{
            left: "50%",
            transform: "translate(-50%, -50%)", // Centrage exact du bouton
          }}
        >
          <h4 className="text-lune font-lune text-[2.4rem] xsmall:text-[4rem] medium:text-[6rem] large:text-[8rem]  xlarge:text-[9.5rem] 2xlarge:text-[10rem]">
            Céline rondot
          </h4>
          <p className="text-xs large:text-xl text-browny text-center w-full xsmall:w-1/2  2xlarge:w-1/2 justify-center flex item-center relative  xsmall:left-[25%] xlarge:left-[25%] px-12 2xlarge:px-20 ">
            Passionnée par mon métier, je vous invite à découvrir mon univers.
            Que ce soit pour la conception d&apos;abat-jours ou créer des décors
            uniques, je suis là pour réaliser vos projets sur mesure.
            N&apos;hésitez pas à me contacter pour discuter de vos envies !
          </p>
          <div className="flex flex-col md:flex-row gap-5 items-center justify-center py-10">
            <div>
              <Button href="/prestations" variant="primary">
                Mes prestations +
              </Button>
            </div>
            <div>
              {" "}
              <Button href="/contact" variant="tertery">
                Contactez-moi +
              </Button>
            </div>
          </div>
        </div>
        <div
          className=" absolute  text-browny top-[62%] large:top-[22.6%] xlarge:top-[22.4%] left-[45%] xsmall:left-[49%]  medium:left-[33%] large:left-[32%] xlarge:left-[32%] 2xlarge:left-[32%] z-50 xsmall:top-[31.8%] medium:top-[18.8%] 2xlarge:top-[20.8%] w-full h-[10vh]"
          style={{
            transform: "translate(-50%, -50%)", // Centrage exact du bouton
          }}
        >
          <div className="flex justify-center w-full py-10 ">
            <div className="relative flex flex-col xsmall:flex-row left-5">
              <p className="text-[.70rem] md:text-[.75rem] 2xlarge:txt-compact-small">
                © {new Date().getFullYear()} La Lune Curieuse.
                <span className=" "> Tous droits réservés. </span>
              </p>
              <p className="pt-1 relative left-20 xsmall:left-4">
                <AnimatedLink
                  className="lg:hidden block text-[.65rem] text-center font-bold "
                  href="https://lerolldesign.com"
                >
                  crafted /// Leroll D+sign
                  <sup className="size-2">©</sup>.
                </AnimatedLink>
              </p>
            </div>
          </div>
        </div>
        {/**   <AnimatedLink
            className="text-capitalize! font-xs text-blue-900"
            href="/documents/mentions-legales"
          >
            crafted /// Leroll D+sign
            <sup className="size-2">©</sup>.
          </AnimatedLink> */}

        <div
          className=" absolute z-50 text-browny top-[55%] left-[48%] xsmall:left-[44%] xsmall:top-[25.8%]  2xlarge:left-[62%] medium:top-[17.2%] large:top-[21.2%] medium:left-[58%] large:left-[60%] xlarge:left-[62%] xlarge:top-[22.3%]  2xlarge:top-[20.8%] w-full h-[10vh]"
          style={{
            transform: "translate(-50%, -50%)", // Centrage exact du bouton
          }}
        >
          <div className="flex z-40 justify-center text-[.68rem] xsmall:text-[.8rem]   2xlarge:text-[.85rem] text-center text-browny font-extrabold gap-3 2xlarge:gap-5 w-full py-10 xsmall:py-20 xlarge:py-10">
            <div className="flex gap-5 relative left-3">
              <AnimatedLink
                className="hidden lg:block absolute right-[11vw] medium:right-[15vw] large:right-[25vw] xlarge:right-[35vw] txt-compact-small font-bold "
                href="/documents/mentions-legales"
              >
                crafted /// Leroll D+sign
                <sup className="size-2">©</sup>.
              </AnimatedLink>
              <AnimatedLink className="z-40" href="/documents/mentions-legales">
                MENTIONS LÉGALES
              </AnimatedLink>
              <AnimatedLink className="z-40" href="/documents/cgv">
                C.G.V
              </AnimatedLink>
              <AnimatedLink className="z-40" href="/boutique">
                BOUTIQUE{" "}
              </AnimatedLink>
              <AnimatedLink className="z-40" href="/documents/cgu">
                COMMANDE{" "}
              </AnimatedLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterLune
