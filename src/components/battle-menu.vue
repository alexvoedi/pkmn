<script setup lang="ts">
enum MenuState {
  Main,
  Attacks,
}

const menuState = ref(MenuState.Attacks)

const menu = computed(() => {
  switch (menuState.value) {
    case MenuState.Main:
      return defineAsyncComponent(() => import('./battle-menu/main.vue'))
    case MenuState.Attacks:
      return defineAsyncComponent(() => import('./battle-menu/attacks.vue'))
    default:
      throw new Error(`Unknown menu state: ${menuState.value}`)
  }
})
</script>

<template>
  <section class="bg-black p-2.5vmin">
    <component :is="menu" />
  </section>
</template>

<style>

</style>
