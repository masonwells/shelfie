import React, { Component } from 'react';
import axios from 'axios'
import {Switch, Route, Link} from 'react-router-dom'
import routes from '../../routes'


class Form extends Component {
  constructor() {
    super()
    this.state = {
      productName: '',
      productPrice: 0,
      imgUrl: ''

    }
    this.cancel= this.cancel.bind(this)
    this.makeItem = this.makeItem.bind(this)

  }

  updateName(value) {
    this.setState({
      productName: value
    })
  }

  updatePrice(value) {
    this.setState({
      productPrice: value
    })
  }

  updateImageUrl(value) {
    this.setState({
      imgUrl: value
    })
  }

  cancel() {
    this.setState({
      productName: '',
      productPrice: 0,
      imgUrl: ''
    })
  }

  makeItem() {
    let name = this.state.productName;
    let price = this.state.productPrice;
    let image = this.state.imgUrl;
    console.log(name, price, image, this.props.getProducts)
    axios.post('/api/product', { name, price, image }).then(data => {
      this.props.getProducts();
      this.cancel();
    }).catch(err => {
      console.log(err)
    });
  }

  render() {
    return (
      <div>
        Form
        <input onChange={(e) => this.updateName(e.target.value)}
          placeholder="Name" />
        <input onChange={(e) => this.updatePrice(e.target.value)}
          placeholder="Price" />
        <input onChange={(e) => this.updateImageUrl(e.target.value)}
          placeholder="Image Url" />
        <button onClick={()=>this.cancel()}>Cancel</button>
        <Link to='/form'> <button onClick={()=>this.makeItem()}>Add to Inventory</button> </Link>
        {routes}
      </div>

    )
  }
}


export default Form