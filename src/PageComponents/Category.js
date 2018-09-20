import React from 'react';
import ProductList from './ProductList';

let Category = (props) =>
    <ProductList cat={props.cat.title} productList={props.productList.filter(product => product.categorId === props.cat.id)}/>

export default Category;