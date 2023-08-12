<script setup lang="ts">
import type { Pokemon } from '../interfaces/Pokemon'
import { Gender } from '../data/gender'
import { PokemonFactory } from '@/services/pokemon-factory'
import { pokemonMove } from '@/data/moves'

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

const pokemonTeamB = reactive<Pokemon[]>([
  PokemonFactory.create({
    id: 130,
    level: 10,
    gender: Gender.Female,
    moves: [
      pokemonMove.Tackle,
    ],
  }),
])
</script>

<template>
  <div class="h-full w-full grid grid-rows-[2fr_1fr] grid-cols-1">
    <div class="grid grid-cols-[1fr_1fr] grid-rows-[1fr_1fr_1fr] image-render-pixel" style="background-image: url('/bg/battle.png'); background-size: 100% 100%;">
      <template v-for="(member, index) in pokemonTeamA" :key="index">
        <front-pokemon :pokemon="member" />
      </template>

      <template v-for="(member, index) in pokemonTeamB" :key="index">
        <back-pokemon :pokemon="member" />
      </template>
    </div>

    <battle-menu />
  </div>
</template>

<style>
</style>
