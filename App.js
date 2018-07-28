// Import Statements
import React, { Component } from 'react';
import {
	StatusBar,
	StyleSheet,
	Text,
	View,
	Alert,
	Button,
	TextInput
} from 'react-native';
import {
	createBottomTabNavigator,
	createStackNavigator,
} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

class HomeScreen extends React.Component {
  static navigationOptions = {
	  title: 'Helpwork',
	  headerRight: (
		<Button
			onPress={() => Alert.alert('Thanks for pressing edit!')}
			title="Edit"
		/>
	  ),
  }
  
  row() {/*
	  return (
		    <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
                <View style={{ flex: 1, alignSelf: 'stretch' }}>1</View>
                <View style={{ flex: 1, alignSelf: 'stretch' }}>3</View>
                <View style={{ flex: 1, alignSelf: 'stretch' }}>4</View>
                <View style={{ flex: 1, alignSelf: 'stretch' }}>3</View>
                <View style={{ flex: 1, alignSelf: 'stretch' }}>2</View>
            </View>
	  );
  */}
  
  render() {
	// const data = [1, 2, 3, 4, 5];
    return (
	  <View>
	    <StatusBar
	      backgroundColor = "white"
		  barStyle = "dark-content"
	    />
        <View style = { styles.defaultScreen }>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </View>
		{/*<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {
                data.map((datum) => { // This will render a row for each data element.
                    return this.row();
                })
            }
        </View>*/}
	  </View>
    );
  }
}

class SolverScreen extends React.Component {
	static navigationOptions = {
		title: 'Helpwork Solver'
	}
	
	constructor(props) {
		super(props);
		this.state = {text: 'Enter math equation...'}
	}
	
	render() {
		return (
			<View style = { styles.defaultScreen }>
				{/*<Input
					placeholder='BASIC INPUT'
				/>
				<Text>Test</Text>
				<View style = {{
					flex: 1, 
					flexDirection: 'row',
				}}>*/}
				<Text>Test!</Text>
				<TextInput
					multiline = {false}
					clearTextOnFocus = {true}
					enablesReturnKeyAutomatically = {true}
					style={{
						height: 20,
						borderColor: 'black',
						borderWidth: 1,
						borderStyle: 'solid',
						borderRadius: 6
					}}
					onChangeText={(text) => this.setState({text})}
					value={this.state.text}
				/>
				{/*<Text>Test!</Text>
				</View>
				<Text>Test</Text>*/}
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
			<View style = { styles.defaultScreen }>
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
	paddingLeft: 8,
	paddingRight: 8
  }
});

