import { motion } from "framer-motion"
import Link from "next/link"
import { scale, slide } from "../../anim"
import styles from "./style.module.scss"

// @ts-ignore
export default function Index({ data, isActive, setSelectedIndicator }) {
  const { title, href, index } = data

  return (
    <motion.div
      className={styles.link}
      onMouseEnter={() => {
        setSelectedIndicator(href)
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className={styles.indicator}
      ></motion.div>
      <Link href={href}>{title}</Link>
    </motion.div>
  )
}
