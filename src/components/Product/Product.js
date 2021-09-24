import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';

import './Product.css';
const Product = (props) => {
      // console.log(props);

      const { name, img, seller, price, stock } = props.product;
      const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

      return (
            <div className="product">
                 <div className="product__img">
                 <img src= {img} alt="" />
                 </div>

                 <div>
                 <h5 className="product__name">{name}</h5>
                  <h4 className="product__seller">by: {seller}</h4>
                  <p className="product__price">Price: ${price}</p>
                  <p className="product__stock"><small>Only {stock} Left in Stock - order soon.</small></p>
                  <button onClick={ () => props.handleAddToCart(props.product)}
                  className="product__button">
                        {cartIcon} Add to cart</button>
                 </div>

            </div>
      );
};

export default Product;