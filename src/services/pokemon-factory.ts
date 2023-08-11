import type { Gender } from '../data/gender'
import { pokedex } from '../data/pokedex'
import type { PokemonMove } from '../interfaces/Move'
import type { Pokemon } from '../interfaces/Pokemon'

export const PokemonFactory = {
  create: ({
    id,
    level,
    gender,
    moves,
  }: {
    id: number
    level: number
    gender: Gender
    moves: PokemonMove[]
  }): Pokemon => {
    const pokemonData = Object.values(pokedex).find(
      pokemon => pokemon.id === id,
    )

    if (!pokemonData)
      throw new Error('Pokemon not found')

    if (level < 1 || level > 100 || !Number.isInteger(level))
      throw new Error('Invalid level')

    return {
      data: { ...pokemonData },
      gender,
      level,
      ep: 0,
      currentHp: pokemonData.stats.hp,
      status: null,
      moves: [...moves],
    }
  },
}
