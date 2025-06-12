'use client';

import React from 'react'
import 'mywebsite/app/globals.css'
import ButtonRedirect from './ButtonRedirect'
const Hero = () => {
  return (
    <div className='float-left'>
        <h1>Hero</h1>
        <ButtonRedirect link={'https://github.com/MaciejPiekarczyk'} text={'Go to GitHub'} />
        <ButtonRedirect link={'https://www.linkedin.com/in/maciej-piekarczyk-2a22bb35b/'} text={'Go to LinkedIn'} />    
    </div>
  )
}

export default Hero