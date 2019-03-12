import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux'; // New code
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { CardSection, Input } from './common';

class LaunchPage extends Component {

  render() {
    return (
        <View style={{ flex: 1 }}>
          <View style={styles.logoViewStyle}>
            <Image source={require('./logo.png')} style={styles.imageStyle} />
          </View>
          <View style={styles.tagLineContainerStyle}>
            <Text style={styles.taglineStyle}>Hire a chef now.</Text>
          </View>
          <CardSection>
            <Input placeholder="Enter you mobile number" label="+1" />
          </CardSection>

          <TouchableOpacity onPress={() => Actions.login()} style={styles.buttonContainerStyle}>
            <Text style={styles.textStyle}>Or connect using a Social account</Text>
          </TouchableOpacity>

        </View>
    );
  }
}

const styles = {
  logoViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 9,
    backgroundColor: '#F5FCFF'
  },
  tagLineContainerStyle: {
    //justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingLeft: 20,
    //borderBottomWidth: 1,
    padding: 5,
    backgroudColor: '#fff',
    flexDirection: 'row',
    //borderColor: '#ddd',
    position: 'relative'
  },
  taglineStyle: {
  //  height: 75,
    fontSize: 20,
    fontFamily: 'Helvetica-Light'
  },
  textStyle: {
    color: '#008080'
  },
  buttonContainerStyle: {
    alignItems: 'center',
    flex: 1,
    paddingLeft: 20,
    borderBottomWidth: 1,
    padding: 5,
    backgroudColor: '#fff',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export default LaunchPage;
