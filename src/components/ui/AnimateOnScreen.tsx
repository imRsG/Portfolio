import { ReactNode, useEffect } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimateOnScreenProps {
  children: ReactNode;
  direction?: 'left' | 'right' | 'fade' | 'exV1' | 'exV2' | 'exV3'| 'exV4';
}

const AnimateOnScreen: React.FC<AnimateOnScreenProps> = ({ children, direction = 'fade' }) => {
  const controls = useAnimation();
  const [ref, inView, entry] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else if (entry && entry.boundingClientRect.top < window.innerHeight) {
      controls.start('hidden');
    }
  }, [controls, inView, entry]);

  const getVariants = (direction: 'left' | 'right' | 'fade' | 'exV1' | 'exV2' | 'exV3' | 'exV4'): Variants => {
    switch (direction) {
      case 'left':
        return {
          hidden: { opacity: 0, x: -100, transition: { duration: 0.5, ease: 'easeOut' } },
          visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
        };
      case 'right':
        return {
          hidden: { opacity: 0, x: 100, transition: { duration: 0.5, ease: 'easeOut' } },
          visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
        };
      case 'fade':
        return {
          hidden: { opacity: 0, y: 100, transition: { duration: 0.7, ease: 'easeOut' } },
          visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
        };
      case 'exV1':
        return {
          hidden: { scale: 0, rotate: 360, transition: { duration: 2, delay: 0.1, ease: 'backOut' } },
          visible: { scale: 1, rotate: 0, transition: { duration: 2, delay: 0.1, ease: 'backOut' } },
        };
      // exV2: Custom scaling sequence, moving to the right with different easing
      case 'exV2':
        return {
          hidden: { scale: 0, x: 0, rotate: 0 },
          visible: {
            scale: [0, 1, 1, 1, -1, -1], // Scale starts at 0, grows to 1, then flips (-1) over time
            x: [0, 0, 300], // Moves to the right by 300px
            rotate: [0, 0, 180], // Rotates to 180 degrees
            transition: {
              duration: 2,
              times: [0, 0.25, 0.5, 1], // Keyframe control for timing
              ease: ['back.out(1)', 'power1.inOut', 'easeOut'], // Easing for different phases
            },
          },
        };

      // exV3: Animates scaling and rotation with a pause in the middle
      case 'exV3':
        return {
          hidden: { scale: 1, x: 0, rotate: 0 },
          visible: {
            scale: [1, 0, 1], // Shrinks down to 0, then back to 1
            x: [0, 300, 0], // Moves to the right by 300px, then back to the start
            rotate: [0, 180, 360], // Rotates halfway and then completes a full rotation
            transition: {
              duration: 3,
              times: [0, 0.5, 1], // Timing keyframes
              ease: ['back.in', 'power1.inOut', 'easeInOut'], // Different easings for different phases
              delay: 0.5, // Starts after a slight delay
            },
          },
        };

      // exV4: Demonstrates a combination of bounce and spring animations
      // GUIDE:
      // - "spring" easing gives a natural bouncy effect
      // - "stiffness" controls the speed and bounciness of the spring
      // - A larger "bounce" value increases the number of bounces
      // - Increasing "damping" slows down the bouncing effect
      case 'exV4':
        return {
          hidden: { scale: 0, opacity: 0 }, // Starts invisible and shrunk
          visible: {
            scale: [0, 1.2, 1], // Overshoots 1.2, then settles back to 1
            opacity: [0, 0.5, 1], // Fades in over time
            transition: {
              duration: 2, // The full duration of the animation
              times: [0, 0.7, 1], // Keyframe timing for scale and opacity changes
              ease: ['easeIn', 'spring'], // Spring ease provides a natural bounce
              bounce: 0.5, // Controls the amount of bounce
              stiffness: 200, // Higher stiffness results in a faster bounce
              damping: 10, // Higher damping reduces the number of bounces
            },
          },
        };
      default:
        return {};
    }
  };

  const variants = getVariants(direction);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      exit="hidden"
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScreen;