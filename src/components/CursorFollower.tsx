import { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import cursorSVG from '../assets/ssshape.svg'; // Update with your SVG path

const CursorFollower: React.FC = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [hoverTarget, setHoverTarget] = useState<string>('');
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 100);
      cursorY.set(e.clientY - 100);
    };
    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest('.hover-text')) {
        setHoverTarget('text');
      } else if (target.closest('.hover-image')) {
        setHoverTarget('image');
      }
    };
    const handleMouseLeave = () => {
      setHoverTarget('');
    };
    window.addEventListener('mousemove', moveCursor);
    const elements = document.querySelectorAll('.hover-text, .hover-image');
    elements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      elements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [cursorX, cursorY]);
  const cursorStyle =
    hoverTarget === 'text' || hoverTarget === 'image'
      ? {
          transform: 'scale(4.5)',
          fill: hoverTarget === 'text' ? 'white' : 'black',
        }
      : {};
  return (
    <motion.div
    className={`cursor-follower ${hoverTarget}`}
    style={{
      translateX: cursorX,
      translateY: cursorY,
      pointerEvents: 'none',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 10,
      transition:
        'background-color 0.2s, transform 0.2s, fill 0.2s, width 0.2s, height 0.2s',
      width: hoverTarget ? '310px' : '200px',
      height: hoverTarget ? '310px' : '200px',
    }}
    >
      <img src={cursorSVG} width="300" height="300" alt="Cursor"  />
    </motion.div>
  );
};
export default CursorFollower;