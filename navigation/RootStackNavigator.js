import React from 'react';
import { Dimensions, Image, Text, TouchableHighlight } from 'react-native';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import BurgerScreen from '../screens/BurgerScreen';
import Wiki from '../screens/navigation/Wiki';
import PointInteret from '../screens/pointsInterets/PointInteret';

const RootStackNavigator = createStackNavigator(
	{
		Home: {
			screen: HomeScreen
		},
		Links: {
			screen: LinksScreen
		},
		Settings: {
			screen: SettingsScreen
		},
		Burger: {
			screen: BurgerScreen
		},
		Wiki: {
			screen: Wiki
		},
		PointInteret: {
			screen: PointInteret
		},
	},
	{
		defaultNavigationOptions: {
			headerLeft: (
				<TouchableHighlight
				style={{ flex: 1}}
				onPress={() => console.log('Sapins')}>
					<Image
						source={require('../assets/images/header/sapins.png')}
						style={{ flex: 1, width: 50, height: 50, resizeMode: 'contain', tintColor: 'white', marginLeft: 20 }}
					/>
				</TouchableHighlight>
			),
			headerRight: (
				<TouchableHighlight
				style={{ flex: 1}}
				onPress={() => console.log('Burger')}>
					<Image
						source={require('../assets/images/header/burger.png')}
						style={{ flex: 1, width: 50, height: 50, resizeMode: 'contain', tintColor: 'white', marginRight: 20 }}
					/>
				</TouchableHighlight>
			),
			headerTitle: (
				<TouchableHighlight
				style={{ flex: 1}}
				onPress={() => console.log('Accueil')}>
					<Image
						source={require('../assets/images/header/via_garona_logo.png')}
						style={{ flex: 1, width: 65, height: 65, resizeMode: 'contain' }}
					/>
				</TouchableHighlight>
			),
			headerStyle: {
				backgroundColor: '#1F5070',
				height: 85
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				fontWeight: 'bold',
				fontFamily: 'Roboto'
			}
		}
	}
);

export default RootStackNavigator;