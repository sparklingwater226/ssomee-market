import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class PaymentInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { charges: [initialCharge, followUpCharge] } = this.props.product;
    return (
      <View>
        <Text>분할결제</Text>
        <Text>오늘 결제 금액</Text>
        <Text>{initialCharge}원</Text>
        <Text>최대 30일 후 결제 금액</Text>
        <Text>{followUpCharge}원</Text>
      </View> 
    );
  }
}