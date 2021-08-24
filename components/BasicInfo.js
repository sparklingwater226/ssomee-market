import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'

export default class BasicInfo extends Component {
  constructor(props) {
    super(props);
    this.getRate = this.getRate.bind(this);
    this.getPoints = this.getPoints.bind(this);
  }

  getRate() {
    const discount = ((1 - (this.props.product.ssomeePrice / this.props.product.originalPrice)) * 100).toFixed(2);
    if (discount.slice(-2) === '00') return discount.slice(0, discount.length - 3) + '%';
    return discount + '%';
  }

  getPoints() {
    return Math.floor(this.props.product.ssomeePrice / 100);
  }

  render() {
    const { mainImage, detailImages, brand, category, name, ssomeePrice, originalPrice, shippingPrice } = this.props.product;
    return (
      <View>
        <Image source={mainImage}
            style={{ width: 200, height: 200 }}></Image>
        <Text>{category.name} - {brand.name}</Text>
        <Text>{name}</Text>
        <Text>{ssomeePrice}원</Text>
        <Text>{this.getRate()}</Text>
        <Text>소미할인</Text>
        <Text>{originalPrice}원</Text>
        <Text>포인트</Text>
        <Text>{this.getPoints()}원 적립 예정(1%)</Text>
        <Text>배송비</Text>
        <Text>{shippingPrice}원</Text>
      </View> 
    );
  }
}