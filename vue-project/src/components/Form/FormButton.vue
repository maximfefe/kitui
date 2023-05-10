<template>
    <div class="rounded-box bg-base-200 p-10">
        <h2 class="text-xl">Formulaire des boutons</h2>
        <form>
            <label for="size">Taille : {{fontSize}}px</label>
            <input type="range" id="size" class="range range-accent" v-model="fontSize" min="10" max="100">
            <br>
            <label for="bg-color">Couleur de fond : {{backgroundColor}}</label><br>
            <input type="color" id="bg-color" class="rounded" v-model="backgroundColor">
            <br>
            <label for="border-radius">Arrondi de bordure : {{borderRadius}}px</label>
            <input type="range" class="range range-secondary" id="border-radius" v-model="borderRadius" min="0" max="50">
            <br>
            <label for="padding">Padding : {{padding}}px</label>
            <input type="range" class="range range-warning" id="padding" v-model="padding" min="0" max="50">
            <br>
            <label for="margin">Marge : {{margin}}px</label>
            <input type="range" class="range range-info" id="margin" v-model="margin" min="0" max="50">
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
            fontSize: kituiStore.kitui.component.bouton.fontSize,
            backgroundColor: kituiStore.kitui.component.bouton.backgroundColor,
            borderRadius: kituiStore.kitui.component.bouton.borderRadius,
            padding: kituiStore.kitui.component.bouton.padding,
            margin: kituiStore.kitui.component.bouton.margin
        }
    },
    watch: {
        fontSize(value) {
            this.kituiStore.updateProperty('component.bouton.fontSize', `${value}`)
        },
        backgroundColor(value) {
            this.kituiStore.updateProperty('component.bouton.backgroundColor', `${value}`)
        },
        borderRadius(value) {
            this.kituiStore.updateProperty('component.bouton.borderRadius', `${value}`)
        },
        padding(value) {
            this.kituiStore.updateProperty('component.bouton.padding', `${value}`)
        },
        margin(value) {
            this.kituiStore.updateProperty('component.bouton.margin', `${value}`)
        }
    },
    
    computed: {
        ...mapStores(useKituiStore),
    }
}
</script>
