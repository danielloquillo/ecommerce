import React, { useContext, useEffect, useState } from 'react';

// sidebar context

import { SidebarContext } from '../contexts/SidebarContext';

// cart context

// import { CartContext } from '../contexts/CartContext';

//import icons

import {BsCart4} from 'react-icons/bs';
import {VscAccount} from 'react-icons/vsc';
import {BsSearch} from 'react-icons/bs';
import {HiOutlineHomeModern} from 'react-icons/hi2';

// import Link

import {Link} from 'react-router-dom';

// import Logo

// import Logo from '../img/logo.svg';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  // const { itemAmount } = useContext(CartContext);
  // event Listener
  useEffect (()=> {
    window.addEventListener('scroll', ()=> {
      window.scrollY > 60 ? setIsActive(true) : setIsActive (false);
    });
  });
  return (
  <header className={`${
    isActive? 'bg-white py-4 shadow-md' : 'bg-none py-6'
    } fixed w-full z-10 transition-all`}> 
  <div className='container mx-auto flex items-center justify-end space-x-3'>
  {/* Logo */}
  <Link to={'/'}>
      <div>
        <HiOutlineHomeModern className='flex text-3xl'/>
        </div>
      </Link>
    {/* cart  */}
    <div
    onClick={() => setIsOpen(!isOpen)} 
    className='cursor-pointer flex relative'
      >
    <BsCart4 className='text-3xl'/>
    </div>

    <div>
      
          <BsSearch className=' cursor-pointer flex  text-3xl'/>
          </div>

          
          <Link to= "/Login"
          className=''>
            
          <VscAccount className=' cursor-pointer flex  text-3xl'/>
          
          
          </Link>
    </div>
    </header>
  );
};

export default Header;
