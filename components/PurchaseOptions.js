import React, { Component } from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'

export default class PurchaseOptions extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { optionCategoryName, options } = this.props.option;
    return (
      <select
        name={optionCategoryName}
        onChange={(e) => this.props.selectOption(optionCategoryName, e.target.value)}>
        <option>{optionCategoryName}</option>
        {options.map(option => {
          return <option key={option.id} value={`${option.name} (+${option.price})`}>{option.name} (+{option.price})</option>
        })}
      </select>
    );
  }
}