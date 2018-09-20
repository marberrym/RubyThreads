import React from 'react';
import { Link } from 'react-router-dom';
import NavCartCount from './NavCartCount';

let NavBar = () => 
    <div className="navbar flex spaceB">
        <div className="flex">
            <Link to="/"><img src="/images/gem3.png" className="navruby" alt="Ruby Logo"/></Link>
            <Link to="/About"><div className="navtext">About Ruby Threads</div></Link>
        </div> 
        <NavCartCount/>
    </div>

export default NavBar;