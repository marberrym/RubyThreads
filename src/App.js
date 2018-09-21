import React, { Component } from 'react';
import './App.css';
import ProductArea from './Pages/AllProductsScreen';
import NavBar from './PageComponents/NavBar';
import SideBar from './PageComponents/SideBar';

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
