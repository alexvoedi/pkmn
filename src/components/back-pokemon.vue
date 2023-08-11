<script setup lang="ts">
import type { Pokemon } from '../interfaces/Pokemon'

const props = defineProps<{
  pokemon: Pokemon
}>()

const sprite = computed(() => {
  return `/sprites/pokemon/${props.pokemon.data.name.toLowerCase()}/back.png`
})
</script>

<template>
  <div style="grid-area: 2 / 1 / 4 / 2" class="flex items-end justify-center relative">
    <img :src="sprite" class="w-50% transform transform-gpu image-render-pixel absolute">
  </div>

  <div style="grid-area: 3 / 2 / 4 / 3" class="flex items-center justify-center">
    <pokemon-stats :pokemon="props.pokemon" show-hp-value />
  </div>
</template>

<style>

</style>
