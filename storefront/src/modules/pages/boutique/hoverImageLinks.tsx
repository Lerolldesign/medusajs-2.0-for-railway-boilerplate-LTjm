"use client"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import React, { useRef } from "react"
import { FiArrowRight } from "react-icons/fi"

export const HoverImageLinks = () => {
  return (
    <section className="relative top-[50vh] md:top-[80vh]  lg:top-[20vh] h-[150vh] md:h-[60vh] lg:h-[100vh]">
      <div className="mx-auto max-w-5xl">
        <Link
          heading="Coussins"
          subheading="Je réalise des coussins sur mesures intérieurs ou extérieurs pour agrémenter tous style de décoration"
          imgSrc="https://res.cloudinary.com/dvdup4fx9/image/upload/v1712146736/La%20Lune%20Curieuse/Collection/Coussins/japuro_ebyesc.png"
          href="/categories/coussins"
        />
        <Link
          heading="Abat-jour"
          subheading="Abat-jour originaux sur mesure à poser, suspension, applique, baladeuse, cousus ou contrecollés."
          imgSrc="https://res.cloudinary.com/dvdup4fx9/image/upload/v1731921806/La%20Lune%20Curieuse/Collection/abat%20jour/ao/double-bat_yjdyoq.png"
          href="/categories/abat-jour"
        />

        <Link
          heading="Sacs. Mabou"
          subheading="Sac cabas sympa et solide upcyclé pour faire ses courses et bien d'autres encore"
          imgSrc="https://res.cloudinary.com/dvdup4fx9/image/upload/v1731922783/La%20Lune%20Curieuse/Collection/sacs/bangalore/bat_prod_galleryune_ejvrtb.jpg"
          href="/categories/sacs-mabou"
        />
      </div>
      {/** 
      <div className="flex items-center justify-center w-full py-32">
      <button className="rounded-full border-2 border-solid border-lune bg-white/20 px-6 py-3 font-bold  text-lune text-[.85rem] transition-all 
      duration-400 hover:translate-y-[-6px] hover:text-creamy hover:rounded-full hover:bg-lune hover:shadow-[4px_4px_4px_lune] active:translate-x-[0px] 
      active:translate-y-[0px] active:rounded-2xl active:shadow-none">
     Découvrir mes créations
    </button>
      </div>*/}
    </section>
  )
}

interface LinkProps {
  heading: string
  imgSrc: string
  subheading: string
  href: string
}

const Link = ({ heading, imgSrc, subheading, href }: LinkProps) => {
  const ref = useRef<HTMLAnchorElement | null>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"])
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"])

  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const rect = ref.current!.getBoundingClientRect()

    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-100 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "linear",
            staggerChildren: 0.0,
            delayChildren: 0.0,
          }}
          className="relative z-10 block text-4xl font-bold text-lune font-lune transition-colors duration-500 group-hover:text-neutral-50 lg:text-6xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "linear" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="md:text-[1.1rem] text-[.65rem] relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "0deg" },
          whileHover: { scale: 1, rotate: "0deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-neutral-50" />
      </motion.div>
    </motion.a>
  )
}
