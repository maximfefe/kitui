<template>
    <div class="rounded-box bg-base-200 p-10">
        <h2>Formulaire de police</h2>
        <h3>Titre :</h3>
        <label for="fontSize">Taille max : {{ titleFontSize }}px</label>
        <input class="range range-success" type="range" id="fontSize" v-model="titleFontSize" min="10" max="100">
        <br>
        <label for="font">Police :</label><br>
        <select class="select select-warning select-sm w-full max-w-xs" id="font" v-model="titleFontFamily">
            <option value="Arial">Arial</option>
            <option value="Helvetica">Helvetica</option>
            <option value="Verdana">Verdana</option>
            <option value="Georgia">Georgia</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Courier New">Courier New</option>
            <option value="Lucida Console">Lucida Console</option>
            <option value="Tahoma">Tahoma</option>
            <option value="Trebuchet MS">Trebuchet MS</option>
            <option value="Impact">Impact</option>
            <option value="Comic Sans MS">Comic Sans MS</option>
        </select>
        <br>
        <label for="fontWeight">Graisse :</label><br>
        <select class="select select-info select-sm w-full max-w-xs" id="fontWeight" v-model="titleFontWeight">
            <option value="normal">Normal</option>
            <option value="bold">Gras</option>
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="300">300</option>
            <option value="400">400</option>
            <option value="500">500</option>
            <option value="600">600</option>
            <option value="700">700</option>
            <option value="800">800</option>
            <option value="900">900</option>
        </select>
        <h3>Paragraphe :</h3>
        <label for="textFontSize">Taille : {{ textFontSize }}px</label>
        <input class="range range-error" type="range" id="textFontSize" v-model="textFontSize" min="8" max="50">
        <br>
        <label for="textFontFamily">Police :</label><br>
        <select class="select select-secondary select-sm w-full max-w-xs" id="textFontFamily" v-model="textFontFamily">
            <option value="Arial">Arial</option>
            <option value="Helvetica">Helvetica</option>
            <option value="Verdana">Verdana</option>
            <option value="Georgia">Georgia</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Courier New">Courier New</option>
            <option value="Lucida Console">Lucida Console</option>
            <option value="Tahoma">Tahoma</option>
            <option value="Trebuchet MS">Trebuchet MS</option>
            <option value="Impact">Impact</option>
            <option value="Comic Sans MS">Comic Sans MS</option>
        </select>
    </div>
</template>

<script>
import {useKituiStore} from '../../stores/kitui'
import {mapStores} from 'pinia'
export default {
    
    data() {
        const kituiStore = useKituiStore()
        return {
            titleFontFamily: kituiStore.kitui.fonts.title.fontFamily,
            titleFontSize: kituiStore.kitui.fonts.title.fontSize,
            titleFontWeight: kituiStore.kitui.fonts.title.fontWeight,
            textFontFamily: kituiStore.kitui.fonts.text.fontFamily,
            textFontSize: kituiStore.kitui.fonts.text.fontSize,
        }
    },
    watch: {
        titleFontFamily(value) {
            this.kituiStore.updateProperty('fonts.title.fontFamily', `${value}`)
        },
        titleFontSize(value) {
            this.kituiStore.updateProperty('fonts.title.fontSize', `${value}`)
        },
        titleFontWeight(value) {
            this.kituiStore.updateProperty('fonts.title.fontWeight', `${value}`)
        },
        textFontFamily(value) {
            this.kituiStore.updateProperty('fonts.text.fontFamily', `${value}`)
        },
        textFontSize(value) {
            this.kituiStore.updateProperty('fonts.text.fontSize', `${value}`)
        },
    },
    
    computed: {
        ...mapStores(useKituiStore),
    }
}
</script>
