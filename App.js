import React, { Component } from 'react';
import {
	StatusBar,
	StyleSheet,
	Text,
	View
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    return (
	  <View>
	    <StatusBar
	      backgroundColor = "white"
		  barStyle = "dark-content"
	    />
        <View style = {{
			paddingLeft: 8
		}}>
	      <Text style = {{
			  fontSize: 38
		  }}>Helpwork</Text>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </View>
	  </View>
    );
  }
}

class Solver extends React.Component {
	render() {
		
	}
}

const RootStack = createStackNavigator({
	Home: {
		screen: HomeScreen
	},
});

export default class App extends React.Component {
	render() {
		return <RootStack />;
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
	borderTopWidth: 20,
  },
});

