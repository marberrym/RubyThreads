import React from 'react';
import NavBar from '../PageComponents/NavBar';
import SideBar from '../PageComponents/SideBar';
import { connect } from 'react-redux';
import Category from '../PageComponents/Category';





let CategoryScreen = (props) =>
    <div className="flexC">
        <NavBar />
        <div className="flex">
            <SideBar />
            <Category cat={props.categories.find((category) =>
                category.slug === props.match.params.category
            )} productList={props.productList}/>
        </div>
        
    </div>
    

let CategorySmart = connect(state => state)(CategoryScreen)
export default CategorySmart;
