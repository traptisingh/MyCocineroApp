import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import Router from './src/Router';
//import LaunchPage from './components/LaunchPage'

class App extends Component {

  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
          <Router />
      </SafeAreaView>
    );
  }
}

const styles = {
  safeArea: {
  flex: 1,
  backgroundColor: '#fff'
  }
};

export default App;
