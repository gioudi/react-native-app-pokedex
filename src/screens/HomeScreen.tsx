import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, Image, Platform, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Loading} from '../components/Loading';
import {PokemonCard} from '../components/PokemonCard';
import {SearchInput} from '../components/SearchInput';
import {usePokemonPaginate} from '../hooks/usePokemonPaginate';
import {usePokemonSearch} from '../hooks/usePokemonSearch';
import {PayloadPokemon} from '../interfaces/pokemonInterfaces';
import {styles} from '../theme/styles';
export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {payloadPokemon, loadPokemons} = usePokemonPaginate();
  const {isFetching, payloadSearchPokemon} = usePokemonSearch();
  const screenWidth = Dimensions.get('window').width;

  const [payload, setPayload] = useState('');

  const [filterPayload, setFilterPayload] = useState<PayloadPokemon[]>([]);

  useEffect(() => {
    if (payload.length === 0) {
      return setFilterPayload([]);
    }

    if (isNaN(Number(payload))) {
      setFilterPayload(
        payloadSearchPokemon.filter(pokemon =>
          pokemon.name
            .toLocaleLowerCase()
            .includes(payload.toLocaleLowerCase()),
        ),
      );
    } else {
      setFilterPayload(
        payloadSearchPokemon.filter(pokemon => pokemon.id === payload),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [payload]);

  if (isFetching) {
    return <Loading />;
  }

  return (
    <>
      <Image
        source={require('../assets/assets/pokebola.png')}
        style={styles.pokebolaBG}
      />

      <View
        style={{
          flex: 1,
          margin: 20,
        }}>
        <Text
          style={{
            ...styles.pkdTitle,
            color: '#000',
          }}>
          Pokedex
        </Text>
        <SearchInput
          onDebounce={value => setPayload(value)}
          style={{
            position: 'absolute',
            zIndex: 999,
            width: screenWidth - 40,
            top: Platform.OS === 'ios' ? top : top + 50,
          }}
        />
        <View
          style={{
            alignItems: 'center',
          }}>
          <FlatList
            data={filterPayload.length !== 0 ? filterPayload : payloadPokemon}
            keyExtractor={pokemon => pokemon.id}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            //Header
            ListHeaderComponent={
              <Text
                style={{
                  ...styles.pkdTitle,
                  color: '#000',
                  marginBottom: 40,
                  marginTop: 50,
                }}>
                {payload}
              </Text>
            }
            renderItem={({item}) => <PokemonCard pokemon={item} />}
            //Infinete Scroll
            onEndReached={loadPokemons}
            onEndReachedThreshold={0.4}
            ListFooterComponent={<Loading />}
          />
        </View>
      </View>
    </>
  );
};
