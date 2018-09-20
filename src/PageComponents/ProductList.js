import React from 'react';
import ProductEntry from './ProductEntry';

let ProductList = (props) => 
    <div>
        <div className="navtext margin-top header">{props.cat}</div>
        <div className="flex wrap">
        {props.productList.map(product =>
            <ProductEntry product={product} key={product.id}/>
        )}
        </div>
    </div>
    

export default ProductList;