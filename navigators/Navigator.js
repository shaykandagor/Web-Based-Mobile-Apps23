import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../views/Home';
import Profile from '../views/Profile';


const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" components={Home} />
        <Tab.Screen name="Profile" components={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
