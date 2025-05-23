import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import 'aos/dist/aos.css';
import { ImMenu } from "react-icons/im";
import { IoClose } from "react-icons/io5";


const Navbar = () => {
  
  const [menu, setMenu] =useState(false);

  const handleMenu =()=>{
    setMenu(!menu);
  }

  const closedSidebar =()=>{
    setMenu(false);
  }
  return (
    <div className=' backdrop-filter backdrop-blur-lg bg-opacity-60 fixed top-0 z-50 w-full  shadow-md'>
      <div  className='flex flex-wrap    px-3 sm:px-6 md:px-20 lg:px-32 justify-between items-center max-w-[1240px]  mx-auto py-4'>
        <div className='h-10 flex items-center '>
          <Link to={'/'}><h1 className='text-2xl font-serif font-bold '>ማሾ ቴክ.</h1></Link>
         
        </div>
        <ul className='hidden sm:flex gap-6'>
          <li><Link className='hover:text-[#0099cc] text-md ' to="/">Home</Link></li>
          <li><Link className='hover:text-[#0099cc] text-md ' to={'/contact'}>Contact</Link></li>
          <li><Link className='hover:text-[#0099cc] text-md ' to="/about">About</Link></li>
          <li><Link className='hover:text-[#0099cc] text-md ' to="/">Services</Link></li>
        </ul>
         <Link to='/login' className='hidden cursor-pointer hover:text-[#0099cc]  sm:flex'>Login</Link>
        <div onClick ={handleMenu} className='sm:hidden flex cursor-pointer mr-4'>
          {menu? (<IoClose size={30} className='text-gray-900 '/>) : (<ImMenu size={30} className='text-gray-600'/>)}
        
        
        </div>
      </div>
      <div className={menu? 'flex': 'hidden'}>
          <ul className='flex sm:hidden flex-col space-y-6 py-8 font-bold scroll-m-0 h-screen w-1/4 ml-auto bg-gray-400 p-5 '>
          <li onClick={closedSidebar}><Link className='hover:text-[#0099cc] text-md ' to="/">Home</Link></li>
          <li onClick={closedSidebar}><Link className='hover:text-[#0099cc] text-md ' to="/contact">Contact</Link></li>
          <li onClick={closedSidebar}><Link className='hover:text-[#0099cc] text-md ' to="/about">About</Link></li>
          <li onClick={closedSidebar}><Link className='hover:text-[#0099cc] text-md ' to="/">Services</Link></li>
          <li onClick={closedSidebar}><Link className='hover:text-[#0099cc] text-md ' to="/login">Login</Link></li>
        </ul>
      </div>
    
    </div>
  )
}

export default Navbar