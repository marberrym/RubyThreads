import React from 'react';

let ProductEntry = (props) =>
    <div className="basis30 flexC center product">
        <div className="title">{props.product.title}</div>
        <img src={props.product.imageURL} className="productImg"/>
        <div>${props.product.price}</div>

    </div>

export default ProductEntry;