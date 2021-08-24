import React, { Component } from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import PurchaseOptions from '../components/PurchaseOptions'

export default class PurchaseScreen extends Component {
  constructor(props) {
    super(props);

    const initialOptions = {}
    this.props.route.params.product.options.forEach(el => {
        initialOptions[el.optionCategoryName] = ['', 0];
    });

    this.state = {
      options: initialOptions
    }
    this.selectOption = this.selectOption.bind(this);
    this.getFinalPrice = this.getFinalPrice.bind(this);
    this.sendOptionInfo = this.sendOptionInfo.bind(this);
  }

  selectOption(optionCategoryName, value) {
    if (value.includes('+')) {
      let [optionName, optionPrice] = value.split(' (+');
      optionPrice = Number(optionPrice.slice(0, optionPrice.length - 1));
      const newOptions = {};
      newOptions[optionCategoryName] = [optionName, optionPrice];
      this.setState({options: {...this.state.options, ...newOptions}});
    } else {
      const newOptions = {};
      newOptions[optionCategoryName] = ['', 0];
      this.setState({options: {...this.state.options, ...newOptions}});
    }
  }

  sendOptionInfo() {
    if (Object.values(this.state.options).every(el => el[0] !== '')) {
      const { name, commissionRate, originalPrice, shippingPrice } = this.props.route.params.product;
      const selectedOptions = this.state.options;
      const ssomeePrice = this.getFinalPrice()
      this.props.navigation.navigate('CART', { name, commissionRate, originalPrice, shippingPrice, ssomeePrice, selectedOptions });
    }
  }
  
  getFinalPrice() {
    const ssomeePrice = this.props.route.params.product.ssomeePrice;
    return ssomeePrice + Object.values(this.state.options).reduce((acc, cur) => acc + cur[1], 0);
  }

  render() {
    const { options } = this.props.route.params.product;
    return (
      <View>
        <Text>옵션 선택</Text>
        {options.map(option => {
            return <PurchaseOptions key={option.id} option={option} selectOption={this.selectOption}/>
        })}
        <Text>총 상품 금액</Text>
        <Text>{this.getFinalPrice()}원</Text>
        <Pressable
          onPress={() => this.sendOptionInfo()}
        >
          <Text>구매하기</Text>
        </Pressable>
      </View>
    );
  }
}