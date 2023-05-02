<template>
    <div :style="cardStyle">
        <h3>Lorem ipsum dolor</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis eos consequuntur ratione a, esse laudantium veritatis. Qui rerum sunt blanditiis tenetur facere fuga voluptates nam distinctio, inventore corporis voluptatum. Enim?</p>
    </div>
</template>

<script>
import {useKituiStore} from '../../stores/kitui'
import {useIsdarkmodeStore} from '../../stores/isDarkMode'

import {mapStores} from 'pinia'
export default {
    computed: {
        ...mapStores(useKituiStore),
        ...mapStores(useIsdarkmodeStore),
        cardStyle() {
            const card = this.kituiStore.kitui.component.card
            const colors = this.kituiStore.kitui.colors
            const isDarkMode = this.isdarkmodeStore.isdarkmode

            return {
                borderRadius: card.borderRadius + 'px',
                padding: card.padding + 'px',
                margin: card.margin + 'px',
                color: isDarkMode ? colors.dark.lighter : colors.light.darker,
                backgroundColor: isDarkMode ? colors.dark.darker : colors.light.lighter,
            }
        }
    }
}
</script>
