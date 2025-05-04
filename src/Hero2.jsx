import React from 'react'
import shrikrishna from './assets/shrikrishna.jpg'

const Hero2 = () => {
  return (
   

    <div className='bg-gray-600' id="about">

    <div className=' h-[50] '>
      <h1 className='text-center text-3xl text-white my-2'>About me</h1>
      <div className='border-t-5 border-blue-700 text-center w-fit mx-auto px-10 h-6'></div>
    </div>

<div className='flex'>
    <div className='h-[60] w-[60]'>
    <img src="shrikrishna.jpg" className='h-[70] w-[70]'></img>
    </div>

    <div>

<div className='flex flex-col gap-5'>
<h2 className=''>Not a full stack developer</h2>
<p>I'm a full stack developer with a strong interest in front-end
     and back-end technologies. My area of expertise is developing reliable,
      user-focused digital experiences along with effective server-side systems to support them.</p>
</div>

<div>Name:<br/>
Bikash kc<br/><br/>

Location:<br/>
Butwal<br/><br/>
</div>

<div>
Email:<br/>
kcbikash200030004000@gmail.com<br/><br/>

Availability:<br/>
Freelance/fullTime<br/><br/>
</div>

    </div>

</div>

</div>

    
  )
}

export default Hero2
