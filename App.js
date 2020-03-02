import React from 'react';
import { Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { createAppContainer, SwitchNavigator, StackNavigator} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from './screens/homescreen.js';
import Serach from './screens/serach.js';
import LoginPage from './screens/loginPage.js';
import signedinhome from './screens/loggedHomeScreen.js';
 
//import Icon from 'react-native-vector-icons/FontAwesome';
import { Icon } from 'native-base';

const AppStackNav = createBottomTabNavigator( {

    Home: {

        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: "Home Page",
            tabBarIcon: () => (
                <Image
                    source={require('./home.jpg')}
                    style={
                        styles.icon
                    }

                    name="home"
                />
            )
        }
    },
    serach: {
        screen: Serach,
        tabBarLabel: "account page",
        
        
    },
    login: {
        screen: LoginPage,
        tabBarLabel: "login page"
        
    }

});

const styles = StyleSheet.create({
    icon: {
        backgroundColor: '#D3D3D3',
        width: 24,
        height: 24,
    },
    navbar: {
        backgroundColor: '#D3D3D3',
    }
});


const AppContainer = createAppContainer(AppStackNav);
const AppStack = ({ signedinHome: signedinhome })

export default SwitchNavigator(
    {
        AppContainer: AppContainer,
        AppStack: AppStack
    }
);