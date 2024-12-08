
'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Lenis from '@studio-freight/lenis';
import { useTransform, useScroll, motion } from 'framer-motion';

// Importez vos données depuis le fichier JSON
import imageData from './data/data.json';

interface ImageData {
  src: string;
}

const GalleryParallax: React.FC = () => {
  const [images, setImages] = useState<ImageData[]>([]);

  const gallery = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    // Chargez les données d'images depuis le fichier JSON
    setImages(imageData);

    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section>
      <main>
        <div ref={gallery} className="gallery">
          <Column images={images.slice(0, 3)} y={y} />
          <Column images={images.slice(3, 6)} y={y2} />
          <Column images={images.slice(6, 9)} y={y3} />
          <Column images={images.slice(9, 12)} y={y4} />
        </div>
      </main>
    </section>
  );
};

export default GalleryParallax;

interface ColumnProps {
  images: ImageData[];
  y: any;
}

const Column: React.FC<ColumnProps> = ({ images, y }) => {
  return (
    <motion.div className="column" style={{ y }}>
      {images.map((image, i) => (
        <div key={i} className="imageContainer">
          <Image src={`/images/${image.src}`} alt='image' fill />
        </div>
      ))}
    </motion.div>
  );
};
