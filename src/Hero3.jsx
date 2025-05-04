import React from 'react'
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { LuSlash } from "react-icons/lu";
import { FaReact } from "react-icons/fa";
import { TbCircleDashedLetterN } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { IoReorderThreeOutline } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { CiDatabase } from "react-icons/ci";
import { DiPostgresql } from "react-icons/di";
import { SiTypeorm } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
const Hero3 = () => {
  return (
    <div className='flex flex-col bg-gray-950 text-white gap-4'>
      
<div>
    <h1 className='text-center text-blue-600 text-4xl my-4'>My skills</h1>
    <div className='border-t-5 w-auto mx-auto w-fit h-6 p-10 text-blue-700'></div>
</div>

<div className='flex flex-col gap-5'>

    <div className='flex flex-col bg-cool-gray-800'>
    <FaAngleLeft /><LuSlash /><FaAngleRight />
    <h2>Frontend</h2>

<div className='flex flex-row bg-gray-700'>

<div className='bg-gray-500 rounded-2xl w-[30] flex flex-row gap-8'><FaReact />React</div>
<div><TbCircleDashedLetterN />Next.js</div>
<div><RiTailwindCssFill />Tailwind CSS</div>
</div>

<div className='flex flex-row'>
<div><FaReact />React Query</div>
<div><TbBrandTypescript />Typescript</div>
</div>

    </div>
/*second*/

    <div className='flex flex-col bg-cool-gray-800'>
    <IoReorderThreeOutline />
    <h2>Backend</h2>

<div className='flex flex-row'>

<div><FaNodeJs />Node.js</div>
<div><SiExpress />Express</div>
<div><IoReorderThreeOutline />Rest API</div>
</div>

<div className='flex flex-row'>
<div><IoReorderThreeOutline />GraphQL</div>
<div><FaAngleLeft /><LuSlash /><FaAngleRight />Authentication</div>
</div>

    </div>

    /*third*/
    <div className='flex flex-col gap-8 bg-cool-gray-800'>
    <CiDatabase />
    <h2>Database</h2>

<div className='flex flex-row gap-8'>

<div className='bg-gray-500'><CiDatabase />Mongo DB</div>
<div><DiPostgresql />postgres sql</div>
<div><SiTypeorm />Type ORM</div>
</div>

<div className='flex flex-row'>
<div><SiPrisma />Prisma</div>
<div><FaGithub />Git</div>
</div>

    </div>


</div>

    </div>
  )
}

export default Hero3
