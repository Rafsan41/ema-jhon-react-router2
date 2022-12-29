import React from 'react';

const ReviewItem = (props) => {
    const { name, price, quantity, key } = props.product;
    const { handelRemove } = props;
    return (
        <div className="product">
            <div  className="product-name">
                <h4>{name}</h4>
          
                <p>price:{price}</p>
            <p>Quantity:{quantity}</p>
                <button
            onClick={() => handelRemove(key)}        className="btn-regular">Remove </button>
            </div>
        </div>
    );
};

export default ReviewItem;