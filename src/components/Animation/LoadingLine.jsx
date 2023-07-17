import { gsap } from 'gsap';
import React, { useRef, useLayoutEffect } from 'react'

function LoadingLine({children, addAnimation, index}) {

  const line = useRef();

   useLayoutEffect(() => {
    gsap.set(line.current, {xPercent: -100});

    const animation = gsap.to(line.current, { 
      xPercent: 0, 
      delay: 1, 
      duration: 10
    });

    addAnimation(animation, index);
    
    return () => animation.progress(0).kill();
  }, [addAnimation, index]);

  return (
    <div className='loadingLine' ref={line}>{children}</div> 
  )
}

export default LoadingLine
