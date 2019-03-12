import React, { Component } from 'react';
//import * as Facebook from 'expo-facebook';
import { Facebook, Google } from 'expo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity, Text, View } from 'react-native';
import { CardSection } from './common';

class Login extends Component {

  async logInFB() {
  try {
    const {
      type,
      token,
      expires,
      permissions,
      declinedPermissions
    } = await Facebook.logInWithReadPermissionsAsync('368059500449537', {
      permissions: ['public_profile']
    });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
      Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
    } else {
      // type === 'cancel'
    }
  } catch ({ message }) {
    alert(`Facebook Login Error: ${message}`);
  }
}

async logInGoogle() {
  const clientId = '499067846462-15prejt1j2jpnv1ko1fslcbojb0pi2oi.apps.googleusercontent.com';
  const { type, accessToken } = await Google.logInAsync({ clientId });

if (type === 'success') {
  /* Log-Out */
  await Google.logOutAsync({ clientId, accessToken });
}
}

  render() {
    return (
      <View>
        <View style={styles.lableContainerStyle}>
          <Text style={styles.lableTextStyle}>Choose an account</Text>
        </View>

        <CardSection>
          <View style={{ paddingLeft: 20 }}>
            <Ionicons name="logo-facebook" size={20} color="#3c5a99" />
          </View>
          <TouchableOpacity onPress={this.logInFB.bind(this)}>
            <Text style={styles.buttonStyle}>FaceBook</Text>
          </TouchableOpacity>
        </CardSection>

        <CardSection>
          <View style={{ paddingLeft: 20 }}>
            <Ionicons name="logo-google" size={20} color="#4285F4" />
          </View>
          <TouchableOpacity onPress={this.logInGoogle.bind(this)}>
            <Text style={styles.buttonStyle}>Google</Text>
          </TouchableOpacity>
        </CardSection>

      </View>
    );
  }
}

const styles = {
  lableContainerStyle: {
    justifyContent: 'center',
    height: 75,
    paddingLeft: 20
  },
  lableTextStyle: {
    fontSize: 17,
    fontFamily: 'Helvetica-Light'
  },
  buttonStyle: {
    color: '#3c5a99',
    paddingLeft: 10,
    fontSize: 15
  }
};


export default Login;
