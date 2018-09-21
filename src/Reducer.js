let reducer = (oldstate, action) => {

    let addToCart = (oldstate, action) => {
        let newCartList = oldstate.cart.concat(action.product)
        let newState = {...oldstate,
            cart: newCartList}
        return newState;
    }

    let addToStore = (oldstate, action) => {
        let newState = {...oldstate,
            productList: action.productList}
        return newState;
    }

    if (action.type === 'ADD_TO_CART') {
        return addToCart(oldstate, action);
    } else if (action.type === 'SET_TO_STORE') {
        return addToStore(oldstate, action)     
    } else {
        return oldstate;
    }
}

export default reducer;