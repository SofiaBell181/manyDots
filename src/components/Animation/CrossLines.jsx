import React, { useRef, useLayoutEffect, useState, useEffect } from 'react'
import {gsap} from 'gsap';


function CrossLines({children, addAnimation, index, isClick, width}) {
    const scope = useRef();
    const sc = useRef();
    const [line, setLine] = useState([]);
    const [display, setDisplay] = useState(false);
    const [display2, setDisplay2] = useState(false);
    const [display3, setDisplay3] = useState(false);
    const [display4, setDisplay4] = useState(false);
    const [display5, setDisplay5] = useState(false);
    const [display6, setDisplay6] = useState(false);
    const [display7, setDisplay7] = useState(false);

    useEffect(() => {
        let arr = [];
        for (let i = 0; i <= 11; i++) {
            arr.push(i)
        }
        setLine(arr)
    },[])

    useLayoutEffect(() => {
      if(width>= 700) {
        let ctx = gsap.context(() => {
            const animate = 
              gsap.to(".block-1", {
                  opacity : 1, x: 40, duration: 1, delay: 1,
                  onComplete : () => setDisplay(true)
              }, 0)
  
              gsap.fromTo(".block-2", 
                  {opacity : 0, x: 47},
                  {opacity : 1, x: 125, duration: 1, 
                  onComplete : () => setDisplay2(true)}
              , 1.8)
  
              gsap.fromTo(".block-3", 
                  {opacity : 0, x: 125},
                  {opacity : 1, x: 203, duration: 1, 
                   onComplete : () => setDisplay3(true)
              }, 2.5)
  
              gsap.fromTo(".block-4", 
                  {opacity : 0, x: 203},
                  {opacity : 1, x: 281, duration: 1, 
                   onComplete : () => setDisplay4(true)
              }, 3)
  
              gsap.fromTo(".block-5", 
                  {opacity : 0, x: 281},
                  {opacity : 1, x: 359, duration: 1, 
                   onComplete : () => setDisplay5(true)
              }, 3.5)
  
               gsap.fromTo(".block-6", 
                  {opacity : 0, x: 359},
                  {opacity : 1, x: 437, duration: 1, 
                   onComplete : () => setDisplay6(true)
              }, 4)
  
               gsap.fromTo(".block-7", 
                  {opacity : 0, x: 437},
                  {opacity : 1, x: 515, duration: 1, 
                   onComplete : () => setDisplay7(true)
              }, 4.5)
            addAnimation(animate, index);
          }, scope); 
          
          return () => ctx.revert(); 
      }

      else {
        let ctx = gsap.context(() => {
            const animate = 
              gsap.to(".block-1", {
                  opacity : 1, x: 40, duration: 1, delay: 1,
                  onComplete : () => setDisplay(true)
              }, 0)
  
              gsap.fromTo(".block-2", 
                  {opacity : 0, x: 40},
                  {opacity : 1, x: 80, duration: 1, 
                  onComplete : () => setDisplay2(true)}
              , 1.8)
  
              gsap.fromTo(".block-3", 
                  {opacity : 0, x: 80},
                  {opacity : 1, x: 120, duration: 1, 
                   onComplete : () => setDisplay3(true)
              }, 2.5)
  
              gsap.fromTo(".block-4", 
                  {opacity : 0, x: 120},
                  {opacity : 1, x: 160, duration: 1, 
                   onComplete : () => setDisplay4(true)
              }, 3)
  
              gsap.fromTo(".block-5", 
                  {opacity : 0, x: 160},
                  {opacity : 1, x: 200, duration: 1, 
                   onComplete : () => setDisplay5(true)
              }, 3.5)
  
               gsap.fromTo(".block-6", 
                  {opacity : 0, x: 200},
                  {opacity : 1, x: 240, duration: 1, 
                   onComplete : () => setDisplay6(true)
              }, 4)
  
               gsap.fromTo(".block-7", 
                  {opacity : 0, x: 240},
                  {opacity : 1, x: 280, duration: 1, 
                   onComplete : () => setDisplay7(true)
              }, 4.5)
            addAnimation(animate, index);
          }, scope); 
          
          return () => ctx.revert(); 
      }
    
    }, [addAnimation, index, width]);

    const tl = useRef();
    useEffect(() => {
        if(isClick === true && width>= 700) {
        const ctx = gsap.context(() => {
        tl.current = gsap
        .timeline()
            .to('.block-7', {
                opacity: 0,
                x: 437,
                duration : 1,
                onUpdate : () => setDisplay7(false)
            }, 1)

            .to('.block-6', {
                opacity: 0,
                x: 359,
                duration : 1,
                onUpdate : () => setDisplay6(false)
            },1.8)

            .to('.block-5', {
                opacity: 0,
                x: 281,
                duration : 1,
                onUpdate : () => setDisplay5(false)
            }, 2.5)

            .to('.block-4', {
                opacity: 0,
                x: 203,
                duration : 1,
                onUpdate : () => setDisplay4(false)
            }, 3)

            .to('.block-3', {
                opacity: 0,
                x: 125,
                duration : 1,
                onUpdate : () => setDisplay3(false)
            }, 3.5)

            .to('.block-2', {
                opacity: 0,
                x: 47,
                duration : 1,
                onUpdate : () => setDisplay2(false)
            }, 4)

            .to('.block-1', {
                opacity: 0,
                x: 0,
                duration : 1,
                onUpdate : () => setDisplay(false)
            }, 4.5);
            
        }, scope); 
          return () => ctx.revert(); 
        }

        else if(isClick === true && width < 700) {
            const ctx = gsap.context(() => {
            tl.current = gsap
            .timeline()
                .to('.block-7', {
                    opacity: 0,
                    x: 280,
                    duration : 1,
                    onUpdate : () => setDisplay7(false)
                }, 1)
    
                .to('.block-6', {
                    opacity: 0,
                    x: 240,
                    duration : 1,
                    onUpdate : () => setDisplay6(false)
                },1.8)
    
                .to('.block-5', {
                    opacity: 0,
                    x: 200,
                    duration : 1,
                    onUpdate : () => setDisplay5(false)
                }, 2.5)
    
                .to('.block-4', {
                    opacity: 0,
                    x: 160,
                    duration : 1,
                    onUpdate : () => setDisplay4(false)
                }, 3)
    
                .to('.block-3', {
                    opacity: 0,
                    x: 120,
                   duration : 1,
                    onUpdate : () => setDisplay3(false)
                }, 3.5)
    
                .to('.block-2', {
                    opacity: 0,
                    x: 80,
                    duration : 1,
                    onUpdate : () => setDisplay2(false)
                }, 4)
    
                .to('.block-1', {
                    opacity: 0,
                    x: 40,
                    duration : 1,
                    onUpdate : () => setDisplay(false)
                }, 4.5);
                
            }, scope); 
              return () => ctx.revert(); 
            }
    }, [isClick, width])


  return (
          <div className='crossLines' ref={scope}>{children}
            <div className='block-crossLines block-1 opacity' ref={sc}>
                {line.map(item => (
                    <div className={(display === true) ? 'crossLine rotate' : 'crossLine notRotate'} key={item}>
                        <span></span>
                    </div>
                ))}
            </div>

            <div className='block-crossLines block-2 opacity'>
                {line.map(item => (
                    <div className={(display2 === true) ? 'crossLine rotate' : 'crossLine notRotate'} key={item}>
                        <span></span>
                    </div>
                ))}

            </div>

            <div className='block-crossLines block-3 opacity'>
                {line.map(item => (
                    <div className={(display3 === true) ? 'crossLine rotate' : 'crossLine notRotate'} key={item}>
                        <span></span>
                    </div>
                ))}
            </div>

            <div className='block-crossLines block-4 opacity'>
                {line.map(item => (
                    <div className={(display4 === true) ? 'crossLine rotate' : 'crossLine notRotate'} key={item}>
                        <span></span>
                    </div>
                ))}
            </div>

            <div className='block-crossLines block-5 opacity'>
                    {line.map(item => (
                    <div className={(display5 === true) ? 'crossLine rotate' : 'crossLine notRotate'} key={item}>
                        <span></span>
                    </div>
                ))}
            </div>

            <div className='block-crossLines block-6 opacity'>
                    {line.map(item => (
                    <div className={(display6 === true) ? 'crossLine rotate' : 'crossLine notRotate'} key={item}>
                        <span></span>
                    </div>
                ))}
            </div>

            <div className='block-crossLines block-7 opacity'>
                    {line.map(item => (
                    <div className={(display7 === true) ? 'crossLine rotate' : 'crossLine notRotate'} key={item}>
                        <span></span>
                    </div>
                ))} 
            </div>
          </div> 
  )
}

export default CrossLines
