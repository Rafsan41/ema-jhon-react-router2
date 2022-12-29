import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import Rating from 'react-rating';


const Product = (props) => {
    // console.log(props);
    const { name, img, seller, price, stock, star } = props.product;
    const cartIcon = <FontAwesomeIcon icon={ faShoppingCart } />
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>

            <div>
            <h3 className='product-name'>{name}</h3>
            <p><small>by: {seller}</small></p>
                <h4>price:{price}</h4>
                <p><small>only {stock} left in stock - order soon</small></p>
                <Rating
                    initialRating={star}
                     emptySymbol="far fa-star icon-color"
                 fullSymbol="fas fa-star icon-color"
                 fractions={2} readonly>
                </Rating>
                <br />
                <button
                  onClick={ () => props.handelAddToCart(props.product)}  
                    className='btn-regular'>{cartIcon} Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;