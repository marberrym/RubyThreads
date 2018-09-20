import React from 'react';
import { connect } from 'react-redux';
import ProductList from './ProductList';

let ProductArea = (props) => 
    <div className="productSection">
        <ProductList productList={props.productList} cat="All Products"/>
    </div>

let ProductAreaSmart = connect(state => state)(ProductArea)
export default ProductAreaSmart;