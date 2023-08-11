import type { Trainer } from './Trainer'

export interface Battle {
  trainers: {
    bottom: {
      data: Trainer
      currentPokemonIndex: number
    }
    top: {
      data: Trainer
      currentPokemonIndex: number
    }
  }
  turn: number
}
