<template>
    <div :style="gridStyleTest">
        <slot></slot>
    </div>
</template>


<script>
import {useKituiStore} from '@/stores/kitui'
import {mapStores} from 'pinia'
export default {
    computed: {
        ...mapStores(useKituiStore),
        gridStyleTest() {
            const grid = this.kituiStore.kitui.layout.grid
            return {
                display: `grid`,
                gridTemplateColumns: `repeat(${grid.nbColumn}, 1fr)`,
                gridColumnGap: `${grid.gridColumnGab}px`,
                gridRowGap: `${grid.gridRowGab}px`,
                justifyItems: 'center',
            }
        }
    }
}
</script>
