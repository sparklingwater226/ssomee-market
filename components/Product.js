import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'

export default class Product extends Component {
  /*
   {
            "brand": {
                "name": "탬버린즈"
            },
            "mainImage": "https://ssomee-goods-product.s3.ap-northeast-2.amazonaws.com/ssomee-market/SMP2106249039118/51e06655f04751bd0a1385309298fd0777b4f9dc.jpg",
            "name": "탬버린즈 손 소독제 트리오",
            "originalPrice": 18500,
            "prefix": "SMP2106249039118",
            "productUrl": "https://www.tamburins.com/shop/item.php?it_id=1614763169",
            "soldOut": false,
            "ssomeePrice": 18500
        }
   */

  constructor(props) {
    super(props);
    this.getRate = this.getRate.bind(this);
  }

  getRate() {
    const discount = ((1 - (this.props.product.ssomeePrice / this.props.product.originalPrice)) * 100).toFixed(2);
    if (discount.slice(-2) === '00') return discount.slice(0, discount.length - 3) + '%';
    return discount + '%';
  }

  render() {
    return (
      <View nativeID={this.props.product.prefix} onClick={(e) => this.props.showDetails(e)}>
        <Image source={{uri: this.props.product.mainImage}}
        style={{ width: 200, height: 200 }}></Image>
        <Text>{this.props.product.brand.name}</Text>
        <Text>{this.props.product.name}</Text>
        <Text>{this.props.product.ssomeePrice}</Text>
        <Text>{this.getRate()}</Text>
      </View> 
    );
  }
}