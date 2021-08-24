import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import axios from 'axios';
import parse from 'html-react-parser';

export default class CartScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.route.params)
    const { commissionRate, name, originalPrice, selectedOptions, shippingPrice, ssomeePrice } = this.props.route.params;
    return (
      <View>
        <Text></Text>
      </View>
    );
  }
}