import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';


interface PreloaderProps {
  videoSrc: string;
  displayTime?: number; // Duration for which the video is displayed before animating out (in seconds)
  animationDuration?: number; // Duration of the animation to remove the preloader (in seconds)
}

const Preloader: React.FC<PreloaderProps> = ({
  videoSrc,
  displayTime = 3,
  animationDuration = 1,
}) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      delay: displayTime,
      onComplete: () => {
        // Optional: After animation is complete, you could remove the preloader from the DOM
        if (preloaderRef.current) {
          preloaderRef.current.style.display = 'none';
        }
      },
    });

    // Add the fade out animation to the timeline
    tl.to(preloaderRef.current, {
      duration: animationDuration,
      opacity: 0,
      y: -100,
      ease: 'power2.out',
    });
  }, [displayTime, animationDuration]);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay
        muted
        loop
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Preloader;
