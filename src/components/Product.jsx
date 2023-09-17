import React, { useContext } from 'react';

//import link
import { Link } from 'react-router-dom';

//import icons

import { BsFillCartPlusFill, BsFillEyeFill} from 'react-icons/bs';

// import cart context

// import { CartContext } from '../contexts/CartContext';


const Product = ({product}) => {
  
  //destructure product
  const { image, id, category, price, title } = product;
  return (

        // Add "Add to cart to every single square //
  <div>
    <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
      <div className='w-full h-full flex justify-center items-center'>
      {/* image */}
      <div className='w-[150px] mx-auto flex justify-center items-center'>
        <img 
        className='max-h-[170px] group-hover:scale-110 transition duration-500'
        src={image} 
        alt="" 
        />
      </div>
      </div>
      {/* buttons */}
      <div className='absolute top-0 right-0 group-hover:right-1 p-2 flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 '>
        <button>
          <div className='flex justify-center items-center text-gray w-10 h-10 bg-gray-300'>
            <BsFillCartPlusFill />
          </div>
        </button>
        <Link 
        to={`/product/${id}`} 
        className='w-10 h-10 bg-gray flex justify-center items-center text-primary drop-shadow-xl'>
        <BsFillEyeFill />
        </Link>
        </div>
  </div>
  {/* category, title and price */}
<div className='text-sm capitalize text-gray-500 mb-1'>{category}</div>
<Link to={`/product/${id}`}>
<h2 className ='font-semibold mb-1'> {title}</h2>
</Link>
<div className='font-semibold'>$ {price}</div>
</div>
);
};

export default Product;
