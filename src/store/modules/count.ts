import { defineStore } from 'pinia'

const useCountStore = defineStore('count', {
  state: () => {
    return {
      count: 0
    }
  },
  getters: {
    double: (state) => {
      return state.count * 2
    }
  },
  actions: {
    increment() {
      this.count ++
    }
  }
})

export default useCountStore