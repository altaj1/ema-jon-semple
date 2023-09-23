import React, { useState } from 'react';
import fakeData from "../../fakeData/products.json"
import "./Shop.css"
import Product from '../Product/Products'
import Cart from '../cart/Cart';

const Shop = () => {
  const first10 = fakeData.slice(0,10);
  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);

  const hendelAddProduct = (pd)=>{
    console.log('Product added',pd);
    const newCart = [...cart, pd];
    setCart(newCart)
  };

//console.log(first10)
  return (
    <div className='shop-container'>
      <div className="product-container">
         {
          products.map(val=> <Product 
          hendelProduct = {hendelAddProduct}
          pd= {val}>

           </Product>)
         }
      </div>
      <div className="cart-container">
        <Cart cart= {cart}></Cart>
      </div>
      
    </div>
  );
};

export default Shop;
