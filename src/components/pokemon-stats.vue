<script setup lang="ts">
import { Gender } from '../data/gender'
import type { Pokemon } from '../interfaces/Pokemon'

const props = defineProps<{
  pokemon: Pokemon
  showHpValue?: boolean
}>()

const hpBarColor = computed(() => {
  const { currentHp } = props.pokemon
  const { hp } = props.pokemon.data.stats

  return {
    'bg-#61df8f': currentHp > hp / 2,
    'bg-#f39c73': currentHp <= hp / 2,
    'bg-#f55d5d': currentHp <= hp / 4,
  }
})
</script>

<template>
  <div
    class="
      w-60%
      px-4
      py-3
      border-0.75vmin
      border-#263e0c
      text-#263e0c
      border-rounded-tr-1.5vmin
      border-rounded-bl-1.5vmin
      border-rounded-tl-3vmin
      border-rounded-br-3vmin
      bg-#f8f8d8
      font-bold
    "
  >
    <div class="flex justify-between">
      <div class="flex gap-1">
        <div class="uppercase">
          {{ pokemon.data.name }}
        </div>
        <div>
          <span v-if="pokemon.gender === Gender.Male">
            ♂
          </span>

          <span v-else-if="pokemon.gender === Gender.Female">
            ♀
          </span>
        </div>
      </div>

      <div>Lv{{ pokemon.level }}</div>
    </div>

    <div>
      <div class="h-2vmin bg-#263e0c flex gap-4px rounded-2 p-3px">
        <div class="text-#f39c73 text-1.5vmin vertical-middle text-center leading-1.2vmin px-8px">
          HP
        </div>
        <div class="w-full border-white border-0.3vmin rounded rounded">
          <div
            class="h-full rounded-l transition-all ease-linear" :class="{
              'rounded-r': pokemon.currentHp === pokemon.data.stats.hp,
              ...hpBarColor,
            }" :style="{
              width: `${(pokemon.currentHp / pokemon.data.stats.hp) * 100}%`,
            }"
          />
        </div>
      </div>
    </div>

    <div v-if="showHpValue">
      <div class="flex justify-end">
        <div>{{ pokemon.currentHp }} / {{ pokemon.data.stats.hp }}</div>
      </div>
    </div>
  </div>
</template>

<style>
</style>
