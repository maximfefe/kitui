<template>
    <div class="rounded-box bg-base-200 p-10">
        <h2 class="text-xl">Formulaire de grille</h2>
        <form>
            <label for="nbcolumn">Nombre de colonne : {{nbColumn}}</label><br>
            <input type="range" id="nbcolumn" class="range range-info" v-model="nbColumn" min="1" max="5"  />
            <div class="w-full flex justify-between text-xs px-2">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
            </div>
            <label for="gridcolumngap">Marge entre les colonnes : {{gridColumnGap}}px</label><br>
            <input type="range" class="range range-success" id="gridcolumngap" v-model="gridColumnGap" min="0" max="50">
            <label for="gridrowgap">Marge entre les rangées : {{gridRowGap}}px</label><br>
            <input type="range" class="range range-info" id="gridrowgap" v-model="gridRowGap" min="0" max="50">
        </form>
    </div>
</template>
<script>
import {useKituiStore} from '@/stores/kitui'
import {mapStores} from 'pinia'
export default {
    
    data() {
        const kituiStore = useKituiStore()
        return {
            nbColumn: kituiStore.kitui.layout.grid.nbColumn,
            gridColumnGap: kituiStore.kitui.layout.grid.gridColumnGap,
            gridRowGap: kituiStore.kitui.layout.grid.gridRowGap,
        }
    },
    watch: {
        nbColumn(value) {
            this.kituiStore.updateProperty('layout.grid.nbColumn', `${value}`)
        },
        gridColumnGap(value) {
            this.kituiStore.updateProperty('layout.grid.gridColumnGap', `${value}`)
        },
        gridRowGap(value) {
            this.kituiStore.updateProperty('layout.grid.gridRowGap', `${value}`)
        },
    },
    computed: {
        ...mapStores(useKituiStore),
    }
}
</script>
