import LocalizedClientLink from "@modules/common/components/localized-client-link"
import AnimatedLink from "@modules/elements/animatedlink"

export default function Restauration() {
  return (
    <div className="flex flex-col w-full h-[50vh] lg:h-[60vh]  justify-center mx-10 md:mx-20">
      <LocalizedClientLink
        href="/prestations/rendez-vous"
        data-testid="nav-store-link"
      >
        <h3 className=" text-[2.2rem] leading-[2.5rem] md:text-[3rem]/[2.8rem] xl:text-7xl 2xl:text-[6rem] font-lune uppercase text-lune w-full md:max-w-[60vw]  lg:max-w-[50vw]">
          Comment faire une restauration ?
        </h3>
      </LocalizedClientLink>
      <AnimatedLink
        className="z-40 relative  md:left-[50vw]   lg:left-[40vw] text-[1.1rem] lg:bottom-[8vh]"
        href="/prestations/rendez-vous"
      >
        en savoir +
      </AnimatedLink>
    </div>
  )
}
