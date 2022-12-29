import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../Hooks/UseAuth';
import './Shipping.css'

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div className='shipping-form'>
            <form onSubmit={handleSubmit(onSubmit)}>
     
      <input defaultValue={user.displayName} {...register("name")} />
      <input defaultValue={user.email} placeholder="email"  {...register("email", { required: true })} />
                {errors.email && <span className='error'>This field is required</span>}
      <input placeholder="address"  defaultValue="" {...register("address")} />
      <input placeholder="city" defaultValue="" {...register("city")} />
      <input placeholder="phone number" defaultValue="" {...register("phone number")} />
      
      <input type="submit" />
    </form>
        </div>
    );
};

export default Shipping;