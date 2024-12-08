
import Image from 'next/image'

export default function AtelierImage() {
  return (
    <div className='!overflow-hidden bg-amber-50 noise h-[75vh] py-10 md:py-20  xl:py-20 2xl:py-32 md:h-[80vh] xl:h-[100vh]'>
    <div className='flex xl:mx-3 items-center justify-center'>
    <Image
                src="https://lunecloud.fra1.digitaloceanspaces.com/Atelier/celine-couture.avif" 
                width={1920}
                height={1080}
                alt="céline couture"
                className="object-cover h-[65vh] w-[85vw] md:h-[65vh] xl:h-[70vh] rounded-[5vh] mix-blend-multiply" 
      />
    </div>
  </div>
  )
}
