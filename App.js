import React, { Component } from 'react';
import {
	StatusBar,
	StyleSheet,
	Text,
	View
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
	  <View>
	    <StatusBar
	      backgroundColor = "white"
		  barStyle = "dark-content"
	    />
        <View style = {{
			paddingTop: 20,
			paddingLeft: 8
		}}>
	      <Text>Helpwork</Text>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </View>
	  </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
	borderTopWidth: 20,
  },
});
