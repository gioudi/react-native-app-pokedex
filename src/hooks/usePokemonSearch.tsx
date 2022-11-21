import {useEffect, useState} from 'react';
import {pokemonApi} from '../api/pokemonApi';
import {
  PayloadPokemon,
  PayloadPokemons,
  Result,
} from '../interfaces/pokemonInterfaces';

export const usePokemonSearch = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [payloadSearchPokemon, setPayloadSearchPokemon] =
    useState<PayloadPokemon>([]);

  useEffect(() => {
    loadPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadPokemons = async () => {
    const resp = await pokemonApi.get<PayloadPokemons>(
      'https://pokeapi.co/api/v2/pokemon?limit=1160',
    );
    mapPayloadPokemon(resp.data.results);
  };

  const mapPayloadPokemon = (pokemonList: Result[]) => {
    const newPokemonPayload: PayloadPokemon[] = pokemonList.map(
      ({name, url}) => {
        const urlParts = url.split('/');
        const id = urlParts[urlParts.length - 2];
        const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

        return {
          id,
          picture,
          name,
        };
      },
    );

    setPayloadSearchPokemon(newPokemonPayload);
    setIsFetching(false);
  };

  return {
    isFetching,
    payloadSearchPokemon,
  };
};
