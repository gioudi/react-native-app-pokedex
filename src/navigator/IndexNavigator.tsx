import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DetailScreen} from '../screens/DetailScreen';
import {HomeScreen} from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();
export const IndexNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Detail" component={DetailScreen} />
    </Tab.Navigator>
  );
};
