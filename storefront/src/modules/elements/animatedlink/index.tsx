import Link from "next/link"
import React from "react"

interface AnimatedLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

const AnimatedLink: React.FC<AnimatedLinkProps> = ({
  href,
  children,
  className = "",
}) => {
  return (
    <Link
      href={href}
      className={`text-browny z-50  relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-browny after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${className}`}
    >
      {children}
    </Link>
  )
}

export default AnimatedLink
