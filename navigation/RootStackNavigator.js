import React from 'react';
import { Dimensions, Image, Text } from 'react-native';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import mainPointsInterets from '../screens/pointsInterets/mainPointsInterets';
import mainItineraire from '../screens/itineraire/mainItineraire';
import mainNavigation from '../screens/navigation/mainNavigation';
import BurgerScreen from '../screens/BurgerScreen';
import Wiki from '../screens/navigation/Wiki';
import PointInteret from '../screens/pointsInterets/PointInteret';

// import MenuDrawer from '../components/MenuDrawer';

// const WIDTH = Dimensions.get('window').width;

// const DrawerConfig = {
// 	drawerWidth: WIDTH * 0.83,
// 	contentComponent: ({ navigation }) => {
// 		return(<MenuDrawer navigation={navigation} />)
// 	}
// }

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
		MainPointsInterets :{
		screen: mainPointsInterets
		},
		MainNavigation :{
			screen: mainNavigation
		},
		MainItineraire :{
			screen: mainItineraire
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
				<Image
					source={require('../assets/images/header/sapins.png')}
					style={{ flex: 1, width: 50, height: 50, resizeMode: 'contain', tintColor: 'white', marginLeft: 20 }}
				/>
			),
			headerRight: (
				<Image
					source={require('../assets/images/header/burger.png')}
					style={{ flex: 1, width: 50, height: 50, resizeMode: 'contain', tintColor: 'white', marginRight: 20 }}
				/>
			),
			headerTitle: (
				<Image
					source={require('../assets/images/header/via_garona_logo.png')}
					style={{ flex: 1, width: 65, height: 65, resizeMode: 'contain' }}
				/>
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
	//DrawerConfig
);

export default RootStackNavigator;
