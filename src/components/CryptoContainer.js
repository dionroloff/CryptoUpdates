import React, { Component } from "react";

//connect method hooks React components to Redux state
import { connect } from "react-redux";
import { View, Text } from "react-native";

import FetchCoinData from './../Actions/FetchCoinData';

class CryptoContainer extends Component {
  componentDidMount() {
    FetchCoinData();
  }
  render() {
    return (
      <View>
        <Text>CoinContainer</Text>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    crypto: state.crypto
  };
}

export default connect(mapStateToProps)(CryptoContainer);
