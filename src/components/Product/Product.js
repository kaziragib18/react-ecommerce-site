import React from 'react';
import './Product.css'
const Product = (props) => {
      console.log(props.product);

      const { name, img, seller, price, stock } = props.product;

      return (
            <div className="product">
                 <div className="product__img">
                 <img src= {img} alt="" />
                 </div>

                 <div>
                 <h5 className="product__name">{name}</h5>
                  <p><small>by: {seller}</small></p>
                  <p className="product__price">Price: ${price}</p>
                  <p className="product__seller"><small>Only {stock} Left in Stock - order soon.</small></p>
                  <button className="product__button">Add to cart</button>
                 </div>

            </div>
      );
};

export default Product;