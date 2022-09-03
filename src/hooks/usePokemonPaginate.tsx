import {useEffect, useRef, useState} from 'react';
import {pokemonApi} from '../api/pokemonApi';
import {
  PayloadPokemon,
  PayloadPokemons,
  Result,
} from '../interfaces/pokemonInterfaces';

export const usePokemonPaginate = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [payloadPokemon, setPayloadPokemon] = useState<PayloadPokemon>([]);
  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');

  useEffect(() => {
    loadPokemons();
  }, []);

  const loadPokemons = async () => {
    setIsLoading(true);
    const resp = await pokemonApi.get<PayloadPokemons>(nextPageUrl.current);
    nextPageUrl.current = resp.data.next;

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

    setPayloadPokemon([...payloadPokemon, ...newPokemonPayload]);
    setIsLoading(false);
  };

  return {
    isLoading,
    payloadPokemon,
    loadPokemons,
  };
};
