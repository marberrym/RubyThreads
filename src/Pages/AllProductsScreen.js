import React from 'react';
import { connect } from 'react-redux';
import ProductList from '../PageComponents/ProductList';

let ProductArea = (props) => 
    <ProductList productList={props.productList} cat="All Products"/>
    

let ProductAreaSmart = connect(state => ({productList: state.productList}))(ProductArea)
export default ProductAreaSmart;