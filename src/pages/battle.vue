<script setup lang="ts">
import type { Pokemon } from '../interfaces/Pokemon'
import { Gender } from '../data/gender'
import { PokemonFactory } from '@/services/pokemon-factory'
import { pokemonMove } from '@/data/moves'
import { randomInt } from '@/utils/random'

const pokemonTeamA = reactive<Pokemon[]>([
  PokemonFactory.create({
    id: 1,
    level: 10,
    gender: Gender.Male,
    moves: [
      pokemonMove.Tackle,
    ],
  }),
])

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
</script>

<template>
  <div class="h-full w-full grid grid-rows-[2fr_1fr] grid-cols-1">
    <div class="grid grid-cols-[1fr_1fr] grid-rows-[1fr_1fr_1fr]">
      <template v-for="(member, index) in pokemonTeamA" :key="index">
        <front-pokemon :pokemon="member" />
      </template>

      <template v-for="(member, index) in pokemonTeamA" :key="index">
        <back-pokemon :pokemon="member" />
      </template>
    </div>

    <section class="bg-black">
      <button @click="setHp(pokemonTeamA[0])">
        x
      </button>
    </section>
  </div>
</template>

<style>
</style>
