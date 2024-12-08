"use client"

import {
  motion,
  useAnimate,
  useDragControls,
  useMotionValue,
} from "framer-motion"
import { Dispatch, ReactNode, SetStateAction, useState } from "react"
import { RiMailStarLine } from "react-icons/ri"
import useMeasure from "react-use-measure"
import ContactForm from "./contact-form"

export const DragCloseMail = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="fixed right-10 bottom-24 md:right-32 md:bottom-60 z-50 ">
      <div
        onClick={() => setOpen(true)}
        id="contact_btn"
        className="relative w-[20vw] h-[20vw] md:w-[10rem] md:h-[10rem] flex items-center justify-center rounded-full text-creamy cursor-pointer transition-all duration-400 ease-in-out hover:shadow-2xl hover:shadow-gray-900/10 hover:-translate-y-[1rem] hover:text-gray-300 bg-lune"
      >
        <RiMailStarLine className="absolute text-[2.5rem] md:text-[3.5rem]" />
      </div>
      {/**      <button
        onClick={() => setOpen(true)}
        className="rounded-full bg-lune p-3 xlarge:p-5 text-white transition-colors hover:bg-browny hover:animate-pulse n"
      >
        <RiMailStarLine className="text-[1.5rem] small:text-[2rem] " />
      </button> */}

      <DragCloseDrawer open={open} setOpen={setOpen}>
        <div className="mx-auto w-full xsmall:max-w-3xl   small:max-w-2xl text-neutral-400 p-8  small:p-10  ">
          <ContactForm />
        </div>
      </DragCloseDrawer>
    </div>
  )
}

interface Props {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  children?: ReactNode
}

const DragCloseDrawer = ({ open, setOpen, children }: Props) => {
  const [scope, animate] = useAnimate()
  const [drawerRef, { height }] = useMeasure()

  const y = useMotionValue(0)
  const controls = useDragControls()

  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    })

    const yStart = typeof y.get() === "number" ? y.get() : 0

    await animate("#drawer", {
      y: [yStart, height],
    })

    setOpen(false)
  }

  return (
    <>
      {open && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-browny/30"
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e: any) => e.stopPropagation()}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              ease: "easeInOut",
            }}
            className="absolute bottom-0 h-[75vh] w-full  rounded-t-3xl bg-creamy noise "
            style={{ y }}
            drag="y"
            dragControls={controls}
            onDragEnd={() => {
              if (y.get() >= 100) {
                handleClose()
              }
            }}
            dragListener={false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            dragElastic={{
              top: 0,
              bottom: 0.5,
            }}
          >
            <div className="absolute left-0 right-0 top-0 z-10 flex justify-center bg-creamy noise  ">
              <button
                onPointerDown={(e) => {
                  controls.start(e)
                }}
                className="h-2 w-14 cursor-grab touch-none rounded-full bg-lune active:cursor-grabbing"
              ></button>
            </div>
            <div className="relative z-0 h-full overflow-y-scroll  small:overflow-y-hidden p-4 pt-12">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
