import React from 'react'
import NavButton from './NavButton';


const Navbar = () => {
  return (
    <div className='flex justify-center items-center bg-gray-800 p-4'>
    <NavButton link='/' text='Home'/>
    <NavButton link='/projects' text='Projects'/>
    <NavButton link='/about' text='About'/>
    <NavButton link='/contact' text='Contact'/>
    </div>
  )
}

export default Navbar