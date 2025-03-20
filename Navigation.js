import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import DogScreen from './screens/DogScreen';
import HomeScreen from './screens/HomeScreen';
import PokeScreen from './screens/PokeScreen';


const Drawer = createDrawerNavigator();

const MyDrawer = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name = "Home" component={HomeScreen}/>
            <Drawer.Screen name = "DogApi" component={DogScreen}/>
            <Drawer.Screen name = "pokeApi" component={PokeScreen}/>
            
        </Drawer.Navigator>
    );
};

const AppNavigator = () => {
    return(
        <NavigationContainer>
            <MyDrawer/>
        </NavigationContainer>
    );
};

export default AppNavigator;