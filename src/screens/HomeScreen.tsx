import React from 'react';
import {Image, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../theme/styles';
export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();

  return (
    <>
      <Image
        source={require('../assets/assets/pokebola.png')}
        style={styles.pokebolaBG}
      />

      <View style={{...styles.pkdContainer}}>
        <Text style={{...styles.pkdTitle, top: top + 20}}>Pokedex</Text>
      </View>
    </>
  );
};
