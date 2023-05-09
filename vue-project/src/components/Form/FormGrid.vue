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
            <label for="gridcolumngab">Marge entre les colonnes : {{gridColumnGab}}px</label><br>
            <input type="range" class="range range-success" id="gridcolumngab" v-model="gridColumnGab" min="0" max="50">
            <label for="gridrowgab">Marge entre les rangées : {{gridRowGab}}px</label><br>
            <input type="range" class="range range-info" id="gridrowgab" v-model="gridRowGab" min="0" max="50">
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
            gridColumnGab: kituiStore.kitui.layout.grid.gridColumnGab,
            gridRowGab: kituiStore.kitui.layout.grid.gridRowGab,
        }
    },
    watch: {
        nbColumn(value) {
            this.kituiStore.updateProperty('layout.grid.nbColumn', `${value}`)
        },
        gridColumnGab(value) {
            this.kituiStore.updateProperty('layout.grid.gridColumnGab', `${value}`)
        },
        gridRowGab(value) {
            this.kituiStore.updateProperty('layout.grid.gridRowGab', `${value}`)
        },
    },
    computed: {
        ...mapStores(useKituiStore),
    }
}
</script>
