import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { FcServices } from "react-icons/fc";
import { FaBitcoin } from "react-icons/fa";
import {Link} from 'react-router-dom';

const Navbar = () => {
  const  navigation=[
    {
      title:"home",
      path:"/",
      logo:<FaHome/>,

    },
    {
      title:"About",
      logo:<FaUserTie />,
      path:"/about"
    },
    {
      title:"contact",
      logo:<IoMdContact />,
      path:"/contact"
    },
    {
      title:"services",
      logo:<FcServices />,
      path:"/services"
    }
  ]
  return (
    <>
    <nav className='flex justify-between bg-black text-white text-2xl p-4'>

        <div className='flex items-center'><FaBitcoin />ikash kc</div>

        <ul className='flex gap-8 items-center'>
           {navigation.map((val,i)=>{
            return(
              <div key={i}>
              <Link to={val.path}>
                <li className='flex items-center'>
                  {val.title}
                  {val.logo}
                </li>
                
              </Link>
              </div>
            )
           })}
        </ul>

    </nav>
    </>
  )
}

export default Navbar
