import React from 'react'

const Hero = () => {
  return (
    
    <div className='flex flex-col items-center justify-center text-center gap-7 bg-gray-800 w-full
    h-[89.3vh]' id="About">

     <h1 className='text-shadow-2xs animate-bounce text-5xl text-green-500'>
     Not React Developer
     </h1>

     <p className='text-3xl'>Hello it's me bikash kc</p>

     <div className='flex gap-4 text-white font-bold' >
        <button className='bg-blue-300 rounded-2xl px-2 py-2 text-2xl'>Explore Projects</button>
        <button className='bg-yellow-400 rounded-3xl px-2 py-2 text-2xl'>Let's Connect</button>
     </div>

    </div>
  )
}

export default Hero
