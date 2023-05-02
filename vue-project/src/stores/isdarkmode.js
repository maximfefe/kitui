import { defineStore } from 'pinia'

export const useIsdarkmodeStore = defineStore('isdarkmode', {
  state: () => ({
    isdarkmode : true,
  }),
  actions: {
    changeDarkmode(){
      this.isdarkmode = !this.isdarkmode;
    }
  }
})