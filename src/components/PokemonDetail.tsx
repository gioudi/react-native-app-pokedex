import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {DetailPokemon} from '../interfaces/pokemonInterfaces';
import {FadeInImage} from './FadeInImage';

interface Props {
  payload: DetailPokemon;
}
export const PokemonDetail = ({payload}: Props) => {
  return (
    <ScrollView style={{...StyleSheet.absoluteFillObject}}>
      <View style={styles.pkdContainer__Detail}>
        <View>
          <Text style={{...styles.pkdContainer__Detail_Title}}>Types: </Text>
          {/* Types */}
          <View style={{flexDirection: 'row'}}>
            {payload.types.map(({type}) => (
              <Text
                style={{...styles.pkdContainer__Detail_Regular}}
                key={type.name}>
                {type.name}
              </Text>
            ))}
          </View>
        </View>

        <View>
          <Text style={{...styles.pkdContainer__Detail_Title}}>Weight: </Text>
          <Text style={{...styles.pkdContainer__Detail_Regular}}>
            {payload.weight}
          </Text>
        </View>

        <View>
          <Text style={{...styles.pkdContainer__Detail_Title}}>Sprites: </Text>

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{}}>
            <FadeInImage
              uri={payload.sprites.front_default}
              style={{...styles.pkdContainer__Detail_sprite}}
            />
            <FadeInImage
              uri={payload.sprites.back_default}
              style={{...styles.pkdContainer__Detail_sprite}}
            />
            <FadeInImage
              uri={payload.sprites.back_shiny}
              style={{...styles.pkdContainer__Detail_sprite}}
            />
            <FadeInImage
              uri={payload.sprites.front_shiny}
              style={{...styles.pkdContainer__Detail_sprite}}
            />
          </ScrollView>
        </View>

        <View>
          <Text style={{...styles.pkdContainer__Detail_Title}}>
            General Skills:
          </Text>
          <View style={{flexDirection: 'row'}}>
            {payload.abilities.map(({ability}) => (
              <Text
                style={{...styles.pkdContainer__Detail_Regular}}
                key={ability.name}>
                {ability.name}
              </Text>
            ))}
          </View>
        </View>
        <View>
          <Text style={{...styles.pkdContainer__Detail_Title}}>Moves:</Text>
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            {payload.moves.map(({move}) => (
              <Text
                style={{...styles.pkdContainer__Detail_Regular}}
                key={move.name}>
                {move.name}
              </Text>
            ))}
          </View>
        </View>
        <View>
          <Text style={{...styles.pkdContainer__Detail_Title}}>Stats:</Text>
          <View style={{}}>
            {payload.stats.map((stat, i) => (
              <View key={stat.stat.name + i} style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    ...styles.pkdContainer__Detail_Regular,
                    marginRight: 10,
                    width: 150,
                  }}
                  key={stat.stat.name}>
                  {stat.stat.name}
                </Text>
                <Text
                  style={{
                    ...styles.pkdContainer__Detail_Regular,
                    fontWeight: '600',
                  }}>
                  {stat.base_stat}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Sprite Final */}
        <View style={{marginBottom: 20, alignItems: 'center'}}>
          <FadeInImage
            uri={payload.sprites.front_default}
            style={{...styles.pkdContainer__Detail_sprite}}
          />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  pkdContainer__Detail: {
    marginHorizontal: 20,
    marginTop: 350,
  },
  pkdContainer__Detail_Title: {
    fontSize: 36,
    marginBottom: 24,
    fontWeight: '700',
    color: 'black',
  },
  pkdContainer__Detail_Regular: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 14,
    marginRight: 8,
    color: 'black',
  },
  pkdContainer__Detail_sprite: {
    width: 100,
    height: 100,
  },
});
