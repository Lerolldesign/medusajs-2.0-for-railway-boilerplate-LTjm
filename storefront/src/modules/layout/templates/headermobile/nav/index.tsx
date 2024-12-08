"use client"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { menuSlide2 } from "../anim"
import Curve from "./Curve"
import Link from "./Link"
import styles from "./style.module.scss"

const navItems = [
  {
    title: "Accueil",
    href: "/",
  },
  {
    title: "Atelier",
    href: "/atelier",
  },
  {
    title: "réalisations",
    href: "/projets",
  },
  {
    title: "Boutique",
    href: "/boutique",
  },
  {
    title: "Contact",
    href: "/contact",
  },
]

export default function Navigation() {
  const pathname = usePathname()
  const [selectedIndicator, setSelectedIndicator] = useState(pathname)

  return (
    <motion.div
      variants={menuSlide2}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname)
          }}
          className={styles.nav}
        >
          {/**   <div className={styles.header}> 
                        <p>Navigation</p>
                    </div>*/}
          {navItems.map((data, index) => {
            return (
              <Link
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
              ></Link>
            )
          })}
        </div>
        {/**  <Footer /> */}
      </div>
      <Curve />
    </motion.div>
  )
}
