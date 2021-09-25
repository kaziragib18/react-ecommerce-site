import React from 'react';
import './Cart.css'

const Cart = (props) => {
      // console.log(props.cart);
      // const{cart} = props;
      // const total = cart.reduce((previous, product) => previous + product.price, 0);
      
      const{cart} = props;
      // console.log(cart);
      let totalQuantity = 0;
      let total = 0;
      for(const product of cart){
            if(!product.quantity){
                  product.quantity = 1;
            }
            total = total + product.price * product.quantity;
            totalQuantity = totalQuantity + product.quantity;
      }

      const shipping = total > 0 ? 50 : 0;
      const tax = (total + shipping) * .075;
      const grandTotal = total + shipping + tax;

      return (
            <div className="cart__div">
                   <div id="cart_div">
                   <h3>Order <span id="cart_title">Summary</span></h3>
                   <h5>Items Ordered: <span>{totalQuantity}</span></h5>
                   <hr />
                        <p>Total: <span>${total.toFixed(2)}</span></p>
                        <hr />
                        <p>Shipping: <span>${shipping}</span> </p>
                        <hr />
                        <p>Tax: <span>${tax.toFixed(2)}</span> </p>
                        <hr />
                        <p>Grand Total: <span>${grandTotal.toFixed(2)}</span></p>
                        <hr />
                   </div>
                       
            </div>
      );
};

export default Cart;