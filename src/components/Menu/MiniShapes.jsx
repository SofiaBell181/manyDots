import { useAnimate } from 'framer-motion';
import React, { useEffect } from 'react'

function MiniShapes({isClick, width, setWidth}) {

  const [scope, animate] = useAnimate();

  useEffect(() => {
   if (width < 700) {
    animate('.left', isClick ? {rotate : 360, x: -40} : {rotate : 0}, { duration: 10 });
    animate('.right', isClick ? {rotate : 360, x: 40} : {rotate : 0}, { duration: 10 });
   }

   else {
    animate('.left', isClick ? {rotate : 360, x: -50} : {rotate : 0}, { duration: 10 });
    animate('.right', isClick ? {rotate : 360, x: 50} : {rotate : 0}, { duration: 10 });
   }
  }, [isClick, animate, width])

  return (
    <div className='block-shapes' ref={scope}>
        <span className='shape-square left'></span>
        <span className='shape-triangle left'></span>
        <span className='shape-circle left'></span>
        <span className='shape-square-orange right'></span>
        <span className='shape-triangle-pink right'></span>
        <span className='shape-circle-purple right'></span>
    </div>
  )
}

export default MiniShapes
