import type { Pokemon } from '../interfaces/Pokemon'
import { randomInt } from '../utils/random'

export function useHp() {
  async function setHp(pokemon: Pokemon) {
    const newHp = randomInt(0, pokemon.data.stats.hp)

    const difference = Math.abs(pokemon.currentHp - newHp)

    const sign = pokemon.currentHp > newHp ? -1 : 1

    for (let i = 0; i < difference; i++) {
      const promise = new Promise<void>((resolve) => {
        setTimeout(() => {
          pokemon.currentHp += sign
          resolve()
        }, 30)
      })

      await promise
    }
  }

  return {
    setHp,
  }
}
