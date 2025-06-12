import React from 'react'
import { useRouter } from 'next/navigation';

const NavButton: React.FC<{link: string; text: string}> = ({link, text}) => {
    const router = useRouter();
  return (
    <button
      onClick={() => router.push(link)} className='bg-blue-500 text-white font-bold my-2 mx-1 py-2 px-4 rounded hover:bg-blue-700 transition duration-300'>
      {text}
    </button> 
  )
}

export default NavButton