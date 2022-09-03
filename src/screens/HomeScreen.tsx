import React from 'react';
import {Image, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {usePokemonPaginate} from '../hooks/usePokemonPaginate';
import {styles} from '../theme/styles';
export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {payloadPokemon} = usePokemonPaginate();
  console.log(payloadPokemon);
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
