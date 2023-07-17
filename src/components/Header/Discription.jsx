import React from 'react'
import logo from '../images/logo.png'
function Discription() {
  return (
    <div className='block-discription'>
    <img src={logo} alt="logo" />
      <div className='text'>
        <h2 className='text-header'>Many Dots</h2>
        <p className='par1'>Memory span training game</p>
        <p className='par2'>Do you think you can remember position of 5 dots? <br />
        Can you do better?</p>

        <div className='text-theory'>
          <p className='par-header'>THEORY:</p>
          <p className='par4'>An average human can hold 7 ± 2 objects in working memory.</p>
          <p className='par5'>This is frequently referred to as Miller's Law.</p>
          <p className='par6'>App allows you to challenge Miller's theory.</p>
        </div>
      </div>

      <div className="linkStore">
						<a href="https://apps.apple.com/tr/app/many-dots-memory-span-training-game-improve-attention/id1145901943">t</a>
			</div>
    </div>
  )
}

export default Discription
