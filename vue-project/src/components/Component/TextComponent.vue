<template>
    <p :style="textStyle"><slot></slot></p>
</template>
<script>
import {useKituiStore} from '@/stores/kitui'
import {mapStores} from 'pinia'
export default {
    props:['text'],
    computed: {
        ...mapStores(useKituiStore),
        textStyle() {
            const text = this.kituiStore.kitui.fonts.text
            return {
                fontFamily: text.fontFamily,
                fontSize: `${text.fontSize}px`,
                fontWeight: text.fontWeight,
            }
        }
    }
}
</script>