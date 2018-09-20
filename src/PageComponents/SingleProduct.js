import React from 'react';
import CartButton from './CartButton';

let SingleProduct = (props) =>
    <div className="productSection">
        <div className="basis30 flexC center product">
            <h1>{props.product.title}</h1>
            <img src={props.product.imageURL} className="singleProductImg" alt={props.product.title}/>
            <h2>${props.product.price}</h2>
            <div>{props.product.description}</div>
            <CartButton product={props.product}/>
        </div>
    </div>

export default SingleProduct;