import React, { Component } from 'react';
import './App.css';
import ProductArea from './ProductArea';
import NavBar from './NavBar';
import SideBar from './SideBar';

class App extends Component {
  render() {
    return (
      <div className="flexC">
        <NavBar />
        <div className="flex bottomseg">
          <SideBar />
          <ProductArea />
        </div>
      </div>
    );
  }
}

export default App;
