import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart)
    const total = cart.reduce((total, prd)=>total + prd.price, 0);
    // const total= 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const product = cart[i];
    //     total = total + product.price
        
    // }
    let shipping = 0;
    if(total>1000){
        shipping=53.33;
    } 
    else if(total>2000){
        shipping=75.32;
    }

    else if  (total>500){
     shipping= 12.99
    }
    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2)
 
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Oredered: {cart.length}</p>
            <p>Product Price:{total}</p>
            <p><small>Shipping Cost:{shipping}</small></p>
            <p><small>Tax + Vat:{tax}</small></p>
            <p>Total Price:{grandTotal}</p>
        </div>
    );
};

export default Cart;