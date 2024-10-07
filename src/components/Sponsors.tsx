// import { useState } from "react";
// import { CircleCheckBig } from "lucide-react";
// import { motion } from "framer-motion";
// import { gsap } from "gsap";
// import img1 from '@/assets/1.jpg'
// import img2 from '@/assets/2.jpg'
// import img3 from '@/assets/3.jpg'
// import img4 from '@/assets/4.jpg'
// import img5 from '@/assets/5.jpg'
// import img6 from '@/assets/6.jpg'
// import img7 from '@/assets/7.jpg'

// interface SponsorProps {
//   icon: JSX.Element;
//   name: string;
//   backgroundImage?: string; // Optional background image
// }

// const sponsors: SponsorProps[] = [
//   {
//     icon: <CircleCheckBig size={30} />,
//     name: "React & Next.js: For building interactive UIs and server-side rendering.",
//     backgroundImage: img1, // Example background image
//   },
//   {
//     icon: <CircleCheckBig size={30} />,
//     name: "React-Three-Fiber & Drei: 3D graphics in React (React Three Fiber).",
//     backgroundImage: img2,
//   },
//   {
//     icon: <CircleCheckBig size={30} />,
//     name: "GSAP & Framer Motion: Animation libraries for web interactions.",
//     backgroundImage: img3,
//   },
//   {
//     icon: <CircleCheckBig size={30} />,
//     name: "HTML, CSS, JavaScript: Core web development languages.",
//     backgroundImage:img4,
//   },
//   {
//     icon: <CircleCheckBig size={30} />,
//     name: "After Effects & Premiere Pro: Video editing and motion graphics.",
//     backgroundImage: img5,
//   },
//   {
//     icon: <CircleCheckBig size={30} />,
//     name: "Problem Solving & Communication: Critical thinking and collaboration.",
//     backgroundImage: img6,
//   },
//   {
//     icon: <CircleCheckBig size={30} />,
//     name: "ChatGPT & GitHub: AI integration and version control.",
//     backgroundImage: img7,
//   },
// ];

// export const Sponsors = () => {
//   const [bgImage, setBgImage] = useState<string>("");

//   const handleMouseEnter = (backgroundImage?: string) => {
//     // Change background only if backgroundImage exists
//     if (backgroundImage) {
//       gsap.to("#sponsors", {
//         backgroundImage: `url(${backgroundImage})`,
//         duration:0.5, 
//         ease: "none", 
//         filter: "blur(8px) brightness(0.7))",
//         borderRadius: "20px",                // Adding border radius
//         boxShadow: "14px 4px 22px 0px rgba(255,255,255,1);",  // Adding box shadow
//       });
//     }
//   };

//   const handleMouseLeave = () => {
//     // Reset the background to none when not hovering
//     gsap.to("#sponsors", {
//       backgroundImage: "none",
//       duration: 0.5,
//       ease: "power2.out",
//       filter: "none",
//       borderRadius: "0px",                // Adding border radius
//       boxShadow: "none",  // Adding box shadow
//     });
//   };

//   return (
//     <section
//       id="sponsors"
//       className="container pt-24 sm:py-32 hover-text bg-cover bg-center transition-all duration-500 ease-in-out"
//       style={{ backgroundImage: bgImage || "none" }}
//     >
//       <h2 className="text-center text-lg lg:text-5xl font-bold mb-14 text-primary">
//         Skill
//       </h2>
//       <div className="flex flex-wrap flex-col justify-center items-center gap-8 md:gap-10">
//         {sponsors.map(({ icon, name, backgroundImage }: SponsorProps) => (
//           <motion.div
//             key={name}
//             className="flex items-center gap-1 text-muted-foreground/60 text-white/70 cursor-pointer "
//             onMouseEnter={() => handleMouseEnter(backgroundImage)}
//             onMouseLeave={handleMouseLeave}
//             whileHover={{ scale: 1.1 }} // Hover effect with slight scaling
//           >
//             <span>{icon}</span>
//             <h3 className="text-xl ms-2 font-bold">{name}</h3>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

