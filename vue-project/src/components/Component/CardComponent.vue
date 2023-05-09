<template>
    <div :style="cardStyle">
        <TitleComponent reductSize="0.8">
            <h3>Lorem ipsum dolor</h3>
        </TitleComponent>
        <slot name="content"></slot>
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
