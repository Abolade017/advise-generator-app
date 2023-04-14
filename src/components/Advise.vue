<script setup lang="ts">
import { computed } from 'vue'
interface Slip {
  advice: string,
  id: string | number
}
const props = defineProps<{ slip: Slip }>()
const adviceId = computed(() => { return 'Advice' + '  ' + `#${props.slip.id}` })
</script>

<template>
  <div class="mx-auto max-w-7xl my-48 px-6">
    <div class="bg-neutral-dark-grayish-blue rounded-xl relative">
      <h1 class="text-center uppercase text-neon-green pt-14 pb-8 tracking-widest ">{{ adviceId }}</h1>
      <p class="text-quote text-light-cyan text-center px-6 md:px-40">{{ props.slip.advice }}</p>
      <div class="md:flex justify-center items-center hidden pt-10 pb-20"><img
          src="../assets/images/pattern-divider-desktop.svg" alt="pattern-divider" class="w-full px-10"></div>
      <div class="flex justify-center items-center md:hidden pt-10 pb-20"><img
          src="../assets/images/pattern-divider-mobile.svg" class="w-full px-5" alt="pattern-divider"></div>
      <slot />
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400&display=swap');

h1,
p {
  font-family: 'Ubuntu', sans-serif;
}
</style>
