import React from 'react';
import { Link } from 'react-router-dom';

let SideBar = () => 
    <div className="sideBar flexC center sideCat">
        <Link to="/">All Products</Link>
        <Link to="/cats/hats">Hats</Link>
        <Link to="/cats/pants">Pants</Link>
        <Link to="/cats/tops">Tops</Link>
        <div>Boots</div>
        <div>Knick Knacks</div>
        <div>Paddy Whacks</div>
        <div>Doggy Bones</div>
    </div>

export default SideBar;