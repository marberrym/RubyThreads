import React, { Component } from 'react';
import './App.css';
import FetchProducts from './Pages/AllProductsScreen';
import NavBar from './PageComponents/NavBar';
import SideBar from './PageComponents/SideBar';

class App extends Component {
  render() {
    return (
      <div className="flexC">
        <NavBar />
        <div className="flex bottomseg">
          <SideBar />
          <FetchProducts />
        </div>
      </div>
    );
  }
}

export default App;
