<template>
    <div >
       <h1 :style="h1Style">Titre 1</h1>
       <h2 :style="h2Style">Titre 2</h2>
       <h3 :style="h3Style">Titre 3</h3>
       <h4 :style="h4Style">Titre 4</h4>
       <h5 :style="h5Style">Titre 5</h5>
       <h6 :style="h6Style">Titre 6</h6>
       <p :style="textStyle">Paragraphe Lorem</p>
    </div>
</template>

<script>
import {useKituiStore} from '../stores/kitui'
import {mapStores} from 'pinia'
export default {
    components:{
    },
    computed: {
        ...mapStores(useKituiStore),
        h1Style() {
            const title = this.kituiStore.kitui.fonts.title
            return {
                fontFamily: title.fontFamily,
                fontSize: `${title.fontSize}px`,
                fontWeight: title.fontWeight,
            }
        },
        h2Style() {
            const title = this.kituiStore.kitui.fonts.title
            return {
                fontFamily: title.fontFamily,
                fontSize: `${title.fontSize-4}px`,
                fontWeight: title.fontWeight,
            }
        },
        h3Style() {
            const title = this.kituiStore.kitui.fonts.title
            return {
                fontFamily: title.fontFamily,
                fontSize: `${title.fontSize-8}px`,
                fontWeight: title.fontWeight,
            }
        },
        h4Style() {
            const title = this.kituiStore.kitui.fonts.title
            return {
                fontFamily: title.fontFamily,
                fontSize: `${title.fontSize-12}px`,
                fontWeight: title.fontWeight,
            }
        },
        h5Style() {
            const title = this.kituiStore.kitui.fonts.title
            return {
                fontFamily: title.fontFamily,
                fontSize: `${title.fontSize-14}px`,
                fontWeight: title.fontWeight,
            }
        },
        h6Style() {
            const title = this.kituiStore.kitui.fonts.title
            return {
                fontFamily: title.fontFamily,
                fontSize: `${title.fontSize-16}px`,
                fontWeight: title.fontWeight,
            }
        },
        textStyle() {
            const text = this.kituiStore.kitui.fonts.text
            return {
                fontFamily: text.fontFamily,
                fontSize: `${text.fontSize}px`,
            }
        },
    }
}
</script>
