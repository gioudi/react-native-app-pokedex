import React from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/IndexNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FadeInImage} from '../components/FadeInImage';
import {usePokemon} from '../hooks/usePokemon';
import {PokemonDetail} from '../components/PokemonDetail';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

export const DetailScreen = ({navigation, route}: Props) => {
  const {payloadPokemon, color} = route.params;
  const {name, id, picture} = payloadPokemon;
  const top = useSafeAreaInsets();
  const {pokemon, isLoading} = usePokemon(id);
  return (
    <View style={{flex: 1}}>
      {/* Header */}
      <View style={{...styles.pkdDetailContainer, backgroundColor: color}}>
        {/* BackButton */}
        <TouchableOpacity
          onPress={() => navigation.pop()}
          activeOpacity={0.6}
          style={{...styles.pkdDetailContainer__Back, top: +10}}>
          <Icon name="arrow-back-outline" color="white" size={38} />
        </TouchableOpacity>

        {/* Name */}
        <Text style={{...styles.pkdDetailContainer__Name, top: +25}}>
          {name + '\n'}#{id}
        </Text>

        {/* Pokebola */}

        <Image
          source={require('../assets/assets/pokebola-blanca.png')}
          style={{...styles.pkdDetailContainer__Pokebola}}
        />

        {/* Pokemon */}

        <FadeInImage
          uri={picture}
          style={{...styles.pkdDetailContainer__Pokemon}}
        />
      </View>
      {/* Body */}
      {isLoading ? (
        <View style={{...styles.pkdDetailContainer__Load}}>
          <ActivityIndicator color={color} size={50} />
        </View>
      ) : (
        <PokemonDetail payload={pokemon} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  pkdDetailContainer: {
    height: 370,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
    borderBottomLeftRadius: 1000,
    borderBottomRightRadius: 1000,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  pkdDetailContainer__Back: {
    position: 'absolute',
    left: 20,
  },
  pkdDetailContainer__Name: {
    color: 'white',
    fontSize: 40,
    alignSelf: 'flex-start',
    left: 20,
  },
  pkdDetailContainer__Pokebola: {
    width: 250,
    height: 250,
    bottom: -20,
    opacity: 0.65,
  },
  pkdDetailContainer__Pokemon: {
    width: 250,
    height: 250,
    position: 'absolute',
    bottom: -15,
  },
  pkdDetailContainer__Load: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
