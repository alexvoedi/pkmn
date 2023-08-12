<script setup lang="ts"></script>

<template>
  <div
    class="w-full h-full"
  >
    <main class="max-h-full max-w-full mx-auto aspect-ratio-4/3 bg-white">
      <router-view />
    </main>
  </div>
</template>

<style lang="postcss">
/* import pokemon font as monospace */
@font-face {
  font-family: 'Pokemon';
  src: url('/fonts/pokemon-rs.ttf');
}

html, body, #app {
  height: 100%;
  width: 100%;
  background-color: black;
  font-family: 'Pokemon';
  font-size: 3vmin;
  /* pointer-events: none; */
}
</style>
