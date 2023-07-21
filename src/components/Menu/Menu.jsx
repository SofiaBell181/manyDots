import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap';
import MiniShapes from './MiniShapes';
import { TextPlugin } from 'gsap/all';
import { useAppContext } from '../Animation/Animation';

function Menu({children, addAnimation, index , startGame }) {
    const appContext = useAppContext();
    const shapes = useRef(null);
    gsap.registerPlugin(TextPlugin);
    
    useLayoutEffect(() => {
    const animation = gsap.to(shapes.current, { 
        opacity: 1,
        delay: 8.3, 
        duration: 2
    });

    addAnimation(animation, index);
    
    return () => animation.progress(0).kill();
  }, [addAnimation, index]);

  useEffect(() => {
    if(appContext.isClick === true && appContext.width > 500) {
      const ctx = gsap.context(() => {
        gsap.to(".btnRestart", { 
        text: `reStart`,
        opacity: 1,
        duration: 4,
        repeat:0,
        delay: 0.1,
        ease: 'power1.in',
        });
        gsap.to('.btnGame', {opacity : 0, duration: 0.5});
      }, shapes);

      return () =>  ctx.revert()
    }

    else if (appContext.isClick === true && appContext.width <= 500) {
      const ctx = gsap.context(() => {
        gsap.to(".btnRestart-mb", { 
          text: `reStart`,
          opacity: 1,
          duration: 4,
          repeat:0,
          delay: 0.1,
          ease: 'power1.in',
          });
          gsap.to('.btnGame-mb', {opacity : 0, duration: 0.5})
        }, shapes);

      return () =>  ctx.revert()
    }

    else return;

  }, [appContext.isClick, appContext.width])


  const restartGame = () => {
    appContext.setRestart(!appContext.restart);
    appContext.setCount(0)
  }



  return ( <>
            <div className='block-menu' ref={shapes}>{children}
                <MiniShapes  width={appContext.width}/>
                <button className={appContext.width <= 500 ? 'btnGame-mb' : 'btnGame'} onClick={startGame} onMouseEnter={() => appContext.setMove(true)}  onMouseLeave={() => appContext.setMove(false)}>Start</button>
                <button className={appContext.width <= 500 ? 'btnRestart-mb' : 'btnRestart'} onClick={restartGame} onMouseEnter={() => appContext.setMove(true)}  onMouseLeave={() => appContext.setMove(false)}></button>
            </div>
        </>
    
  )
}

export default Menu
