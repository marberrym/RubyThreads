import React from 'react';
import { Link } from 'react-router-dom';
import CartButton from './CartButton';

let ProductEntry = (props) =>
    <div className="cont">
        <Link to={`/product/${props.product.id}`}>
            <div className="basis30 flexC center product">
                <div className="title">{props.product.title}</div>
                <img src={props.product.imageURL} className="productImg" alt={props.product.title}/>
                <div>${props.product.price}</div>
            </div>
        </Link>
        <CartButton product={props.product}/>
    </div>

export default ProductEntry;