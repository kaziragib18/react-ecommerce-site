import React from 'react';
import { useState, useEffect } from 'react';

const Orders = () => {
      const [orders, setOrders] = useState([]);

      useEffect(() => {
            fetch('http://localhost:5000/orders')
                  .then(res => res.json())
                  .then(data => setOrders(data));
      }, [])

      return (
            <div>
                  <h2>You have placed {orders.length} Orders. </h2>
                  <div>
                        <ul>{orders.map(order => <li
                              key={order._id}>
                              {order.name} : {order.email}</li>)}</ul>
                  </div>
            </div>
      );
};

export default Orders;