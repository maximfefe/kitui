<template>
    <button :style="buttonStyle">Cliquez ici</button>
</template>

<script>
import {useKituiStore} from '../../stores/kitui'
import {mapStores} from 'pinia'
export default {
    computed: {
        ...mapStores(useKituiStore),
        buttonStyle() {
            const button = this.kituiStore.kitui.component.bouton
            // return button
            return {
                fontSize: button.fontSize + 'px',
                backgroundColor: button.backgroundColor,
                color: button.color,
                borderRadius: button.borderRadius + 'px',
                padding: button.padding + 'px',
                margin: button.margin + 'px'
            }
        }
    }
}
</script>
