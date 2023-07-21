import { useAnimate } from 'framer-motion';
import React, { useEffect } from 'react'
import { useAppContext } from '../Animation/Animation';

function MiniShapes() {
  const appContext = useAppContext();
  const [scope, animate] = useAnimate();

  useEffect(() => {
   if (appContext.width < 700) {
    animate('.left', appContext.isClick ? {rotate : 360, x: -40} : {rotate : 0}, { duration: 10 });
    animate('.right', appContext.isClick ? {rotate : 360, x: 40} : {rotate : 0}, { duration: 10 });
   }

   else {
    animate('.left', appContext.isClick ? {rotate : 360, x: -50} : {rotate : 0}, { duration: 10 });
    animate('.right', appContext.isClick ? {rotate : 360, x: 50} : {rotate : 0}, { duration: 10 });
   }
  }, [appContext.isClick, animate, appContext.width])

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
