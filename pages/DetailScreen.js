import React, { Component } from 'react'
import { View, Text, Pressable, Modal } from 'react-native'
import axios from 'axios';
import BasicInfo from '../components/BasicInfo'
import PaymentInfo from '../components/PaymentInfo'
import Details from '../components/Details'
import CaveatEmptor from '../components/CaveatEmptor'

export default class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        "brand": { // 브랜드 정보
            "id": 83,
            "name": "탬버린즈"
        },
        "category": { // 카테고리 정보
            "id": 12,
            "name": "화장품 / 미용"
        },
        "charges": [ // 분할결제 (1차, 2차) 가격
            11064,
            10500
        ],
        "commissionRate": 0.0269, // 분할결제 수수료
        "currentOrderLimit": 1, // 1인당 주문 가능 수량
        "description": "...", // 제품 상세 설명 (html)
        "detailImages": [], // 상세 이미지 URL의 리스트
        "mainImage": "https://ssomee-goods-product.s3.ap-northeast-2.amazonaws.com/ssomee-market/SMP2106249039118/51e06655f04751bd0a1385309298fd0777b4f9dc.jpg", // 메인 이미지 URL
        "name": "탬버린즈 손 소독제 트리오", // 상품 이름
        "orderLimit": 2, // 현재 주문 가능 수량
        "originalPrice": 18500, // 원래 가격
        "prefix": "SMP2106249039118",
        "shippingPrice": 2500, // 배송비
        "shop": { // 판매처 정보
            "id": 15,
            "name": "탬버린즈(Tamburins)"
        },
        "soldOut": false, // 품절 여부
        "ssomeePrice": 18500, // 소미 판매 가격
      }
    };
  }

  componentDidMount() {
    const uri = 'https://mock-api.ssomee.com/products/' + this.props.route.params.id;
    axios
    .get(uri)
    .then(res => {
      this.setState({product: res.data});
    })
    .catch(e => console.log(e));
  }

  render() {
    const { product } = this.state;
    console.log(product.options)
    return (
      <View>
        <BasicInfo product={product}/>
        <hr style={{width: '100%'}}/>
        <PaymentInfo product={product}/>
        <hr style={{width: '100%'}}/>
        <Details product={product}/>
        <hr style={{width: '100%'}}/>
        <CaveatEmptor product={product}/>
        <Pressable
          style={{position: 'fixed', width: '100%', bottom: '31px', height: '30px'}}
          onPress={() => this.props.navigation.navigate('PURCHASE', {product})}
        >
          <Text>구매하기</Text>
        </Pressable>
      </View> 
    );
  }
}