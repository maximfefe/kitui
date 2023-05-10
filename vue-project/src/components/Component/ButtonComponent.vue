<template>
    <button :style="buttonStyle">Cliquez ici</button>
</template>

<script>
import {useKituiStore} from '@/stores/kitui'
import {mapStores} from 'pinia'
export default {
    computed: {
        ...mapStores(useKituiStore),
        buttonStyle() {
            const button = this.kituiStore.kitui.component.bouton
            const color = this.kituiStore.kitui.colors.accent
            const fontFamily = this.kituiStore.kitui.fonts.text.fontFamily
            return {
                fontSize: button.fontSize + 'px',
                backgroundColor: button.backgroundColor,
                color: color,
                fontFamily: fontFamily,
                borderRadius: button.borderRadius + 'px',
                padding: button.padding + 'px',
                margin: button.margin + 'px'
            }
        }
    }
}
</script>
