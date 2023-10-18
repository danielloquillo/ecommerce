import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { Link } from 'react-router-dom';
import { BsCart4 } from 'react-icons/bs';
import { VscAccount } from 'react-icons/vsc';
import { BsSearch } from 'react-icons/bs';
import { HiOutlineHomeModern } from 'react-icons/hi2';
import SearchSidebar from './SearchSidebar';
import house from '../img/house.svg';
import cart from '../img/cart.svg';
import glass from '../img/glass.svg';
import login from '../img/login.svg';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const [searchSidebarOpen, setSearchSidebarOpen] = useState(false); 

  // Event Listener isActive
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  return (
    <header
      className={`${
        isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'
      } fixed w-full z-10 transition-all`}
    >
      
        <div className="container mx-auto flex items-center justify-end space-x-3">




        {/* Logo */}
        <Link to={'/'}>
          <div className='flex justify-center items-center w-16 h-16'>
          <img src={house} alt=''  className='w-full' />
          </div>
        </Link>
        {/* Cart */}
        
        <div 
          onClick={() => setIsOpen(!isOpen)}
          className='flex justify-center items-center w-16 h-16'
        >
          <img src={cart} alt=''  className=' cursor-pointer w-full'/>
        </div>

  


        {/* search */}
        <div 
        onClick={() => setSearchSidebarOpen(!searchSidebarOpen)}
        className='flex justify-center items-center w-16 h-16'>
        <img src={glass} alt='' className='cursor-pointer w-full'/>
        </div>

        {/* link to Login */}
        <Link to={`/Login`} className='flex justify-center items-center w-16 h-16'>
        <img src={login} alt=''  className='cursor-pointer w-full' />
        </Link>
      </div>
      

      {/* Render SearchSidebar */}
      {searchSidebarOpen && (
        <SearchSidebar
          isOpen={searchSidebarOpen}
          closeSidebar={() => setSearchSidebarOpen(false)}
        />
        
      )}



    </header>
  );
};

export default Header;

