import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    kitui: {
      layout:{
        conteneur: {
          div:{
            "margin": "0px 0px",
            "padding": "0px 0px",
            "max-width":0,
          },
        },
        grid:{
          column:"",
          gab:""          
        }
      },
      colors:{
        dark:{
          "main": "grey",
          "lighter": "dark",
          "darker": "white"
        },
        light:{
          "main": "grey",
          "lighter": "white",
          "darker": "dark"
        },
        accent: "white",
      },
      fonts:{
        title:{
          "family": "",
          "size": "",
          "weight": "bold",
        },
        text:{
          "family": "",
          "size": "",
        }
        
      },
      component:{
        bouton:{
          "margin":"",
          "font-size":"",
          "border-radius":""
        },
        card:{
          "margin":"",
          "border-radius":""
        }
      }
    }
  }),
  actions: {
    setKitui(kitui){
      this.kitui = kitui;
    }
  }
})