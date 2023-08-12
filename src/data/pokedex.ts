import type { PokemonData } from '../interfaces/PokemonData'
import { pokemonMove } from './moves'
import { PokemonType } from './pokemon-type'

export const pokedex: Record<string, PokemonData> = {
  Bulbasaur: {
    id: 1,
    name: 'Bulbasaur',
    types: [PokemonType.Grass, PokemonType.Poison],
    stats: {
      hp: 45,
      attack: 49,
      defense: 49,
      specialAttack: 65,
      specialDefense: 65,
      speed: 45,
    },
    moveSet: [
      pokemonMove.Tackle,
    ],
  },
  Gyarados: {
    id: 130,
    name: 'Gyarados',
    types: [PokemonType.Water, PokemonType.Flying],
    stats: {
      hp: 95,
      attack: 125,
      defense: 79,
      specialAttack: 60,
      specialDefense: 100,
      speed: 81,
    },
    moveSet: [
      pokemonMove.Tackle,
    ],
  },
}
