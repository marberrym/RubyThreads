import React from 'react';
import { Link } from 'react-router-dom';

let NavBar = () => 
    <div className="navbar flex spaceB">
        <div className="flex">
            <Link to="/"><img src="/images/gem3.png" className="navruby"/></Link>
            <Link to="/About"><div className="navtext">About Ruby Threads</div></Link>
        </div> 
        <div className="navtext">Cart</div>
    </div>

export default NavBar;