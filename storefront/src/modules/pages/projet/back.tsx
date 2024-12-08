import AnimatedLink from "@modules/elements/animatedlink"
//import Button from "@modules/elements/button"

export default function Back() {
  return (
    <div className="bg-creamy noise flex flex-col items-center justify-center w-full h-[30vh] py-5">
      <h4 className="font-lune text-neutral-500 text-[1.8rem] md:text-[2rem]/[1.8rem] lg:text-[3rem]">
        Tous les projets
      </h4>
      {/**   <Button href="/projets" variant="primary">
        Revenir
      </Button>*/}

      <AnimatedLink
        className="z-40 relative  md:left-[10vw]   lg:left-[10vw] text-[.9rem] lg:text-[1.1rem] "
        href="/prestations/rendez-vous"
      >
        Revenir +
      </AnimatedLink>
    </div>
  )
}
