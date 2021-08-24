import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './pages/MainScreen';
import DetailScreen from './pages/DetailScreen';
import PurchaseScreen from './pages/PurchaseScreen';
import CartScreen from './pages/CartScreen';
import CheckoutScreen from './pages/CheckoutScreen.js';
import axios from 'axios';

const Stack = createStackNavigator();

export default function App() {

  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    let newProducts = [...products];
    for (let i = 1; i < 8; i++) {
      console.log(i)
      const uri = `https://mock-api.ssomee.com/products/all/${i}?order=date-desc`
      axios
      .get(uri)
      .then(res => {
        newProducts = [...newProducts, ...res.data.products];
        setProducts(newProducts);
      })
      .catch(e => console.log(e));
    }
    
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MAIN">
        <Stack.Screen
          name="MAIN"
          options={{ title: '메인화면'}}
        >{(props) => <MainScreen {...props} products={products}/>}
        </Stack.Screen>
        <Stack.Screen
          name="DETAIL"
          component={DetailScreen}
          options={{ title: '상세화면' }}>
        </Stack.Screen>
        <Stack.Screen
        name="PURCHASE"
        options={{ title: '구매하기' }}
        >{(props) => <PurchaseScreen {...props} setCartItems={setCartItems}/>}
        </Stack.Screen>
        <Stack.Screen
        name="CART"
        options={{ title: '장바구니' }}
        >{(props) => <CartScreen {...props} cartItems={cartItems}/>}
        </Stack.Screen>
        <Stack.Screen
          name="CHECKOUT"
          component={CheckoutScreen}
          options={{ title: '결제화면' }}>
        </Stack.Screen>
      </Stack.Navigator> 
    </NavigationContainer>
  );
}