import React, { useContext } from 'react';
// import link
import { Link } from 'react-router-dom';
// import icons
import { BsFillCartCheckFill } from 'react-icons/bs';
// import cart context
import { CartContext } from '../contexts/CartContext';

import buy from '../img/buy.svg'

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  // destructure product
  const { id, image, category, title, price } = product;
  return (
    <div>
      <div className='border border-white h-[300px] mb-6 relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center'>
          {/* image */}
          <Link to={`/product/${id}`}>
          <div className='w-[400px] mx-auto flex justify-center items-center'>
            <img
              className='max-h-[190px] group-hover:scale-110 transition duration-300'
              src={image}
              alt=''
            />
            </div>
          </Link>
        </div>
      
        {/* buttons */}
        <div className='absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
          <button onClick={() => addToCart(product, id)}>
            <div className='flex justify-center items-center w-19 h-19'>
              <img className='w-[60px]' src={buy} alt='' />
            </div>
          </button>
        </div>
      </div>
      {/* category & title & price */}
      <div className='text-slate-400'>

        <Link to={`/product/${id}`}>
          <h2 className='py-5 text-[13px] font-semibold flex items-center uppercase'>{title}</h2>
        </Link>
        <div className='text-[15px] font-light flex items-center uppercase'>$ {price}</div>
      </div>
    </div>
  );
};

export default Product;
