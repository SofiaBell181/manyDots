import React, { useLayoutEffect, useCallback, useState, createContext, useContext } from 'react'
import {gsap} from 'gsap';
import LoadingLine from './LoadingLine';
import CrossLines from './CrossLines';
import Shapes from './Shapes';
import Menu from '../Menu/Menu';


 const AppContext = createContext(
    {
        isClick : false,
        setIsClick: () => {},
        isMove : false,
        setMove : () => {},
        restart : false,
        setRestart : () => {},
        count : null,
        setCount : () => {},
        disabled : true,
        setDisabled : () => {},
        width : null,
        setWidth : () => {},
    }
    )

export const useAppContext = () => useContext(AppContext)

function Animation() {

    const Provider = AppContext.Provider;

    const [isClick, setIsClick] = useState(false);
    const [isMove, setMove] = useState(false);
    const [restart, setRestart] = useState(false);
    const [count, setCount] = useState(null);
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
    <Provider value={{
        isClick, setIsClick, 
        isMove, setMove,
        restart, setRestart,
        count, setCount,
        disabled, setDisabled,
        width, setWidth
    }}>
        <div className='block-animation'>
            <Menu addAnimation={addAnimation} startGame={startGame} index={3} />
            <LoadingLine addAnimation={addAnimation} index={0}/> 
            <Shapes addAnimation={addAnimation} startGame={startGame} index={2}>
            <CrossLines addAnimation={addAnimation}  tl={tl} index={1}/>
            </Shapes>
        </div>
    </Provider>
        
            
       
  )
}

export default Animation
