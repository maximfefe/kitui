<template>
    <div class="rounded-box bg-base-200 p-10">
        <h2>Formulaire du conteneur</h2>
        <form>
            <label for="margin-y">Margin horizontal : {{marginX}}px</label><br>
            <input type="range" class="range range-success" id="margin-x" v-model="marginX" min="0" max="50">
            <label for="margin-y">Margin veritcale : {{marginY}}px</label><br>
            <input type="range" class="range range-success" id="margin-y" v-model="marginY" min="0" max="50">
            <label for="padding-x">Padding horizontal : {{paddingX}}px</label><br>
            <input type="range" class="range range-info" id="padding-x" v-model="paddingX" min="0" max="50">
            <label for="padding-y">Padding veritcale : {{paddingY}}px</label><br>
            <input type="range" class="range range-info" id="padding-y" v-model="paddingY" min="0" max="50">
            <label for="max-width">Taille maximale du conteneur: {{maxWidth}}%</label><br>
            <input type="range" class="range range-warning" id="max-width" v-model="maxWidth" min="0" max="100">
        </form>
    </div>
</template>
<script>
import {useKituiStore} from '../../stores/kitui'
import {mapStores} from 'pinia'
export default {
    
    data() {
        const kituiStore = useKituiStore()
        return {
            marginX: kituiStore.kitui.layout.container.marginX,
            marginY: kituiStore.kitui.layout.container.marginY,
            paddingX: kituiStore.kitui.layout.container.paddingX,
            paddingY: kituiStore.kitui.layout.container.paddingY,
            maxWidth: kituiStore.kitui.layout.container.maxWidth,
        }
    },
    watch: {
        marginX(value) {
            this.kituiStore.updateProperty('layout.container.marginX', `${value}`)
        },
        marginY(value) {
            this.kituiStore.updateProperty('layout.container.marginY', `${value}`)
        },
        paddingX(value) {
            this.kituiStore.updateProperty('layout.container.paddingX', `${value}`)
        },
        paddingY(value) {
            this.kituiStore.updateProperty('layout.container.paddingY', `${value}`)
        },
        maxWidth(value) {
            this.kituiStore.updateProperty('layout.container.maxWidth', `${value}`)
        }
    },
    computed: {
        ...mapStores(useKituiStore),
    }
}
</script>
