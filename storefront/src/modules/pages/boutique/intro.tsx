
'use client';
import React, { useLayoutEffect, useRef } from 'react'
import styles from './style.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function IntroBoutique() {

    const background = useRef(null);
    const introImage = useRef(null);

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: true,
                start: "top",
                end: "+=500px",
             
            },
        })

        timeline
            .from(background.current, {clipPath: `inset(15%)`})
            .to(introImage.current, {height: "90vh"}, 0)
    }, [])

    return (
        <div className={styles.homeHeader}>
            <div className={styles.backgroundImage} ref={background}>
                <Image 
                    src={'https://lunecloud.fra1.digitaloceanspaces.com/Boutique/fleursvintage.avif'}
                    className='hidden'
                    fill={true}
                    alt="background image"
                    priority={true}
                
                />
            </div>
            <div className={styles.intro}>
                    <div ref={introImage} data-scroll data-scroll-speed="0.3" className={styles.introImage}>
                        <Image
                            src={'https://lunecloud.fra1.digitaloceanspaces.com/Boutique/fleursvintage.avif'}
                            alt="intro image"
                            fill={true} 
                            priority={true}
                        />
                    </div>
                    <h1 className='text-lune font-lune absolute bottom-[2vh] uppercase z-40 text-[10vw] md:text-[7.5vw]' data-scroll data-scroll-speed="0.7">La Boutique</h1>
             </div>
        </div>
    )
}