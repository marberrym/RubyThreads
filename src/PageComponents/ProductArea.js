import React from 'react';
import { connect } from 'react-redux';
import ProductList from './ProductList';

let ProductArea = (props) => 
    <ProductList productList={props.productList} cat="All Products"/>
    

let ProductAreaSmart = connect(state => state)(ProductArea)
export default ProductAreaSmart;