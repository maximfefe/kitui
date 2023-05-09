<template>
    <div class="rounded-box bg-base-200 p-10">
        <h2 class="text-xl">Formulaire de carte</h2>
        <form>
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
import {useKituiStore} from '../../stores/kitui'
import {mapStores} from 'pinia'
export default {
    
    data() {
        const kituiStore = useKituiStore()
        return {
            borderRadius: kituiStore.kitui.component.card.borderRadius,
            padding: kituiStore.kitui.component.card.padding,
            margin: kituiStore.kitui.component.card.margin
        }
    },
    watch: {
        borderRadius(value) {
            this.kituiStore.updateProperty('component.card.borderRadius', `${value}`)
        },
        padding(value) {
            this.kituiStore.updateProperty('component.card.padding', `${value}`)
        },
        margin(value) {
            this.kituiStore.updateProperty('component.card.margin', `${value}`)
        }
    },
    
    computed: {
        ...mapStores(useKituiStore),
    }
}
</script>
