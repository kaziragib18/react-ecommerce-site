import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './Product.css';
import Rating from 'react-rating';

const Product = (props) => {
      // console.log(props);

      const { name, img, seller, price, stock, star, starCount } = props.product;
      const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

      return (
            <div className="product">
                  <div className="product__img">
                        <img src={img} alt="" />
                  </div>

                  <div>
                        <h5 className="product__name">{name}</h5>
                        <h4 className="product__seller">Seller info: {seller}</h4>
                        <p className="product__price">Price: ${price}</p>
                        <p className="product__stock"><small>Only {stock} Left in Stock - order soon.</small></p>
                        <p className="icon__text">
                              Rating: <Rating
                              initialRating={star}
                              emptySymbol="far fa-star icon__color"
                              fullSymbol="fas fa-star icon__color"
                              
                        ></Rating> ({starCount})
                        </p>
                        <button onClick={() => props.handleAddToCart(props.product)}
                              className="product__button">
                              {cartIcon} Add to cart</button>
                  </div>
            </div>
      );
};

export default Product;