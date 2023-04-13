import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';
interface State {
  slip: Slip[],
}

export const useAdviseStore = defineStore('advise', {
  state: (): State => {
    return {
      slip:[]
    }
  },
  getters:{
    getAdvise(state){
      return state.slip;
    }
  },
  actions:{
    async adviceSlip(){
      let url='https://api.adviceslip.com/advice'
      return await axios.get(url).then(({data})=>{
        console.log(data)
        this.slip=data[0]
      })
    }
  }
})

interface Slip {
  advice: string
  id: number
}
