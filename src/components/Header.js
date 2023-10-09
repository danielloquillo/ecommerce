import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { Link } from 'react-router-dom';
import { BsCart4 } from 'react-icons/bs';
import { VscAccount } from 'react-icons/vsc';
import { BsSearch } from 'react-icons/bs';
import { HiOutlineHomeModern } from 'react-icons/hi2';
import SearchSidebar from './SearchSidebar'; 

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
          <div>
            <HiOutlineHomeModern className='flex text-3xl' />
          </div>
        </Link>
        {/* Cart */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='cursor-pointer flex relative'
        >
          <BsCart4 className='text-3xl' />
        </div>

  


        {/* search */}
        <div>
          <BsSearch
            onClick={() => setSearchSidebarOpen(!searchSidebarOpen)}
            className='cursor-pointer flex  text-3xl'
          />
        </div>

        {/* link to Login */}
        <Link to={`/Login`} className=''>
          <VscAccount className='cursor-pointer flex  text-3xl' />
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

