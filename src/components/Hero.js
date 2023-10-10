import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import sale from '../img/sale.svg'

const Hero = () => {
  
  const scrollToTarget = () => {
      const targetElement = document.getElementById('scrollTarget');
  
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth',
        });
      }
    };

  return (
    
  <section className='h-[840px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
    <div className='container mx-auto flex justify-around h-full'>
      {/* text */}
      <div className='flex flex-col justify-center'>
        {/* pretitle */}
        <div className='py-4 text-[25px] text-slate-400 text-left md:text-center font-ligh'>
          YOUR STYLE - YOUR CHOICE
          </div>
          {/* title */}
          <h1 className='py-5 text-[90px] text-slate-400 leading-[1.1] font-light mb-4 text-left md:text-center'>
             
            2023 COLLECTION <br />
          </h1>
          <section className='text-center'>

          <ScrollLink
            to='scrollTarget' 
            smooth={true}
            duration={2000}
            
            
            onClick={scrollToTarget} 
          >
<button


            
            
          
         
              
              
            >
              <img className='text-center w-[180px] py-2 px-7' src={sale} alt='' />
            </button> 
            </ScrollLink>
            
            </section>
          </div>
      </div>
    </section>
  );
}

export default Hero;
