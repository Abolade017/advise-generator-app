<script setup lang="ts">
const props = defineProps<{ advice: string, id: string }>()
</script>

<template>
  <div class="mx-auto max-w-7xl my-48 px-4">
    <div class="bg-neutral-dark-grayish-blue rounded-xl relative">
      <h1 class="text-center uppercase text-neon-green pt-14 pb-8">Advise {{ props.id }}</h1>
      <p class="text-quote text-light-cyan text-center">{{ props.advice }}</p>
      <div class="md:flex justify-center items-center hidden pt-10 pb-20"><img
          src="../assets/images/pattern-divider-desktop.svg" alt="pattern-divider" class="w-full px-10"></div>
      <div class="flex justify-center items-center md:hidden pt-10 pb-20"><img
          src="../assets/images/pattern-divider-mobile.svg" class="w-full px-5" alt="pattern-divider"></div>
      <slot />
    </div>
  </div>
</template>

<style scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400&display=swap'); */
/* font-family: 'Ubuntu', sans-serif; */
</style>
