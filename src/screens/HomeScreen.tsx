import React from 'react';
import {ActivityIndicator, FlatList, Image, Text, View} from 'react-native';
import {color} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {usePokemonPaginate} from '../hooks/usePokemonPaginate';
import {styles} from '../theme/styles';
export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {payloadPokemon, loadPokemons} = usePokemonPaginate();
  console.log(payloadPokemon);
  return (
    <>
      <Image
        source={require('../assets/assets/pokebola.png')}
        style={styles.pokebolaBG}
      />

      <FlatList
        data={payloadPokemon}
        keyExtractor={pokemon => pokemon.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <Image
            source={{uri: item.picture}}
            style={{width: 100, height: 100}}
          />
        )}
        //Infinete Scroll
        onEndReached={loadPokemons}
        onEndReachedThreshold={0.4}
        ListFooterComponent={
          <ActivityIndicator style={{height: 100}} size={20} color="grey" />
        }
      />
    </>
  );
};
