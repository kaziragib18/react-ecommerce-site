import React from 'react';
import img from '../../images/Order-placed.gif'
import './PlaceOrder.css';

const PlaceOrder = () => {
      return (
            <div className="order__div">
                  <img className="order__img" src={img} alt="" />
            </div>
      );
};

export default PlaceOrder;