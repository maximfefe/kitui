<template>
    <div class="rounded-box bg-base-200 p-10">
        <h2>Formulaire pour le Button</h2>
        <form>
            <label for="size">Taille :</label>
            <input type="range" id="size" class="range range-accent" v-model="fontSize" min="10" max="100">
            <br>
            <label for="bg-color">Couleur de fond :</label><br>
            <input type="color" id="bg-color" class="rounded" v-model="backgroundColor">
            <br>
            <label for="text-color">Couleur de texte :</label><br>
            <input type="color" class="rounded" id="text-color" v-model="color">
            <br>
            <label for="border-radius">Arrondi de bordure :</label>
            <input type="range" class="range range-secondary" id="border-radius" v-model="borderRadius" min="0" max="50">
            <br>
            <label for="padding">Padding :</label>
            <input type="range" class="range range-warning" id="padding" v-model="padding" min="0" max="50">
            <br>
            <label for="margin">Marge :</label>
            <input type="range" class="range range-info" id="margin" v-model="margin" min="0" max="50">
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
            fontSize: kituiStore.kitui.component.bouton.fontSize,
            backgroundColor: kituiStore.kitui.component.bouton.backgroundColor,
            color: kituiStore.kitui.component.bouton.color,
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
        color(value) {
            this.kituiStore.updateProperty('component.bouton.color', `${value}`)
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
