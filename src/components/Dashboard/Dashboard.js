import React, { Component } from 'react';
import axios from 'axios'
import Product from '../Product/Product'

class Dashboard extends Component {



  deleteItem = (id) => {
    axios.delete('/api/product/' + id).then(response => {
        console.log("Delete successful!")
      }).catch(err => {console.log(err)})
    this.props.getProducts()
  }


  render(){
    let invArr = [];
    this.props.inventory.forEach((e,i)=>{ console.log(e)
      let newArr = <Product deleteItem={this.deleteItem} key={i} name={e.name} price={e.price} image={e.image_url} id={e.product_id} />
      invArr.push(newArr)
    })

    return (
      <div>
        Dashboard
        {invArr}
      </div>
    )
  }
}


export default Dashboard