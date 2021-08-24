import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class PaymentInfo extends Component {
  constructor(props) {
    super(props);
    this.getLink = this.getLink.bind(this)
  }

  getLink() {
    const { shop: { name }, productUrl } = this.props.product;
    return (<span><a href={productUrl}>{name}</a></span>)
  }

  render() {
    return (
      <View>
        <Text>안내사항</Text>
        <li>본 상품은 {this.getLink()}에서 판매되고 있으며 구매 위탁 및 구매 대행을 통해 소비의미학 분할결제로 주문됩니다.</li>
        <li>본 상품의 배송/교환/반품 정책은 {this.getLink()}에 기재된 내용을 따릅니다.</li>
        <li>상품, 옵션, 배송 가격은 본 상품을 소미 마켓에 최초 등록하는 시점 부터 관리하며, 시간이 지남에 따라 일시적으로 가격의 차이가 있을 수 있습니다.</li>
      </View> 
    );
  }
}