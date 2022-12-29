import React from 'react';
import { useHistory } from 'react-router';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useCart from '../Hooks/UseCart';
import useProducts from '../Hooks/UsedProducts';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const history = useHistory();


    const handelRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }

    const handelProceedToShipping = () => {
        history.push('/shipping');
        // setCart([]);
        // clearTheCart();
    }




    return (
        <div className='shop-container'>
            <div className='product-container'>

                {
                    cart.map(product => <ReviewItem
                        Key={product.Key}
                        handelRemove={handelRemove}
                        product={product}></ReviewItem>)
}      
            </div>
            <div className='cart-container'>   
                <Cart cart={cart}>
                   <button onClick={handelProceedToShipping} className="btn-regular">proceed to shipping</button>
              </Cart>
            </div>
        </div>
    );
};

export default OrderReview;