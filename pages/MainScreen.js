import React, { Component } from 'react'
import { ScrollView, Text, Button } from 'react-native'
import Product from '../components/Product'

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.showDetails = this.showDetails.bind(this);
  }

  showDetails(e){
    const id = e.currentTarget.id;
    this.props.navigation.navigate('DETAIL', {id});
  }
  
  render() {
    return (
      <ScrollView>
        {this.props.products.map(product => {
          return <Product key={product.prefix} product={product} showDetails={this.showDetails}></Product>
        })}
      </ScrollView> 
    );
  }
}