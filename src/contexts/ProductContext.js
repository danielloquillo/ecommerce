import React, {createContext, useState, useEffect} from 'react';

// create context

export const ProductContext = createContext();

// The parameter ({children}) of the function uses
// destructuring objects. To indicate that the
// ProductProvider function takes an object as an argument and
// extracts the children property of that object. the property
// children is to represent the content nested within
// of the component.

const ProductProvider = ({children}) => {

// products state

const [products, setProducts] =useState([]);

// fetch product

useEffect (() => {

  const fecthProducts = async () => {

    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    setProducts(data);

  };

  fecthProducts();

// [] It is an empty list, making this list empty makes
// let this be called only once

 }, []);

  return <ProductContext.Provider value={{products}}>
    {children}
    </ProductContext.Provider>;

};

export default ProductProvider;
