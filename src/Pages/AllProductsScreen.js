import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from '../PageComponents/ProductList';

let reqUrl = 'http://0.tcp.ngrok.io:18732/'

class FetchProducts extends Component {
    componentDidMount() 
}
    
        {fetch(reqUrl + 'product')
            .then(response => response.json())
            .then(response => { props.dispatch({type: "SET_TO_STORE",
                    productList: response
                })
                return <ProductArea productList={props.productList} />
            })}
    
        

let ProductArea = (props) => {
    return <ProductList productList={props.productList} cat="All Products"/>
}
    
let FetchProductSmart = connect(state => ({productList: state.productList}))(FetchProducts)
export default FetchProductSmart;