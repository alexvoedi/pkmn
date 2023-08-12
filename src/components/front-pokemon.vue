<script setup lang="ts">
import type { Pokemon } from '../interfaces/Pokemon'

const props = defineProps<{
  pokemon: Pokemon
}>()

const sprite = computed(() => {
  return `/sprites/pokemon/${props.pokemon.data.name.toLowerCase()}/front.png`
})
</script>

<template>
  <div style="grid-area: 1 / 1 / 2 / 2" class="flex items-center justify-center">
    <pokemon-stats :pokemon="props.pokemon" />
  </div>

  <div style="grid-area: 1 / 2 / 3 / 3" class="flex items-center justify-center relative">
    <img :src="sprite" class="w-50% transform transform-gpu translate-y-8 image-render-pixel absolute">
  </div>
</template>

<style>

</style>
