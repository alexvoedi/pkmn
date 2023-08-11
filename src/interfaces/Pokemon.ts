import type { Gender } from '../data/gender'
import type { Status } from '../data/status'
import type { PokemonMove } from './Move'
import type { PokemonData } from './PokemonData'

export interface Pokemon {
  data: PokemonData
  level: number
  gender: Gender
  ep: number
  currentHp: number
  status: null | Status
  moves: PokemonMove[]
}
