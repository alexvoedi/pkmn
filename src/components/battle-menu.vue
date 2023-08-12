<script setup lang="ts">
import { MenuState } from '../data/menu-state'

const menuState = ref(MenuState.Main)

const menu = computed(() => {
  switch (menuState.value) {
    case MenuState.Main:
      return defineAsyncComponent(() => import('./battle-menu/main.vue'))
    case MenuState.Fight:
      return defineAsyncComponent(() => import('./battle-menu/fight.vue'))
    default:
      throw new Error(`Unknown menu state: ${menuState.value}`)
  }
})

onMounted(() => {
  window.addEventListener('keydown', (event: KeyboardEvent) => {
    if (event.key === 'Backspace') {
      event.preventDefault()
      menuState.value = MenuState.Main
    }
  })
})
</script>

<template>
  <section class="bg-black p-2.5vmin text-6vmin font-bold">
    <component :is="menu" @set-menu-state="(state: MenuState) => menuState = state" />
  </section>
</template>

<style>

</style>
