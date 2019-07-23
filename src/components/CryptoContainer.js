import React from "react";

//connect method hooks React components to Redux state
import { connect } from "react-redux";
import { View, Text } from "react-native";

const CryptoContainer = () => {
  return (
    <View>
      <Text>Container</Text>
    </View>
  );
};

function mapStateToProps(state) {
  return {
    crypto: state.crypto
  };
}

export default connect(mapStateToProps)(CryptoContainer);
