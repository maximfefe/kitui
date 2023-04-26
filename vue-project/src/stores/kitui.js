import { defineStore } from 'pinia'

export const useKituiStore = defineStore('kitui', {
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
          fontSize: '20',
          backgroundColor: "#007bff",
          color: "#ffffff",
          borderRadius: '2',
          padding: '10',
          margin: '10'
        },
        card:{
          backgroundColor: "#007bff",
          borderRadius: '10',
          padding: '10',
          margin: '10'
        }
      }
    }
  }),
  actions: {
    updateProperty(prop, value) {
      function updateObject(obj, prop, value) {
        if (typeof prop === 'string') {
          prop = prop.split('.')
        }
        if (prop.length > 1) {
          var e = prop.shift()
          updateObject(obj[e], prop, value)
        } else {
          obj[prop[0]] = value
        }
      }
      updateObject(this.kitui, prop, value)
    },
  }
})