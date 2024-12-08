import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { menuSlide } from "../anim"
import Curve from "./Curve"
import Footer from "./Footer"
import Link from "./Link"
import styles from "./style.module.scss"

const navItems = [
  {
    title: "Atelier",
    href: "/atelier",
  },
  {
    title: "Prestations",
    href: "/prestations",
  },
  {
    title: "Réalisations",
    href: "/projets",
  },
  {
    title: "Boutique",
    href: "/boutique",
  },
]

export default function Index() {
  const pathname = usePathname()
  const [selectedIndicator, setSelectedIndicator] = useState(pathname)

  return (
    <motion.div
      variants={menuSlide}
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
          <div className={styles.header}>
            <p>Menu</p>
          </div>
          {navItems.map((data, index) => {
            return (
              <Link
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
                data-testid="nav-store-link"
              ></Link>
            )
          })}
        </div>
        <div className="relative bottom-10">
          {" "}
          <Footer />
        </div>
      </div>
      <Curve />
    </motion.div>
  )
}
