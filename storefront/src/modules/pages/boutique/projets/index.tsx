'use client';
import React, { useState, useLayoutEffect, useRef } from 'react'
import styles from './style.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import Link from 'next/link'
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const projects = [
    {
        title: "Coussins",
        src: "https://lunecloud.fra1.digitaloceanspaces.com/Boutique/fleursvintage.avif",
        link:"/categories/coussins"
    },
    {
        title: "Abat-jours",
        src: "https://lunecloud.fra1.digitaloceanspaces.com/Boutique/fleursvintage.avif",
        link:"/categories/abat-jours"
    },
    {
        title: "Siéges",
        src: "https://lunecloud.fra1.digitaloceanspaces.com/Boutique/fleursvintage.avif",
        link:"/categories/sieges"
    },
 
]

export default function ProjectBoutique() {

    const [selectedProject, setSelectedProject] = useState(0);
    const container = useRef(null);
    const imageContainer = useRef(null);

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger: imageContainer.current,
            pin: true,
            start: "top-=100px",
            end: document.body.offsetHeight - window.innerHeight - 50,
        })
    }, [])

    return (
       
        <div ref={container} className={styles.projects}>
            <div className={styles.projectDescription}>
                <div ref={imageContainer} className={styles.imageContainer}>
                    <Image 
                        src={`/images/${projects[selectedProject].src}`}
                        fill={true}
                        alt="project image"
                        priority={true}
                    />
                </div>
                <div className={styles.column}>
                    <p className='font-lune text-lune text-[1.85vw] font-semibold'>
                        J&apos;ai à cœur de travailler avec des éditeurs de tissus réputés afin de vous proposer
                        les meilleurs matériaux et concevoir des produits de qualité avec un savoir-faire artisanal.
                    </p>
                </div>
                <div className={styles.column}>
                    <p className='!text-browny'>
                    La boutique vous propose divers accessoires textiles qui, je l&apos;espère, sauront ravir  votre intérieur ou votre extérieur. Mais bien au-delà de ces quelques réalisations, je suis à votre disposition afin de travailler avec vous à la réalisation de vos projets de décors sur mesure ou de restauration.
                    </p>
                </div>
            </div>
            <div className='h-[100vh]'>
            <div className={styles.projectList}>
                {
                    projects.map( (project, index) => {
                        return <div key={index} onMouseOver={() => {setSelectedProject(index)}} className={styles.projectEl}>
                            <div className='flex flex-col'>
                            <h2 className='font-lune text-lune'>{project.title}</h2>
                            <Link className='pointer hover:text-browny text-[1rem] py-5 relative right-2' href={project.link}>
                                voir la catégorie
                             
                            </Link>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
    )
}