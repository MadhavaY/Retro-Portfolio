import React, { useState, useEffect, useRef, forwardRef } from 'react';

const AnimatedText = forwardRef(({ textToAnimate, as = 'span', className }, ref) => {
  const [displayedText, setDisplayedText] = useState('');
  const iterationRef = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const element = ref?.current;
    if (!element) return;

    let animationFrameId;

    const animateText = () => {
      clearInterval(intervalRef.current);
      iterationRef.current = 0;

      intervalRef.current = setInterval(() => {
        const newText = textToAnimate.split("").map((_, index) => {
          if (index < Math.floor(iterationRef.current)) {
            return textToAnimate[index];
          }
          return "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(Math.random() * 26)];
        }).join("");

        setDisplayedText(newText);

        if (iterationRef.current >= textToAnimate.length) {
          clearInterval(intervalRef.current);
        }

        iterationRef.current += 1 / 3;
      }, 30);
    };

    const handleMouseOver = () => {
      animateText();
    };


        animationFrameId = requestAnimationFrame(() => {
                animateText();
                element.addEventListener('mouseover', handleMouseOver);
        });


    return () => {
        clearInterval(intervalRef.current);
        element.removeEventListener("mouseover",handleMouseOver)
        cancelAnimationFrame(animationFrameId);
    };
  }, [textToAnimate, ref]);

  const Element = as;

  return (
    <Element ref={ref} className={className}>
      {displayedText}
    </Element>
  );
});

export default AnimatedText;