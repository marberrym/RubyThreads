import React from 'react';
import { connect } from 'react-redux';

let CartButton = (props) => 
    <button className="cartBtn" onClick={() => {
        return props.dispatch({type: "ADD_TO_CART", product: props.product})
    }}>
        Add to Cart
    </button>


let ButtonSmart = connect()(CartButton);
export default ButtonSmart;