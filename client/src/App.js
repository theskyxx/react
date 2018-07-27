import './App.css'
import React, { Component } from 'react';
import Header from "./component/Header";
import Footer from "./component/Footer";
import ProductItem from "./component/Product/ProductItem"


class App extends Component {
  render() {
    return (
      <div >
        <Header />
        <ProductItem productName="iPhone x" unitPrice="40500" />
        <ProductItem productName="iPad Pro x" unitPrice="30500" />
        <ProductItem productName="iPad mini" unitPrice="19500" />
        <Footer company="TheSky" email="rat@rat.com" />
      </div>
    );
  }
}

export default App;
