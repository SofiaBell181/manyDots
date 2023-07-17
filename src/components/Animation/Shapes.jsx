import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import {gsap} from 'gsap';
import {motion, useAnimate} from 'framer-motion'
import CustomEase from "gsap/CustomEase";

function useMenuAnimation(isMove) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate('.triangle', isMove ? {rotate : 90} : {rotate : 0}, { duration: 1 });
    animate('.triangleLine', isMove ? {rotate : 90} : {rotate : 0}, { duration: 1 });
  }, [isMove, animate]);

  useEffect(() => {
    animate('.triangleBig',{opacity: 1, x: -140}, {duration: 1.5, delay: 4.3 });
    animate('.square-blue', {opacity: 1, scale: 1}, {from:0, duration:  1.7, delay: 3 });
    animate('.circlePink', {opacity: 1, scale: 1.2}, {from:0, duration:  1.7, delay: 3 }); 
  }, [animate])

  return scope;
}

function Shapes({isMove, startGame, isClick, restart, count, setCount, disabled, children, width, setWidth}) {
  const container = useRef(null);
  const [clickedShape, setClickedShape] = useState('');
  const scope = useMenuAnimation(isMove);
  const tl = useRef();
  gsap.registerPlugin(CustomEase);

	useEffect(() => {
		const handeResize = () => {
			setWidth(window.innerWidth);
		}
		handeResize();
		window.addEventListener('resize', handeResize);

		return () => {
			window.removeEventListener('resize', handeResize)
		}
	}, [setWidth])

    useLayoutEffect(() => {
        if(width>= 900 && (restart === true || isClick === true)) { 
        const ctx = gsap.context(() => {
        tl.current = gsap
        .timeline()
          .to('.square-blue',  {xPercent:90, opacity : 0.7, duration: 1.5}, 1)
          .to('.circlePink', { xPercent:-15, top:'45%', opacity : 0.7, duration: 1.5}, 1)
          .to('.btnGame-triangle', {xPercent:-15, top: '20%', opacity : 0.7, duration: 1.5}, 1)
          .to('.circle',  {xPercent:-125, top:'35%',  opacity : 0.7, duration: 1.5}, 1)
          .to('.square',  {xPercent: 160, bottom:'5%', opacity : 0.7, duration: 1.5}, 1)
          .to('.triangleBig', {xPercent: -80, top:'42%', opacity : 0.7, duration: 1.5}, 1)
          .to('.square-blue',  {xPercent:180, top:"50%", duration: 1.5}, 2.7)
          .to('.circlePink',  {xPercent:-110, top:'5%',  duration: 1.5}, 2.7)
          .to('.btnGame-triangle',  {xPercent:190, top: '12%', duration: 1.5}, 2.7)
          .to('.triangleBig',  {xPercent: -150, top:'60%',  duration: 1.5}, 2.7)
          .to('.square',  {bottom:'60%', xPercent: 180,  duration: 1.5}, 2.7)
          .to('.circle',  {xPercent:-125, top:'45%',  duration: 1.5}, 2.7)
          .to('.square-blue',  {opacity : 0, duration: 0.5}, 4.2)
          .to('.circlePink',   {opacity : 0, duration: 0.5}, 4.2)
          .to('.btnGame-triangle',   {opacity : 0, duration: 0.5}, 4.2)
          .to('.triangleBig',  {opacity : 0, duration: 0.5}, 4.2)
          .to('.square',  {opacity : 0, duration: 0.5}, 4.2)
          .to('.circle',  {opacity : 0, duration: 0.5}, 4.2)
        }, container); 
          return () => ctx.revert(); 
        }

        else if (((width < 900 && width > 600) && (restart === true || isClick === true))) { 
          const ctx = gsap.context(() => {
          tl.current = gsap
          .timeline()
            .to('.square-blue',  {xPercent:80, opacity : 0.7, duration: 1.5}, 1)
            .to('.circlePink', { xPercent:-25, top:'40%', opacity : 0.7, duration: 1.5}, 1)
            .to('.btnGame-triangle', {xPercent:-30, top: '15%', opacity : 0.7, duration: 1.5}, 1)
            .to('.circle',  {xPercent:-175, top:'30%',  opacity : 0.7, duration: 1.5}, 1)
            .to('.square',  {xPercent: 175, bottom:'15%', opacity : 0.7, duration: 1.5}, 1)
            .to('.triangleBig', {xPercent: -70, top:'35%', opacity : 0.7, duration: 1.5}, 1)
            .to('.square-blue',  {xPercent:160, top:"50%", duration: 1.5}, 2.7)
            .to('.circlePink',  {xPercent:-80, top:'5%',  duration: 1.5}, 2.7)
            .to('.btnGame-triangle',  {xPercent:190, top: '12%', duration: 1.5}, 2.7)
            .to('.triangleBig',  {xPercent: -100, top:'60%',  duration: 1.5}, 2.7)
            .to('.square',  {bottom:'60%', xPercent: 230,  duration: 1.5}, 2.7)
            .to('.circle',  {xPercent:-185, top:'40%',  duration: 1.5}, 2.7)
            .to('.square-blue',  {opacity : 0, duration: 0.5}, 4.2)
            .to('.circlePink',   {opacity : 0, duration: 0.5}, 4.2)
            .to('.btnGame-triangle',   {opacity : 0, duration: 0.5}, 4.2)
            .to('.triangleBig',  {opacity : 0, duration: 0.5}, 4.2)
            .to('.square',  {opacity : 0, duration: 0.5}, 4.2)
            .to('.circle',  {opacity : 0, duration: 0.5}, 4.2)
          }, container); 
  
            return () => ctx.revert(); 
          }

        else if ((width <= 600 && (restart === true || isClick === true))) { 
            const ctx = gsap.context(() => {
            tl.current = gsap
            .timeline()
              .to('.square-blue',  {xPercent:50, opacity : 0.7, duration: 1.5}, 1)
              .to('.circlePink', { xPercent:0, top:'30%', opacity : 0.7, duration: 1.5}, 1)
              .to('.btnGame-triangle', {top: '15%',xPercent:-20, opacity : 0.7, duration: 1.5}, 1)
              .to('.circle',  {xPercent:-100, top:'25%',  opacity : 0.7, duration: 1.5}, 1)
              .to('.square',  {xPercent: 170, bottom:'30%', opacity : 0.7, duration: 1.5}, 1)
              .to('.triangleBig', {xPercent: -20, top:'25%', opacity : 0.7, duration: 1.5}, 1)
              .to('.square-blue',  {xPercent:110, top:"65%", duration: 1.5}, 2.7)
              .to('.circlePink',  {xPercent:-20, top:'5%',  duration: 1.5}, 2.7)
              .to('.btnGame-triangle',  {xPercent:150, top: '0', duration: 1.5}, 2.7)
              .to('.triangleBig',  {xPercent: -40, top:'35%',  duration: 1.5}, 2.7)
              .to('.square',  {bottom:'10%', xPercent: 30,  duration: 1.5}, 2.7)
              .to('.circle',  {xPercent:-25, top:'30%',  duration: 1.5}, 2.7)
              .to('.square-blue',  {opacity : 0, duration: 0.5}, 4.2)
              .to('.circlePink',   {opacity : 0, duration: 0.5}, 4.2)
              .to('.btnGame-triangle',   {opacity : 0, duration: 0.5}, 4.2)
              .to('.triangleBig',  {opacity : 0, duration: 0.5}, 4.2)
              .to('.square',  {opacity : 0, duration: 0.5}, 4.2)
              .to('.circle',  {opacity : 0, duration: 0.5}, 4.2)
            }, container); 
    
              return () => ctx.revert(); 
            }

    }, [isClick, restart, width])

    useLayoutEffect(() => {
      if(restart === true) {
        setClickedShape('');
        const ctx = gsap.context(() => {
        gsap.to('.container-alert', {opacity : 0, duration: .1, zIndex: 0});
      
       }, container) 
        return () => ctx.revert();
      }
    }, [restart, setClickedShape])

    useLayoutEffect(() => {  
      if(isClick === true) {
        const ctx = gsap.context(() => {
            if(count === 1 && clickedShape === 'square-blue') {
            gsap.to('.square-blue',  {opacity : 1, duration: .5});    
            }

            else if(count === 1 && clickedShape !== 'square-blue') {
            gsap.to('.square-blue',  {opacity : 1, delay: .5, duration: .5});    
            gsap.to('.container-alert', {opacity : 1, delay: 1, duration: .5, zIndex: 100});
            }

            else if (count === 2 && clickedShape === 'triangleBig') {
              gsap.to('.triangleBig',  {opacity : 1, duration: .5});
            }

            else if (count === 2 && clickedShape !== 'triangleBig') {
            gsap.to('.triangleBig',  {opacity : 1, delay: .5, duration: .5});    
            gsap.to('.container-alert', {opacity : 1, delay: 1, duration: .5, zIndex: 100}) 
            }

            else if (count === 3 && clickedShape === 'circlePink') {
              gsap.to('.circlePink',  {opacity : 1, duration: .5});
            }

            if(count === 3 && clickedShape !== 'circlePink') {
            gsap.to('.circlePink',  {opacity : 1, delay: .5, duration: .5});    
            gsap.to('.container-alert', {opacity : 1, delay: 1, duration: .5, zIndex: 100}) 
            }

            else if (count === 4 && clickedShape === 'square') {
              gsap.to('.square',  {opacity : 1, duration: .5});
            }

            else if(count === 4 && clickedShape !== 'square') {
            gsap.to('.square',  {opacity : 1, delay: .5, duration: .5});    
            gsap.to('.container-alert', {opacity : 1, delay: 1, duration: .5, zIndex: 100}) 
            }

            else if (count === 5 && clickedShape === 'triangle') {
              gsap.to('.btnGame-triangle',  {opacity : 1, duration: .5});
            }

            else if(count === 5 && clickedShape !== 'triangle') {
            gsap.to('.btnGame-triangle',  {opacity : 1, delay: .5, duration: .5});    
            gsap.to('.container-alert', {opacity : 1, delay: 1, duration: .5, zIndex: 100}) 
            }

            else if (count === 6 && clickedShape === 'circle') {
              gsap.to('.circle',  {opacity : 1, duration: .5});
              gsap.to('.container-alert', {opacity : 1, delay: 1, duration: .5, zIndex: 100}) 
            }

            else if (count === 6 && clickedShape !== 'circle') {
            gsap.to('.circle',  {opacity : 1, delay: .5, duration: .5});    
            gsap.to('.container-alert', {opacity : 1, delay: 1, duration: .5, zIndex: 100}) 
            }

            else if (count > 6) {
              gsap.to('.container-alert', {opacity : 1, delay: 1, duration: .5, zIndex: 100})
            }
           
      }, container) 
     
      return () => ctx.revert();
      }

    }, [count, clickedShape, isClick ])


    const onClickDesc = (e) => {
      console.log(e.target.parentNode.classList[0])
      if(isClick === true) {
        let countUser = count;
         setCount(countUser+1); 
         setClickedShape(e.target.parentNode.classList[0])
    }
      else return;
    }

  const circleVariants = {
    hidden: {
      opacity : 0,
      pathLength : 0,
      fill: 'transparent'
  
    },
    visible : {
      opacity : 1,
      pathLength : 1,
      transition : {
        pathLength: { delay: 2,  duration: 3},
        opacity : {delay: 1,  duration: 0.01},
      }
    },

  }

  const squareVariants = {
    hidden: {
      opacity : 0,
      pathLength : 0
    },
    visible : {
      opacity : 1,
      pathLength : 1,
      transition : {
        pathLength: { delay: 2, duration: 3}
      }
    }
  };

  const lineVariants = {
    hidden: {
      opacity : 0,
    },
    visible : {
      opacity : 1,
      x: -95,
      y: -95,
      transition : {
        opacity : {delay: 6.5,  duration: 0.7},
        x : {delay: 7.2,  duration: 1},
        y : {delay: 7.2,  duration: 1}
      }
    }
  };

  const lineVariantsMobile = {
    hidden: {
      opacity : 0,
    },
    visible : {
      opacity : 1,
      x: -45,
      y: -45,
      transition : {
        opacity : {delay: 6.5,  duration: 0.7},
        x : {delay: 7.2,  duration: 1},
        y : {delay: 7.2,  duration: 1}
      }
    }
  }

  const lineSquare = {
    hidden: {
      opacity : 0,
    },
    visible : {
      opacity : 1,
      x: 80,
      y: -80,
      transition : {
        opacity : {delay: 6.5,  duration: 0.7},
        x : {delay: 7.2,  duration: 1},
        y : {delay: 7.2,  duration: 1}
      }
    }
  }

  const lineSquareMobile = {
    hidden: {
      opacity : 0,
    },
    visible : {
      opacity : 1,
      x: 40,
      y: -40,
      transition : {
        opacity : {delay: 6.5,  duration: 0.7},
        x : {delay: 7.2,  duration: 1},
        y : {delay: 7.2,  duration: 1}
      }
    }
  }

  const lineTriangle = {
    hidden: {
      opacity : 0,
    },
    visible : {
      opacity : 1,
      x: 50,
      y: 45,
      transition : {
        opacity : {delay: 6.5,  duration: 0.7},
        x : {delay: 7.2,  duration: 1},
        y : {delay: 7.2,  duration: 1}
      }
    }
  }

  const lineTriangleMobile = {
    hidden: {
      opacity : 0,
    },
    visible : {
      opacity : 1,
      x: 30,
      y: 15,
      transition : {
        opacity : {delay: 6.5,  duration: 0.7},
        x : {delay: 7.2,  duration: 1},
        y : {delay: 7.2,  duration: 1}
      }
    }
  }

  const hide = {
  x: "0",
  y: "0",
  opacity: 0,
  transition: { duration: 1 },
  transitionEnd: { display: "none" }
}

  return (
    <div className='tl-scope' ref={container} >
   {children}
      <div className='container-shapes' onClick={onClickDesc} ref={scope}  disabled={disabled}  >
      
      <svg className='square-blue shapePoint' 
        width="337"
        height="337"
        viewBox="0 0 450 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M0 50C0 22.3858 22.3858 0 50 0H400C427.614 0 450 22.3858 450 50V400C450 427.614 427.614 450 400 450H50C22.3858 450 0 427.614 0 400V50Z" stroke="white" strokeWidth="1"/>
        <motion.path
            stroke='#476CEF'
            initial= {{
              opacity:0
            }}
            animate={{
              opacity:1,
              fill: '#476CEF'
            }}
            transition={{
              delay: 4.7,
              duration: 1.5
            }}
            d="M0 50C0 22.3858 22.3858 0 50 0H400C427.614 0 450 22.3858 450 50V400C450 427.614 427.614 450 400 450H50C22.3858 450 0 427.614 0 400V50Z"
            />
            <motion.path
            initial= {{
              opacity:0,
            }}
            animate={{
              opacity:1,
              x: [-20, 0],
            }}
            transition={{
              delay: 6.2,
              duration: 1.5
            }}
            d="M0 50C0 22.3858 22.3858 0 50 0H225V450H50C22.3858 450 0 427.614 0 400V50Z" fill="#7347EF"/>
      </svg>

        <svg 
          className='circlePink shapePoint'
          width="300"
          height="300"
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          >
          <motion.circle
          cx="150"
          cy="150"
          r="148"
          stroke="white"
          strokeWidth="1"
          />
           <motion.circle
            cx='150'
            cy='150'
            r='148'
            stroke='#C81E63'
            initial= {{
              opacity:0,
            }}
            animate={{
              opacity:1,
              fill: '#C81E63'
            }}
            transition={{
              delay: 4.7,
              duration: 1.5
            }}
          />
        </svg>

        <div className='btnGame-triangle' onClick={startGame} >
          <svg width="130" height="115"className='triangle'
          viewBox="0 0 130 115" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
                initial={{ opacity: 0, scale:0 }}
                animate={{ opacity: 1, scale: 1}}
                transition={{ duration: 1.5, delay: 4 }}
                d="M64.134 0.500005C64.5189 -0.166661 65.4811 -0.166667 65.866 0.5L129.086 110C129.471 110.667 128.99 111.5 128.22 111.5L1.78015 111.5C1.01035 111.5 0.529221 110.667 0.914121 110L64.134 0.500005Z" stroke="white" strokeWidth="1"
                />
            <motion.path
               initial= {{
                opacity:0,
              }}
              animate={{
                opacity:1,
                fill: '#ED5DE7',
                stroke :'#ED5DE7'
              }}
              transition={{
                delay: 5,
                duration: 1.5
              }}
                d="M64.134 0.500005C64.5189 -0.166661 65.4811 -0.166667 65.866 0.5L129.086 110C129.471 110.667 128.99 111.5 128.22 111.5L1.78015 111.5C1.01035 111.5 0.529221 110.667 0.914121 110L64.134 0.500005Z"
              />
          </svg>
          <motion.svg
            className='triangleLine'
            variants={width < 700 ? lineTriangleMobile : lineTriangle}
            initial='hidden'
            animate={isClick === true ? hide : 'visible'}
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="150"
            viewBox="0 0 150 150"
            fill="none"
            >
            <path d="M78.4641 8L134.756 105.5C136.295 108.167 134.371 111.5 131.292 111.5L18.7083 111.5C15.6291 111.5 13.7046 108.167 15.2442 105.5L71.5359 8C73.0755 5.33333 76.9245 5.33333 78.4641 8Z" stroke="white" strokeWidth="2"/>
            <path d="M21 95H128.5" stroke="white" strokeWidth="2"/>
            <path d="M30.5 78L119 78" stroke="white" strokeWidth="2"/>
          </motion.svg>
        </div>

        <motion.svg 
          initial='hidden'
          className='circle shapePoint'
          animate='visible'
          width='270'
          height='270'
          viewBox='0 0 270 270'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <motion.circle
            cx='135'
            cy='135'
            r='134'
            stroke={isClick === true ? 'transparent': 'white'}
            strokeWidth="1"
            variants={circleVariants}
          />
          <motion.circle
            cx='135'
            cy='135'
            r='134'
            stroke='#731EC8'
            strokeWidth="2"
            fill = '#731EC8'
            initial= {{
              opacity:0
            }}
            animate={ isClick === true ? {
              opacity: 0.7,
            } :
            {
              opacity:1,
            }
            }
            transition={ isClick === true ? {
              delay: 2.5,
              duration: 1.5
            } :
            {
              delay: 5,
              duration: 1.5
            }
            }
          />
      
        </motion.svg>

        <motion.svg
          width="225"
          height="225"
          viewBox="0 0 250 250"
          initial="hidden"
          className='square shapePoint'
          animate="visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
            <motion.path
            d="M0 35C0 15.67 15.67 0 35 0H215C234.33 0 250 15.67 250 35V215C250 234.33 234.33 250 215 250H35C15.67 250 0 234.33 0 215V35Z"
            stroke={isClick === true ? 'transparent': 'white'}
            variants={squareVariants}
            />
            <motion.path
            strokeWidth = '2'
            stroke = "#DD4E2E"
            fill = "#DD4E2E"
            initial= {{
              opacity:0,
            }}
            animate={ isClick === true ? {
              opacity: 0.7,
            } :
            {
              opacity:1,
            }
            }
      
            transition={isClick === true ? {
              delay: 3,
              duration: 2
            } :
            {
              delay: 5,
              duration: 1.5
            }}
            d="M0 35C0 15.67 15.67 0 35 0H215C234.33 0 250 15.67 250 35V215C250 234.33 234.33 250 215 250H35C15.67 250 0 234.33 0 215V35Z"
            />
        </motion.svg>

        <svg 
          className='triangleBig shapePoint'
          width="351"
          height="304"
          viewBox="0 0 390 338"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          >
          <path d="M1.01031 337L195 1L388.99 337H1.01031Z" stroke="#FFFDFD" strokeWidth='1'/>
      
        <motion.path
         stroke = "#EFEF81"
        strokeWidth =  '2'
        initial= {{
              opacity:0,
            }}
            animate={{
              opacity:1,
              fill :"#EFEF81",
      
            }}
            transition={{
              delay: 5.5,
              duration: 1.5
            }}
      
        d="M1.01031 337L195 1L388.99 337H1.01031Z"/>
      
        </svg>

        <motion.svg  
          className='circleLine shapePoint'
          variants={width < 700 ? lineVariantsMobile : lineVariants}
          initial='hidden'
          animate={isClick === true ? hide : 'visible'}
          width="270"
          height="270"
          viewBox="0 0 270 270"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          >
         <circle cx="135" cy="135" r="134" stroke="white" strokeWidth="2"/>
          <path d="M7.32858 94.8857L175.114 262.671" stroke="white" strokeWidth="2"/>
          <line x1="1.47854" y1="126.579" x2="143.421" y2="268.522" stroke="white" strokeWidth="2"/>
          <path d="M4.24285 165.471L103.371 265.371" stroke="white" strokeWidth="2"/>
          <path d="M18.5143 68.6571L201.343 251.1" stroke="white" strokeWidth="2"/>
          <line x1="35.4214" y1="45.5786" x2="224.421" y2="234.579" stroke="white" strokeWidth="2"/>
        </motion.svg>

        <motion.svg 
          className='squareLine shapePoint'
          variants={width < 700 ? lineSquareMobile :lineSquare}
          initial='hidden'
          animate={isClick === true ? hide : 'visible'}
          width="225"
          height="225"
          viewBox="0 0 225 225"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M35 1H190C208.778 1 224 16.2223 224 35V190C224 208.778 208.778 224 190 224H35C16.2223 224 1 208.778 1 190V35C1 16.2223 16.2223 1 35 1Z" stroke="white" strokeWidth="2"/>
          <line x1="121.6" y1="0.900024" x2="121.6" y2="224.1" stroke="white" strokeWidth="2"/>
          <line x1="166.6" y1="0.900024" x2="166.6" y2="225" stroke="white" strokeWidth="2"/>
          <path d="M144 0L144 224.1" stroke="white" strokeWidth="2"/>
          <line x1="189.1" y1="0.900024" x2="189.1" y2="223.2" stroke="white" strokeWidth="2"/>
          <path d="M207.9 4.04999V220.95" stroke="white" strokeWidth="2"/>
        </motion.svg>

      </div>

      <div className='container-alert'>
        <div className='alert'>
          <div className='alert-header'>
            <p>{(count === 6 && clickedShape === 'circle') ? 'You win!' : 'Game over'}</p>
          </div>
          <div className='score'>
            <p>Score</p>
            <p>{count}</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Shapes
