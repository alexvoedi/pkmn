<script setup lang="ts">
import { MenuState } from '../../data/menu-state'

const emit = defineEmits<{
  setMenuState: [menuState: MenuState]
}>()

const items = ref([
  {
    name: 'Fight',
    action: () => emit('setMenuState', MenuState.Fight),
  },
  {
    name: 'Pokemon',
    action: () => emit('setMenuState', MenuState.Pokemon),
  },
  {
    name: 'Bag',
    action: () => emit('setMenuState', MenuState.Bag),
  },
  {
    name: 'Run',
    action: () => null,
  },
])

const selection = ref(0)

onMounted(() => {
  window.addEventListener('keydown', (event: KeyboardEvent) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      selection.value = (selection.value + 2) % 4
    }
    else if (event.key === 'ArrowUp') {
      event.preventDefault()
      selection.value = (selection.value + 2) % 4
    }
    else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      selection.value = (selection.value + 3) % 4
    }
    else if (event.key === 'ArrowRight') {
      event.preventDefault()
      selection.value = (selection.value + 1) % 4
    }
    else if (event.key === 'Enter') {
      event.preventDefault()
      items.value[selection.value].action()
    }
  })
})
</script>

<template>
  <div class="bg-white text-true-gray-800 w-full h-full rounded-4vmin border-1vmin border-#00f898 p-3vmin grid grid-cols-2 grid-rows-2 items-center justify-items-start">
    <button
      v-for="(item, index) of items" :key="index" autofocus :class="[
        items[selection] === item ? 'underline' : '',
      ]" @click="item.action()"
    >
      {{ item.name }}
    </button>
  </div>
</template>

<style lang="postcss">
button {
  @apply px-10vmin uppercase;
}

button:focus {
  outline: none;
}
</style>
