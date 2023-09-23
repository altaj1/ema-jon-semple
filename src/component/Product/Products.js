import React from 'react';
import "./product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Products = (props) => {
   // console.log(props)
    const {img, name, seller, price, stock} = props.pd
    return (
        <div className='product'>
           <div >
            <img className="product-img" src={img} alt=''/>
           </div>
           <div className='margin'>
             <h4 className="product-name">{name}</h4>
             <br/>
             <p><small>by:{seller}</small></p>
             <p>${price}</p>
             <br/>
             <p><small>Only {stock} left in stock - Order soon</small></p>
             <button 
             onClick={()=> props.hendelProduct(props.pd)}
             className='button-container' 
             >
                
                  <FontAwesomeIcon icon={faShoppingCart} /> add to cart
             </button>
             </div>
        </div>
    );
};

export default Products;