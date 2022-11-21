import {useEffect, useState} from 'react';
import {pokemonApi} from '../api/pokemonApi';
import {DetailPokemon} from '../interfaces/pokemonInterfaces';

export const usePokemon = (id: string) => {
  const [isLoading, setisLoading] = useState(true);
  const [pokemon, setPokemon] = useState<DetailPokemon>({} as DetailPokemon);
  const loadPokemon = async () => {
    const resp = await pokemonApi.get<DetailPokemon>(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
    );
    setPokemon(resp.data);
    setisLoading(false);
  };
  useEffect(() => {
    loadPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isLoading,
    pokemon,
  };
};
