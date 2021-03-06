import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Provider accepts one argument, which is the store
import { Provider } from 'react-redux';
import { Colors } from 'react-native/Libraries/NewAppScreen';

// import Home from './Home';
import { Header, CryptoContainer } from './../components'
import Store from './../Store';

const App = () => {
  return (
    <Provider store={ Store }>
      <View>
        <Header />
        <CryptoContainer />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter
  },
  engine: {
    position: "absolute",
    right: 0
  },
  body: {
    backgroundColor: Colors.white
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.black
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
    color: Colors.dark
  },
  highlight: {
    fontWeight: "700"
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: "600",
    padding: 4,
    paddingRight: 12,
    textAlign: "right"
  }
});

export default App;
