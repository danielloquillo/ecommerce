import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';
import Hero from '../components/Hero';
import {BsFillCaretLeftSquareFill, BsFillCaretRightSquareFill } from 'react-icons/bs'
import { icons } from 'react-icons';

const Home = () => {
  const { products } = useContext(ProductContext);

  // Filtrar productos por categoría
  const womensProducts = products.filter((item) => item.category === "women's clothing");
  const mensProducts = products.filter((item) => item.category === "men's clothing");

  // scrolling for Women's section
  
  const slideWomenLeft = () => {
    var slider = document.getElementById('Womenslider')
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideWomenRight = () => {
    var slider = document.getElementById('Womenslider')
    slider.scrollLeft = slider.scrollLeft + 500;
  };

   // scrolling for Men's section

   const slideManLeft = () => {
    var slider = document.getElementById('Manslider')
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideManRight = () => {
    var slider = document.getElementById('Manslider')
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div>
      <Hero />
      <section className="py-16">
        <div id="scrollTarget" className="container mx-auto">
          <div className="max-w-screen overflow-x-auto">
            <div className="mb-8">
              <div className="flex justify-center items-center mb-4">
                <h2 className="text-2xl font-semibold">WOMEN'S BEST SELLERS</h2>
              </div>
              <div className='relative flex items-center'>
              <BsFillCaretLeftSquareFill onClick={slideWomenLeft} className='cursor-pointer text-7xl'/>
              <div id='Womenslider' className="py-9 flex flex-no-wrap    className='w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth">
                {womensProducts.map((product) => (
                  <div className="mr-4" key={product.id}>
                    <Product product={product} />
                  </div>
                ))}
              </div>
              <BsFillCaretRightSquareFill onClick={slideWomenRight} className='cursor-pointer text-7xl' />
            </div>
            </div>
          
              <div className="flex justify-center items-center mb-4">
                <h2 className="text-2xl font-semibold">MEN'S BEST SELLERS</h2>
              </div>
              <div className='relative flex items-center'>
              <BsFillCaretLeftSquareFill onClick={slideManLeft} className='cursor-pointer text-5xl'/>
              <div id= 'Manslider' className="py-9 flex flex-no-wrap   className='w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth">
                {mensProducts.map((product) => (
                  <div className="mr-4" key={product.id}>
                    <Product product={product} />
                  </div>
                  
                ))}
              </div>
              <BsFillCaretRightSquareFill onClick={slideManRight} className='cursor-pointer text-5xl' />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

 