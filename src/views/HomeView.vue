<script setup lang="ts">
import Advise from '@/components/Advise.vue';
import axios from 'axios'
import { onUpdated, onMounted, reactive, ref } from 'vue';

interface Advise {
  advice: string,
  id: string
}
let advice: Advise = reactive(
  {
    advice: '',
    id: ''
  }
)
async function getAdvice() {
  return await axios.get(`https://api.adviceslip.com/advice
`).then(({ data }) => {
    console.log(data)
    advice = {
      advice: data.slip.advice,
      id: data.slip.id
    }

  })
}
onUpdated(() => {
  return { getAdvice, advice }
})
</script>

<template>
  <main>
    <Advise v-if="advice" :advice="advice.advice" :id="advice.id">

      <div class="absolute -bottom-7 md:-bottom-8 left-mobile md:left-desktop">
        <button class="rounded-full w-14 h-14 md:h-20 md:w-20 bg-neon-green flex justify-center items-center"
          @click="getAdvice"><img src="../assets/images/icon-dice.svg" alt="dice-icon"></button>
      </div>
    </Advise>
  </main>
</template>
