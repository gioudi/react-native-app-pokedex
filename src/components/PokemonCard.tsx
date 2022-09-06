import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import {PayloadPokemon} from '../interfaces/pokemonInterfaces';
import {FadeInImage} from './FadeInImage';
import ImageColors from 'react-native-image-colors';
import {useNavigation} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

interface Props {
  pokemon: PayloadPokemon;
}

export const PokemonCard = ({pokemon}: Props) => {
  const navigation = useNavigation();
  const [BgColor, setBgColor] = useState('#B6B6B6');
  const isMounted = useRef(true);
  useEffect(() => {
    getColorsPokemons();

    return () => {
      isMounted.current = false;
    };
  }, []);

  const getColorsPokemons = async () => {
    const getColorPokemon = await ImageColors.getColors(pokemon.picture, {
      fallback: '#228B22',
    });
    if (!isMounted.current) {
      return;
    }
    switch (getColorPokemon.platform) {
      case 'android':
        setBgColor(getColorPokemon.dominant);
        break;
      case 'web':
        setBgColor(getColorPokemon.lightVibrant);
        break;
      case 'ios':
        setBgColor(getColorPokemon.background);
        break;
      default:
        throw new Error('Unexpected platform key');
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() =>
        navigation.navigate('DetailScreen', {
          payloadPokemon: pokemon,
          color: BgColor,
        })
      }>
      <View
        style={{
          ...styles.pkdCardContainer,
          width: windowWidth * 0.4,
          backgroundColor: BgColor,
        }}>
        <View>
          <Text style={styles.pkdCardContainer__Name}>
            {pokemon.name}
            {'\n#' + pokemon.id}
          </Text>
        </View>

        <View style={styles.pkdCardContainer__PokebolaContainer}>
          <Image
            source={require('../assets/assets/pokebola-blanca.png')}
            style={styles.pkdCardContainer__Pokebola}
          />
        </View>

        <FadeInImage
          uri={pokemon.picture}
          style={styles.pkdCardContainer__Image}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  pkdCardContainer: {
    marginHorizontal: 10,

    height: 120,
    width: 160,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  pkdCardContainer__Name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    top: 20,
    left: 10,
  },
  pkdCardContainer__Pokebola: {
    width: 100,
    height: 100,
    opacity: 0.7,
    position: 'absolute',
    bottom: -20,
    right: -20,
  },
  pkdCardContainer__PokebolaContainer: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 0,
    right: 0,
    overflow: 'hidden',
  },
  pkdCardContainer__Image: {
    width: 120,
    height: 120,
    position: 'absolute',
    right: -8,
  },
});
