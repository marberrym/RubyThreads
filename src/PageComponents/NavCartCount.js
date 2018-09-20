import React from 'react';
import { connect } from 'react-redux';

let NavCartCount = (props) =>
    <div className="navtext">Cart {props.cart.length}</div>

let NavCartCountSmart = connect(state => {
    return {cart: state.cart}
})(NavCartCount);
export default NavCartCountSmart;