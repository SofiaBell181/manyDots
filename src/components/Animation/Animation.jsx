import React, { useLayoutEffect, useCallback, useState } from 'react'
import {gsap} from 'gsap';
import LoadingLine from './LoadingLine';
import CrossLines from './CrossLines';
import Shapes from './Shapes';
import Menu from '../Menu/Menu';

function Animation() {

    const [isClick, setIsClick] = useState(false);
    const [isMove, setMove] = useState(false);
    const [restart, setRestart] = useState(false);
    const [count, setCount] = useState(0);
    const [disabled, setDisabled] = useState(true);
    const [width, setWidth] = useState(null);
    const [tl, setTl] = useState();

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
        const tl = gsap.timeline();
        setTl(tl);
        });
        return () => ctx.revert();
    }, [])
    
    const addAnimation = useCallback((animation, index) => {  
        tl && tl.add(animation, index * 0.1);
    }, [tl]);

  const startGame = (e) => {
    e.preventDefault();
    setIsClick(true);
    setDisabled(false);
  }


    
  return (
        <>
            <div className='block-animation'>
                <Menu addAnimation={addAnimation} startGame={startGame} setMove={setMove} isClick={isClick} setIsClick={setIsClick} index={3} restart={restart} setRestart={setRestart} setCount={setCount} disabled={disabled} setDisabled={setDisabled}  width={width} />
                <LoadingLine addAnimation={addAnimation} isClick={isClick} index={0}/> 
                <Shapes addAnimation={addAnimation} startGame={startGame} isMove={isMove} setIsClick={setIsClick} isClick={isClick} index={2} restart={restart} setRestart={setRestart} count={count} setCount={setCount} disabled={disabled} setDisabled={setDisabled} width={width} setWidth={setWidth}>
                    <CrossLines addAnimation={addAnimation}  width={width} isClick={isClick} tl={tl} index={1}/>
                </Shapes>
            </div>
        </>
  )
}

export default Animation
