import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { clearTheCart, getStoredCart } from '../../utilities/fakedb'
import './Shipping.css'

const Shipping = () => {
      const { register, handleSubmit, reset, formState: { errors } } = useForm();
      const { user } = useAuth();

      const onSubmit = data => {
            const savedCart = getStoredCart();
            data.order = savedCart;
            console.log(data);

            fetch('http://localhost:5000/orders', {
                  method: 'POST',
                  headers: {
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify(data)
            })
                  .then(res => res.json())
                  .then(result => {
                        // console.log(result);
                        if (result.insertedId) {
                              alert('Order Processed Successfully')
                              clearTheCart();
                              reset();
                        }
                  })
      };

      return (
            <div className="shipping__div">
                  <form className="shipping__form" onSubmit={handleSubmit(onSubmit)}>

                        <input placeholder="Your name" defaultValue={user.displayName} {...register("name")} />

                        <input placeholder="Your email" defaultValue={user.email} {...register("email", { required: true })} />

                        {errors.email && <span className="error">This field is required</span>}
                        <input placeholder="Phone number" defaultValue="" {...register("phone number", { required: true })} />
                        <input placeholder="Address" defaultValue="" {...register("address", { required: true })} />
                        <input placeholder="City" defaultValue="" {...register("city", { required: true })} />
                        <button className="button">Submit</button>
                  </form>
            </div>
      );
};

export default Shipping;