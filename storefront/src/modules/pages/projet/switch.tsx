import Button from "@modules/elements/button"

export default function Switch() {
  return (
    <div className="flex w-full relative md:bottom-32  items-center justify-center ">
      <div className="max-w-lg mx-auto flex flex-col justify-center items-center gap-4 sm:flex-row md:mt-8 lg:mt-10 py-10">
        <Button href="/projets" variant="primary">
          Tous les projets
        </Button>
      </div>
    </div>
  )
}
