<template>
    <div class="border-success" :style="marginStyle">
        <div class="border-info" :style="paddingStyle">
            <TitleComponent reductSize="0.8">
                <h3>Lorem ipsum dolor</h3>
            </TitleComponent>
            <TextComponent>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat odit non minima mollitia sint deleniti in facere, possimus atque, veniam illum, voluptate dignissimos repellendus quasi perspiciatis nisi distinctio dolor accusantium?</TextComponent>
        </div>
    </div>
</template>

<script>
import {useKituiStore} from '@/stores/kitui'

import {mapStores} from 'pinia'
export default {
    computed: {
        ...mapStores(useKituiStore),
        marginStyle() {
            const container = this.kituiStore.kitui.layout.container
            return {
                borderRadius: '6px',
                borderLeftWidth: container.marginX + 'px',
                borderRightWidth: container.marginX + 'px',
                borderTopWidth: container.marginY + 'px',
                borderBottomWidth: container.marginY + 'px',
            }
        },
        paddingStyle() {
            const container = this.kituiStore.kitui.layout.container
            return {
                borderRadius: '6px',
                maxWidth: container.maxWidth + "%",
                borderLeftWidth: container.paddingX + 'px',
                borderRightWidth: container.paddingX + 'px',
                borderTopWidth: container.paddingY + 'px',
                borderBottomWidth: container.paddingY + 'px',
            }
        }
    }
}
</script>
