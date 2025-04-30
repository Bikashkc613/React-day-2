import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { FcServices } from "react-icons/fc";
import { FaBitcoin } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className='flex justify-between bg-black text-white text-2xl p-4'>

        <div className='flex items-center'><FaBitcoin />ikash kc</div>

        <ul className='flex gap-8 items-center'>
            <li className='flex items-center'> <FaHome/>Home</li>
            <li className='flex items-center'><FaUserTie />About</li>
            <li className='flex items-center'><IoMdContact />Contact</li>
            <li className='flex items-center'><FcServices />Services</li>
        </ul>

    </nav>
  )
}

export default Navbar
