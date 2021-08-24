import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import parse from 'html-react-parser';

export default class Details extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { description } = this.props.product;
    return (
      <View>
        <Text>상품정보</Text>
        <div>{parse(description)}</div>
        <Button
          title='상품정보 보기/접기'></Button>
      </View> 
    );
  }
}