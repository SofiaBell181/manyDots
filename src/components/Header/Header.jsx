import React from 'react'
import Discription from './Discription';
import Animation from '../Animation/Animation';

function Header() {


  return (
    <>
      <div className='container'>    
        <div className='block-main'>
            <Animation />
            <Discription />
        </div>

      </div>
    </>
  )
}

export default Header
