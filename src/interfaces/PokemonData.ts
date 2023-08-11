import type { PokemonType } from '../data/pokemon-type'
import type { PokemonMove } from './Move'
import type { PokemonStats } from './PokemonStats'

export interface PokemonData {
  id: number
  name: string
  types: [PokemonType] | [PokemonType, PokemonType]
  stats: PokemonStats
  moveSet: Array<PokemonMove>
}
