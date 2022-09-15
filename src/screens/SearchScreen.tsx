import React, {useEffect, useState} from 'react';
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
import {PayloadPokemon} from '../interfaces/pokemonInterfaces';
import {pokemonApi} from '../api/pokemonApi';

export const SearchScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isFetching, payloadSearchPokemon} = usePokemonSearch();
  const screenWidth = Dimensions.get('window').width;

  const [payload, setPayload] = useState('');

  const [filterPayload, setFilterPayload] = useState<PayloadPokemon[]>([]);

  useEffect(() => {
    if (payload.length === 0) {
      return setFilterPayload([]);
    }

    setFilterPayload(
      payloadSearchPokemon.filter(pokemon =>
        pokemon.name.toLocaleLowerCase().includes(payload.toLocaleLowerCase()),
      ),
    );
  }, [payload]);

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
        onDebounce={value => setPayload(value)}
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
          data={filterPayload}
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
              {payload}
            </Text>
          }
          renderItem={({item}) => <PokemonCard pokemon={item} />}
        />
      </View>
    </View>
  );
};
