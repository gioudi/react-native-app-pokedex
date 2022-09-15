import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {IndexNavigator} from './IndexNavigator';
import {SearchScreen} from '../screens/SearchScreen';
import {Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
export const IndexTabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={{
        tabBarActiveTintColor: '#5856d6',
        tabBarLabelStyle: {
          marginBottom: Platform.OS === 'ios' ? 0 : 10,
          fontSize: 14,
        },
        tabBarStyle: {
          borderWidth: 0,
          elevation: 0,
          height: Platform.OS === 'ios' ? 0 : 70,
          position: 'absolute',
          backgroundColor: 'rgba(255,255,255,0.92)',
        },
        headerShown: false,
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: 'List',
          tabBarIcon: ({color}) => (
            <Icon name="list-outline" color={color} size={18} />
          ),
        }}
        name="HomeScreen"
        component={IndexNavigator}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => (
            <Icon name="search-outline" color={color} size={20} />
          ),
        }}
        name="SearchScreen"
        component={SearchScreen}
      />
    </Tab.Navigator>
  );
};
