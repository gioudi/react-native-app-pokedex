import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SearchInput} from '../components/SearchInput';
import {usePokemonSearch} from '../hooks/usePokemonSearch';
import {styles} from '../theme/styles';
import {PokemonCard} from '../components/PokemonCard';
import {Loading} from '../components/Loading';

export const SearchScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isFetching, payloadSearchPokemon} = usePokemonSearch();
  const screenWidth = Dimensions.get('window').width;
  if (isFetching) {
    return <Loading />;
  }

  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 20,
      }}>
      <SearchInput
        style={{
          position: 'absolute',
          zIndex: 999,
          width: screenWidth - 40,
          top: Platform.OS === 'ios' ? top : top + 30,
        }}
      />
      <View
        style={{
          alignItems: 'center',
        }}>
        <FlatList
          data={payloadSearchPokemon}
          keyExtractor={pokemon => pokemon.id}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          //Header
          ListHeaderComponent={
            <Text
              style={{
                ...styles.pkdTitle,
                ...styles.pkdContainer,
                marginBottom: top + 40,
                marginTop: Platform.OS === 'ios' ? top + 60 : top + 80,
              }}>
              Pokedex
            </Text>
          }
          renderItem={({item}) => <PokemonCard pokemon={item} />}
        />
      </View>
    </View>
  );
};
