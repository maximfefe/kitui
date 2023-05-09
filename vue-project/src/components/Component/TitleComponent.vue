<template>
    <div :style="titleStyle">
        <slot></slot>
    </div>
</template>
<script>
import {useKituiStore} from '../../stores/kitui'
import {mapStores} from 'pinia'
export default {
    props:['reductSize'],
    computed: {
        ...mapStores(useKituiStore),
        titleStyle() {
            const title = this.kituiStore.kitui.fonts.title
            return {
                fontFamily: title.fontFamily,
                fontSize: `${title.fontSize * this.reductSize}px`,
                fontWeight: title.fontWeight,
            }
        }
    }
}
</script>