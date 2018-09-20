import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../PageComponents/NavBar';
import CartItem from '../PageComponents/CartItem';

let Cart = (props) =>
    <div className="flexC">
        <NavBar/>
        { props.cart.length === 0 ? 
            <h1>youre cart is empty</h1> {
            :
            <div className="flexC">
                {props.cart.map(cartitem => <CartItem item={cartitem}/>)}
            </div> 
            }
        

        }
        
    </div>

let CartSmart = connect(state => ({cart: state.cart}))(Cart);
export default CartSmart;