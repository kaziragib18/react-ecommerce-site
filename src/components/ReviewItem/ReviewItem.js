import React from 'react';

const ReviewItem = (props) => {
      const { name, price, quantity, key } = props.product;
      const { handleRemove } = props;
      return (
            <div className="product">
                  {/* <div className="product__img">
                        <img src={img} alt="" />
                  </div> */}
                 <div>
                 <h3 className="product__name">{name}</h3>
                  <h4 className="product__price">Price: {price}</h4>
                  <h5>Quantity: {quantity}</h5>
                  <button onClick={()=> handleRemove(key)} className="product__button">Remove</button>
                 </div>
            </div>
      );
};

export default ReviewItem;