import React, { useRef, useState } from 'react';
import { CircleCheckBig } from 'lucide-react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import AnimateOnScreen from './ui/AnimateOnScreen';
import styled from 'styled-components';
import img1 from '@/assets/1.jpg';
import img2 from '@/assets/2.jpg';
import img3 from '@/assets/3.jpg';
import img4 from '@/assets/4.jpg';
import img5 from '@/assets/5.jpg';
import img6 from '@/assets/6.jpg';
import img7 from '@/assets/7.jpg';

interface SponsorProps {
  icon: JSX.Element;
  name: string;
  backgroundImage?: string;
}

const sponsors: SponsorProps[] = [
  {
    icon: <CircleCheckBig size={30} />,
    name: 'React & Next.js: For building interactive UIs and server-side rendering.',
    backgroundImage: img2,
  },
  {
    icon: <CircleCheckBig size={30} />,
    name: 'React-Three-Fiber & Drei: 3D graphics in React (React Three Fiber).',
    backgroundImage: img4,
  },
  {
    icon: <CircleCheckBig size={30} />,
    name: 'GSAP & Framer Motion: Animation libraries for web interactions.',
    backgroundImage: img3,
  },
  {
    icon: <CircleCheckBig size={30} />,
    name: 'HTML, CSS, JavaScript: Core web development languages.',
    backgroundImage: img1,
  },
  {
    icon: <CircleCheckBig size={30} />,
    name: 'After Effects & Premiere Pro: Video editing and motion graphics.',
    backgroundImage: img5,
  },
  {
    icon: <CircleCheckBig size={30} />,
    name: 'Problem Solving & Communication: Critical thinking and collaboration.',
    backgroundImage: img6,
  },
  {
    icon: <CircleCheckBig size={30} />,
    name: 'ChatGPT & GitHub: AI integration and version control.',
    backgroundImage: img7,
  },
];

const ImageWrapper = styled.div<{ isVisible: boolean }>`
  position: absolute;
  pointer-events: none;
  width: 700px;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
  opacity: ${(props) => (props.isVisible ? 1 : 0)}; // This is used in styled-components, so it's fine.
  transition: opacity 0.3s ease-in-out;
  z-index: 100;
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const ImageInner = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Sponsors: React.FC = () => {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const imageWrapperRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = (backgroundImage?: string) => {
    if (backgroundImage) setHoveredImage(backgroundImage);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (imageWrapperRef.current) {
      const { clientX, clientY } = e;
      const offsetX = 320;
      const offsetY = 920;

      gsap.to(imageWrapperRef.current, {
        x: clientX - offsetX,
        y: clientY - offsetY,
        ease: 'power3.out',
        duration: 0.5,
      });
    }
  };

  return (
    <AnimateOnScreen direction='fade'>
     <section
      id="sponsors"
      className="container pt-24 sm:py-32 hover-text bg-cover bg-center transition-all duration-500 ease-in-out"
      onMouseMove={handleMouseMove}
      style={{ backgroundImage: 'none' }}
    >
      <h2 className="text-center text-6xl lg:text-5xl font-bold mb-20 text-primary">
        Skill
      </h2>
      <div className="flex flex-wrap flex-col justify-center items-center gap-8 md:gap-10">
        {sponsors.map(({ icon, name, backgroundImage }) => (
          <motion.div
            key={name}
            className="flex items-center gap-1 text-muted-foreground cursor-pointer h-10"
            onMouseEnter={() => handleMouseEnter(backgroundImage)}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.1 }}
          >
            <span>{icon}</span>
            <h3 className="text-xl ms-2 font-bold">{name}</h3>
          </motion.div>
        ))}
      </div>

      {/* Image wrapper that appears on hover */}
      {/* Destructure isVisible here */}
      <ImageWrapper ref={imageWrapperRef} isVisible={!!hoveredImage}>
        {hoveredImage && <ImageInner src={hoveredImage} alt="Sponsor Image" />}
      </ImageWrapper>
    </section>
    </AnimateOnScreen>
  );
};
