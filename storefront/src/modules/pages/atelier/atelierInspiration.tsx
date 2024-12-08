import Image from 'next/image'

export default function AtelierInspiration() {
  return (
    <div className='!overflow-hidden bg-amber-50 noise md:py-5 h-[190vh] md:h-[100vh] xl:h-[110vh] 2xl:h-[150vh] '>
   
    <div className='relative flex flex-col md:flex-row h-[120vh] md:mt-[10vh] xl:mt-1 xl:mx-20 2xl:mx-32'>
      <div className='w-1/2'>
        <h2 className='text-lune font-lune text-[2.2rem] leading-[2.7rem] px-5 py-20 ml-5 
        xl:ml-0 xl:text-[2.5rem] xl:leading-[3rem] 2xl:text-[4rem] 2xl:leading-[4.5rem]  xl:py-20 xl:px-10 relative w-[95vw] md:w-[50vw] xl:w-[40vw]'>
        Un atelier est un lieu où le savoir-faire artisanal et l’inspiration se rencontrent pour créer des pièces originales et de qualité
        </h2>
        <p className='w-[80vw] md:w-[40vw] xl:w-[30vw] mx-10 xl:mx-32 leading-6 2xl:leading-7 
          text-[.85rem] xl:leading-6  xl:text-[.95rem] 2xl:text-[.98rem]'>
         Dans mon atelier, je vous propose mes compétences allant de la confection d’abat-jours à la réalisation de décors textiles ou encore la réfection de vos sièges. Chaque étape de la fabrication est réalisée avec soin, de la couture minutieuse à la sélection des matières premières. J’utilise des outils spécifiques pour réaliser mon travail avec précision. J’aime manipuler les tissus délicats et les matériaux nobles pour obtenir un résultat impeccable. Chaque pièce est unique et reflète la valeur du travail artisanal.
          </p>
       </div>
      <div className='relative w-full xl:w-1/2 pt-20 md:py-20 px-10 right-0'>
                <Image
                src="https://lunecloud.fra1.digitaloceanspaces.com/Atelier/celine-rondot-machine.avif" 
                width={1920}
                height={1080}
                alt="céline couture machine"
                className="object-cover h-[60vh] md:h-[60vh]  xl:h-[80vh] rounded-[5vh] mix-blend-multiply"
      />
      </div>
    </div>
  </div>
  )
}
