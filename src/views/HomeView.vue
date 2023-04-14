<script setup lang="ts">
import Advise from '@/components/Advise.vue';
import axios from 'axios'
import { onMounted, reactive, ref } from 'vue';


const slip =
  ref(
    {
      advice: '',
      id: ''
    }
  )
async function getAdvice() {
  return await axios.get(`https://api.adviceslip.com/advice
`).then(({ data }) => {
    console.log(data)
    slip.value = {
      advice: data.slip.advice,
      id: data.slip.id
    }
    console.log(slip)
  })
}
onMounted(() => {
  return { getAdvice, slip }

})
</script>

<template>
  <main>
    <Advise :slip="slip" v-if="slip">

      <div class="absolute -bottom-7 md:-bottom-8 left-mobile md:left-desktop">
        <button class="rounded-full w-14 h-14 md:h-20 md:w-20 bg-neon-green flex justify-center items-center"
          @click="getAdvice"><img src="../assets/images/icon-dice.svg" alt="dice-icon"></button>
      </div>
    </Advise>
  </main>
</template>
