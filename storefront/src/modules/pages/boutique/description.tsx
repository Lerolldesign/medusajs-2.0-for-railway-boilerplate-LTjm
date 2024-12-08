"use client"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import React, { useLayoutEffect, useRef } from "react"
import styles from "./style.module.css"

const phrases = [
  "Mes produits sont entièrement confectionnés à la main dans mon atelier situé à la croisée de 3 provinces entre Dijon, Langres et Gray",
]

export default function Description() {
  return (
    <div className={styles.description}>
      {phrases.map((phrase, index) => {
        return <AnimatedText key={index}>{phrase}</AnimatedText>
      })}
    </div>
  )
}

function AnimatedText({ children }: { children: React.ReactNode }) {
  const text = useRef<HTMLParagraphElement>(null)
  const wrapper = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(
      text.current,
      { y: "100%", opacity: 0 }, // Le texte commence masqué en bas avec opacité 0
      {
        y: "0%", // Le texte se déplace vers sa position normale
        opacity: 1, // Opacité passe à 1
        duration: 1, // Durée de l'animation
        ease: "power3.out", // Effet de transition
        scrollTrigger: {
          trigger: wrapper.current, // Utilisation d'un conteneur masqué
          start: "top 90%", // Début de l'animation quand le conteneur est visible
          toggleActions: "play none none none", // Animation uniquement vers le bas
        },
      }
    )
  }, [])

  return (
    <div
      ref={wrapper}
      style={{
        overflow: "hidden", // Masque les parties dépassant du texte
        display: "inline-block", // Assure un conteneur ajusté au texte
      }}
    >
      <p
        className="font-lune w-[80vw] lg:w-[60vw] text-[7vw] md:text-[4vw]"
        ref={text}
        style={{ transform: "translateY(100%)" }} // Position initiale pour le masquage
      >
        {children}
      </p>
    </div>
  )
}
