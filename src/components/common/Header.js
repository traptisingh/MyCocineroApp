// Import libraries for making the component

import React from 'react';
import { Text, View } from 'react-native';

// create the component

const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
          <Text style={textStyle}>{props.HeaderText}</Text>
    </View>
  );
};
// style the Text

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    paddingTop: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2
  },
  textStyle: {
    fontSize: 25
  }
};

//make the component available to other parts of the App
export { Header };
