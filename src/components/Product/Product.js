import React from 'react';
import './Product.css'
const Product = (props) => {
      console.log(props.product);

      const { name, img, price, stock } = props.product;

      return (
            <div>
                  <img src= {img} alt="" />
                  <h5>{props.product.name}</h5>
            </div>
      );
};

export default Product;