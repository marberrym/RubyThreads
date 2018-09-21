import React from 'react';
import NavBar from '../PageComponents/NavBar';
import SideBar from '../PageComponents/SideBar';
import SingleProduct from '../PageComponents/SingleProduct';
import { connect } from 'react-redux';

let ProductScreen = (props) =>
    <div className="flexC">
        <NavBar/>
        <div className="flex">
            <SideBar/>
            <SingleProduct product={props.productList.find((product) => product.id === props.match.params.productid)}/>
        </div>
    </div>

let ProductSmart = connect(state => ({productList: state.productList}))(ProductScreen)
export default ProductSmart;

