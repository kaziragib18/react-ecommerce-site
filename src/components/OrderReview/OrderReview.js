import React from 'react';
// import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart'
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';
import { useHistory } from 'react-router';

const OrderReview = () => {
      const [cart, setCart] = useCart();
      const history = useHistory();

      const handleRemove = key =>{
            // console.log(key);
            const newCart = cart.filter(product => product.key !== key);
            setCart(newCart);
            
            removeFromDb(key);
      }

      const handlePlaceOrder = () =>{
            history.push('/placeorder');

            // setCart([]);
            // clearTheCart();
            history.push('/shipping');
      }

      return (
            <div className ="shop__container">
               <div className="product__container">
                     {
                           cart.map(product=> <ReviewItem
                              key ={product.key}
                              product = {product}
                              handleRemove ={handleRemove}

                           ></ReviewItem>)
                     }

               </div>
               <div className="cart__container">
                     
                  <Cart cart={cart}>
                  <button onClick ={handlePlaceOrder} className="cart__button">Proceed to shipping</button>
                  </Cart>
                  
               </div>
            </div>
      );
};

export default OrderReview;