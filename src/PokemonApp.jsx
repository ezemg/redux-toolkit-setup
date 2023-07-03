import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon/thunks.js';

export const PokemonApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  const {
    isLoading,
    pokemons = [],
    page,
  } = useSelector((state) => state.pokemons);

  return (
    <>
      <h1>Pokemon App</h1>
      <hr />
      <span>Loading: {isLoading ? 'True' : 'False'}</span>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>

      <button
        disabled={isLoading}
        onClick={() => {
          dispatch(getPokemons(page));
        }}>
        Next
      </button>
    </>
  );
};
