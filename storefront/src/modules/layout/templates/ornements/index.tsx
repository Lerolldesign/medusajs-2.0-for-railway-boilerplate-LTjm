'use client';
import Image from "next/image";

export default function Ornements () {
  return (
    <div className='w-screen absolute z-50'>
        <div className='flex w-screen '>
        <div className='w-2/3'>
        <Image
        className="fixed left-2 top-2 w-[95px] md:left-5 md:top-5 md:w-[115px]" 
        src="https://lunecloud.fra1.digitaloceanspaces.com/ornement_angle_top.png" 
        height="100" 
        width="100" 
        alt="Logo" 
        />
        </div>
        <div className='w-2/3'>
        <Image
        className="fixed top-2 right-2 w-[95px]  md:top-5 md:right-5 md:w-[115px] rotate-180" 
        src="https://lunecloud.fra1.digitaloceanspaces.com/ornement_angle_bottom.png" 
       height="100" 
        width="100" 
       alt="Logo" 
        />
        </div>
        </div>

        <div className='flex w-full'>
          <div className='w-1/3'>
        <Image
        className="fixed w-[95px] left-2 bottom-3 md:left-5 md:bottom-5 md:w-[115px]" 
        src="https://lunecloud.fra1.digitaloceanspaces.com/ornement_angle_bottom.png" 
        height="100" 
        width="100" 
        alt="Logo" 
        />
          </div>
          <div className='w-full z-20 fixed bottom-5 items-center text-center justify-center'>
            <h1 className='font-lune text-lune text-2xl md:text-3xl lg:text-4xl uppercase'>La lune curieuse
            </h1>
          </div>
          <div className='fixed bottom-2 right-2 md:bottom-5 md:right-5'>
          <Image
          className="right-0 w-[95px] md:w-[115px] rotate-180" 
          src="https://lunecloud.fra1.digitaloceanspaces.com/ornement_angle_top.png" 
          height="100" 
          width="100" 
          alt="Logo" 
          />
          </div>
        </div>
 
      </div>
      
  )
}

