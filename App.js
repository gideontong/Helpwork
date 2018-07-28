// Import Statements
import React, { Component } from 'react';
import {
	StatusBar,
	StyleSheet,
	Text,
	View
} from 'react-native';
import {
	createBottomTabNavigator,
	createStackNavigator,
} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

class HomeScreen extends React.Component {
  static navigationOptions = {
	  title: 'Helpwork',
  }
  
  render() {
    return (
	  <View>
	    <StatusBar
	      backgroundColor = "white"
		  barStyle = "dark-content"
	    />
        <View style = {{
			paddingTop: 4,
			paddingLeft: 8
		}}>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </View>
	  </View>
    );
  }
}

class SolverScreen extends React.Component {
	static navigationOptions = {
		title: 'Helpwork Solver'
	}
	
	render() {
		return (
			<View>
				<Text>Test!</Text>
			</View>
		);
	}
}

class SettingsScreen extends React.Component {
	static navigationOptions = {
		title: 'Settings'
	}
	
	render() {
		return (
			<View>
				<Text>Test!</Text>
			</View>
		);
	}
}

const HomeStack = createStackNavigator({
	Home: HomeScreen,
});

const SolverStack = createStackNavigator({
	Solver: SolverScreen
});

const SettingsStack = createStackNavigator({
	Settings: SettingsScreen
});

const RootStack = createBottomTabNavigator(
	{
		Home: HomeStack,
		Solver: SolverStack,
		Settings: SettingsStack,
	},
	{
		navigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, tintColor }) => {
				const { routeName } = navigation.state;
				let iconName;
				if (routeName === 'Home') {
					iconName = `ios-home${focused ? '' : '-outline'}`;
				} else if (routeName === 'Solver') {
					iconName = `ios-bookmarks${focused ? '' : '-outline'}`;
				} else if (routeName === 'Settings') {
					iconName = `ios-settings${focused ? '' : '-outline'}`;
				}
				
				return <Ionicons name = { iconName } size = {35} color = { tintColor } style = {{
					textAlign: 'center',
					justifyContent: 'center',
					paddingTop: 2,
				}} />;
			},
		}),
		alignItems: 'center',
		justifyContent: 'center',
		tabBarPosition: 'bottom',
		initialRouteName: 'Home',
	}
);

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
  defaultScreen: {
	paddingTop: 4,
	paddingLeft: 8
  }
});

