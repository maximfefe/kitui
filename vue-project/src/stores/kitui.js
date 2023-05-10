import { defineStore } from 'pinia'

export const useKituiStore = defineStore('kitui', {
  state: () => ({
    kitui: {
      layout:{
        container: {
          "marginX": "20",
          "marginY": "20",
          "paddingX": "30",
          "paddingY": "30",
          "maxWidth": "100",
        },
        grid:{
          "nbColumn":"3",
          "gridColumnGap": "5",
          "gridRowGap": "10",
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
          "fontFamily": "Arial",
          "fontSize": "26",
          "fontWeight": "bold",
        },
        text:{
          "fontFamily": "Arial",
          "fontSize": "16",
        }
        
      },
      component:{
        bouton:{
          fontSize: '20',
          backgroundColor: "#8274c8",
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
    setKitUI(value){
      this.kitui = value;
    }
  }
})