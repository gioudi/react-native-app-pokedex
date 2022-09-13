import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DetailScreen} from '../screens/DetailScreen';
import {HomeScreen} from '../screens/HomeScreen';
import {PayloadPokemon} from '../interfaces/pokemonInterfaces';

export type RootStackParams = {
  HomeScreen: undefined;
  DetailScreen: {payloadPokemon: PayloadPokemon; color: string};
};

const Stack = createNativeStackNavigator<RootStackParams>();
export const IndexNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};
