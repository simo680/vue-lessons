import axios from "axios";
import { defineStore } from "pinia";


export const useCounterStore = defineStore('counterStore', {
       state: () => ({
              count: 4,
       }),
       getters: {
              doubleValue() {
                     return this.count ** 2
              }
       },
       actions: {
              increment() {
                     this.count++
              },
              decrement() {
                     this.count -= 1
              },
              changeValue(num) {
                     this.count = num
              },
              async getRandomValue() {
                     let url = 'https://www.randomnumberapi.com/api/v1.0/random?min=1&max=100';
                     let res = await axios.get(url);
                     this.count = res.data[0]
              }
       }
})