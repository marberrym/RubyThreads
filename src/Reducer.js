let reducer = (oldstate, action) => {

    let addToCart = (product) => {
        let newCartList = oldstate.cart.concat(product)
        let newState = {...oldstate,
            cart: newCartList}
        return newState;
    }

    if (action.type === 'ADD_TO_CART') {
        return addToCart(action.product);
    } else {
        return oldstate;
    }
}

export default reducer;