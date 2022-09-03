import {useEffect, useRef, useState} from 'react';
import {pokemonApi} from '../api/pokemonApi';
import {
  PayloadPokemon,
  PayloadPokemons,
  Result,
} from '../interfaces/pokemonInterfaces';

export const usePokemonPaginate = () => {
  const [payloadPokemon, setPayloadPokemon] = useState<PayloadPokemon>([]);
  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');

  useEffect(() => {
    loadPokemons();
  }, []);

  const loadPokemons = async () => {
    const resp = await pokemonApi.get<PayloadPokemons>(nextPageUrl.current);
    nextPageUrl.current = resp.data.next;

    mapPayloadPokemon(resp.data.results);
  };

  const mapPayloadPokemon = (pokemonList: Result[]) => {
    pokemonList.forEach(pokemon => {
      console.log(pokemon.name);
    });
  };
};
