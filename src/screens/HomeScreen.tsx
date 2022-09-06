import React from 'react';
import {ActivityIndicator, FlatList, Image, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PokemonCard} from '../components/PokemonCard';
import {usePokemonPaginate} from '../hooks/usePokemonPaginate';
import {styles} from '../theme/styles';
export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {payloadPokemon, loadPokemons} = usePokemonPaginate();

  return (
    <>
      <Image
        source={require('../assets/assets/pokebola.png')}
        style={styles.pokebolaBG}
      />

      <View
        style={{
          alignItems: 'center',
        }}>
        <FlatList
          data={payloadPokemon}
          keyExtractor={pokemon => pokemon.id}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          //Header
          ListHeaderComponent={
            <Text
              style={{
                ...styles.pkdTitle,
                ...styles.pkdContainer,
                top: top + 20,
                marginBottom: top + 80,
              }}>
              Pokedex
            </Text>
          }
          renderItem={({item}) => <PokemonCard pokemon={item} />}
          //Infinete Scroll
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
          ListFooterComponent={
            <ActivityIndicator style={{height: 100}} size={20} color="grey" />
          }
        />
      </View>
    </>
  );
};
