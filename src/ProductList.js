import React from 'react';
import ProductEntry from './ProductEntry';

let ProductList = (props) => 
    <div className="flex wrap margin-top">
        {props.products.productList.map(product =>
            <ProductEntry product={product} key={product.id}/>
        )}
    </div>

export default ProductList;