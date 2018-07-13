import React, { Component } from 'react';
import axios from 'axios';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';

import './App.css';

class App extends Component {
 
  constructor() {
    super();
    this.state = {
      inventory: [],
      selectedProduct: null
    }
    this.getProducts = this.getProducts.bind(this);
  }

componentDidMount() {
    this.getProducts();
  }

getProducts() {
    axios.get('/api/inventory')
      .then(results => {
        console.log(results)
        this.setState({
          inventory: results.data
        })
      })
      .catch(err => {
        console.log(err)
      });
  }



  render() {
    return (
      <div className="App">
        <Dashboard inventory={this.state.inventory} getProducts={this.getProducts} />
        <Form selectedProduct={this.state.selectedProduct} getProducts={this.getProducts}/>
        <Header />
      </div>
    );
  }
}

export default App;
