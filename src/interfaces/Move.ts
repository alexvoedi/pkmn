import type { MoveCategory } from '../data/move-category'
import type { PokemonType } from '../data/pokemon-type'

export interface PokemonMove {
  name: string
  type: PokemonType
  category: MoveCategory
  powerPoints: number
  power: number
  accuracy: number
}
