import type { PokemonMove } from '../interfaces/Move'
import { MoveCategory } from './move-category'
import { PokemonType } from './pokemon-type'

export const pokemonMove: Record<string, PokemonMove> = {
  Tackle: {
    name: 'Tackle',
    type: PokemonType.Normal,
    category: MoveCategory.Physical,
    powerPoints: 35,
    power: 40,
    accuracy: 100,
  },
}
