"use client"

import { Text } from "@medusajs/ui"
import Link from "next/link"
import { useEffect, useState } from "react"
import { PiFacebookLogoThin, PiInstagramLogoThin } from "react-icons/pi"

const FooterGlobal = () => {
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false)
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight
      setIsScrolledToBottom(isBottom)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <footer
      className={`fixed z-40 bottom-0 w-full rounded-t-[3vw] p-[4vh] md:p-[4vh] lg:p-[3vh] bg-black noise text-white transition-opacity duration-300 ${
        isScrolledToBottom ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-col-reverse md:flex-row relative bottom-2 w-full justify-between mb-5 md:mb-16 items-center">
        <div className="px-20">
          <Text className="txt-compact-small pt-5 md:pt-0">
            © {new Date().getFullYear()} La Lune Curieuse
          </Text>
        </div>
        <div className="relative md:absolute md:right-[6vw]">
          <div className="flex text-[1.95rem] gap-5 lg:gap-5 items-center justify-center">
            <Link
              href="https://www.facebook.com/lalunecurieuse/"
              className="text-lune hover:text-creamy transition duration-150 ease-in-out"
            >
              <PiFacebookLogoThin />
            </Link>
            <Link
              href="https://www.instagram.com/lalunecurieuse/"
              className="text-lune hover:text-creamy transition duration-150 ease-in-out"
            >
              <PiInstagramLogoThin />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterGlobal

{
  /**
   <div>
          <p className='text-[.75rem] md:text-[.90rem] text-lune w-[85vw] md:w-[80vw] lg:w-[85vw]'>&copy; {currentYear} La Lune Curieuse</p>
          <div className='flex flex-col md:flex-row gap-6 text-[1.8rem] pb-3 w-[40vw] lg:w-[15vw]'>
          <span className='text-white/70 text-[.75rem] md:text-[.9rem] pl-2 md:pt-1'>Mention légales</span>
          
          
          </div>
          </div>
         
          <div className='flex gap-5 md:gap-3 relative right-[24vw] bottom-3 py-2 text-[1.95rem] md:right-[1vw] md:bottom-2 lg:bottom-3 md:py-2'>
            <Link href="#" className='text-lune hover:text-creamy transition duration-150 ease-in-out'><PiFacebookLogoThin /></Link>
            <Link href="#" className='text-lune hover:text-creamy transition duration-150 ease-in-out'><PiInstagramLogoThin /></Link>
          </div>


*/
}
