import React, { useState, useEffect, useRef, forwardRef } from 'react';

const AnimatedText = forwardRef(({ textToAnimate, as = 'span', className }, ref) => {
  const [displayedText, setDisplayedText] = useState('');
  const iterationRef = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
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


    if (ref.current) {
        // Use requestAnimationFrame to ensure the element is rendered
        animationFrameId = requestAnimationFrame(() => {
            if (ref.current) { // Double check inside the animation frame callback
                animateText();
                ref.current.addEventListener('mouseover', handleMouseOver);
            }
        });
    }


    return () => {
        clearInterval(intervalRef.current);
        if(ref.current){
            ref.current.removeEventListener('mouseover', handleMouseOver);
        }
        cancelAnimationFrame(animationFrameId);
    };
  }, [textToAnimate]);

  const Element = as;

  return (
    <Element ref={ref} className={className}>
      {displayedText}
    </Element>
  );
});

export default AnimatedText;