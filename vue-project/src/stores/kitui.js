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
          "main": "#282650",
          "lighter": "#d7d9af",
          "darker": "#00001e"
        },
        light:{
          "main": "#c3c7e9",
          "lighter": "#f5f9ff",
          "darker": "#3c3816"
        },
        accent: "#a2aea3",
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
          backgroundColor: "#8274c8",
          color: "#1b1924",
          borderRadius: '20',
          padding: '10',
          margin: '10'
        },
        card:{
          borderRadius: '30',
          padding: '30',
          margin: '5'
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