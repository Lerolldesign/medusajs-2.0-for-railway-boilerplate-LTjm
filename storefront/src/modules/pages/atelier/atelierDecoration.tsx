
import Image from 'next/image'

export default function AtelierDecoration() {
  return (
    <div className='!overflow-hidden bg-amber-50 noise h-[240vh] md:h-[210vh] xl:h-[180vh] 2xl:h-[190vh] '>

    <div className='flex flex-col xl:flex-row mx-10  md:mx-32 xl:mx-32 relative top-[0vh] md:top-10 xl:top-32'>
       <div className='w-full xl:w-1/3'>
       <Image
                src="https://lunecloud.fra1.digitaloceanspaces.com/Atelier/assise-habillage.avif" 
                width={1920}
                height={1080}
                alt="céline couture"
       className="object-cover xl:h-[80vh] rounded-[5vh] z-30 "
       />
       </div>

       <div className='w-full xl:w-1/3 flex flex-col md:items-center md:justify-center'>
       <h2 className='text-lune font-lune text-[2.35rem] leading-[2.7rem] xl:text-[5.5rem] xl:leading-[6rem] 2xl:text-[8rem] 2xl:leading-[8.5rem] py-20  md:text-center Z-10 relative'>
       La décoration est au cœur de mon métier
       </h2>
       <p className='w-[80vw] xl:w-[35vw] 2xl:w-[25vw] md:text-center leading-6 2xl:leading-7 
           text-[.85rem] xl:leading-6  xl:text-[.95rem] 2xl:text-[.98rem] xl:mt-20 2xl:mt-0'>
           Je suis constamment à la recherche de nouvelles idées et de nouvelles techniques pour satisfaire vos demandes et suis toujours prête à apprendre et à me former pour rester à la pointe des tendances et donner vie à vos projets. Ma clientèle est variée, allant des professionnels (boutiques, restaurants, hôtels, décorateurs d’intérieurs) aux particuliers en quête d’une réalisation originale pour leur intérieur.
       </p>
       <h3 className='text-lune font-lune text-[2rem] leading-[2.5rem] xl:text-[3rem] 2xl:leading-[3.5rem] 2xl:text-[4rem] xl:leading-[4.5rem] py-20 relative md:text-center w-[40vh] xl:w-[60vw] 2xl:w-[50vw]'>
       Alors n’hésitez pas à pousser la porte de mon atelier, je vous accueillerai avec plaisir…
       </h3>
       </div>

       <div className='w-full xl:w-1/3 '>
            <Image
                src="https://lunecloud.fra1.digitaloceanspaces.com/Atelier/bobine-fil.avif" 
                width={1920}
                height={1080}
                alt="céline couture"
                className="object-cover h-[50vh] xl:h-[70vh] rounded-[5vh] mix-blend-multiply Z-30 "
        />
   
       </div>
     </div>
   </div>
  )
}
