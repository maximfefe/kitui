<template>
    <div class="rounded-box bg-base-200 p-10">
        <h2 class="text-xl">Formulaire des couleurs</h2>
        <form>
            <label for="bg-color">Couleur sombre : {{darkColor}}</label><br>
            <input type="color" id="bg-color" class="mx-5 rounded" v-model="darkColor">
            <input type="color" id="bg-color" class="mx-5 rounded" v-model="kituiStore.kitui.colors.dark.lighter" disabled>
            <input type="color" id="bg-color" class="mx-5 rounded" v-model="kituiStore.kitui.colors.dark.darker" disabled>
            <br>
            <label for="bg-color">Couleur clair : {{lightColor}}</label><br>
            <input type="color" id="bg-color" class="mx-5 rounded" v-model="lightColor">
            <input type="color" id="bg-color" class="mx-5 rounded" v-model="kituiStore.kitui.colors.light.lighter" disabled>
            <input type="color" id="bg-color" class="mx-5 rounded" v-model="kituiStore.kitui.colors.light.darker" disabled>
            <br>
            <label for="bg-color">Couleur accent : {{accentColor}}</label><br>
            <input type="color" id="bg-color" class="mx-5 rounded" v-model="accentColor">
           
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
            darkColor: kituiStore.kitui.colors.dark.main,
            lightColor: kituiStore.kitui.colors.light.main,
            accentColor: kituiStore.kitui.colors.accent,
        }
    },
    watch: {
        darkColor(value) {
            const {
                contrastColor: contrastColor,
                darkerColor: darkerColor,
                lighterColor: lighterColor,
            } = this.getLightAndDarkColors(value)
            this.kituiStore.updateProperty('colors.dark.main', `${value}`)
            this.kituiStore.updateProperty('colors.dark.lighter', `${contrastColor}`)
            this.kituiStore.updateProperty('colors.dark.darker', `${darkerColor}`)
        },
        lightColor(value) {
            const {
                contrastColor: contrastColor,
                darkerColor: darkerColor,
                lighterColor: lighterColor,
            } = this.getLightAndDarkColors(value)
            this.kituiStore.updateProperty('colors.light.main', `${value}`)
            this.kituiStore.updateProperty('colors.light.lighter', `${lighterColor}`)
            this.kituiStore.updateProperty('colors.light.darker', `${contrastColor}`)
        },
        accentColor(value) {
            this.kituiStore.updateProperty('colors.accent', `${value}`)
        },
    },
    methods: {
        getLightAndDarkColors(primaryColor) {
             // Convertir la couleur primaire en valeurs RGB
            const rgb = {
                r: parseInt(primaryColor.substr(1, 2), 16),
                g: parseInt(primaryColor.substr(3, 2), 16),
                b: parseInt(primaryColor.substr(5, 2), 16),
            };

            // Calculer une couleur plus claire en ajoutant 50 à chaque canal RGB
            const lighterColor = this.rgbToHex(
                Math.min(rgb.r + 50, 255),
                Math.min(rgb.g + 50, 255),
                Math.min(rgb.b + 50, 255)
            );

            // Calculer une couleur plus sombre en soustrayant 50 à chaque canal RGB
            const darkerColor = this.rgbToHex(
                Math.max(rgb.r - 50, 0),
                Math.max(rgb.g - 50, 0),
                Math.max(rgb.b - 50, 0)
            );

            // Calculer une couleur de contraste en inversant la couleur primaire
            const contrastColor = this.invertColor(primaryColor);

            // Retourner un objet contenant les deux couleurs
            return {
                contrastColor: contrastColor,
                darkerColor: darkerColor,
                lighterColor: lighterColor,
            };
        },
        rgbToHex(r, g, b) {
            const componentToHex = (c) => {
                const hex = c.toString(16);
                return hex.length === 1 ? "0" + hex : hex;
            };
            return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
        },
        invertColor(hex) {
            if (hex.indexOf("#") === 0) {
                hex = hex.slice(1);
            }
            // convertir la couleur hexadécimale en valeur RGB
            const r = parseInt(hex.substring(0, 2), 16);
            const g = parseInt(hex.substring(2, 4), 16);
            const b = parseInt(hex.substring(4, 6), 16);
            // inverser les valeurs RGB
            const inverseR = 255 - r;
            const inverseG = 255 - g;
            const inverseB = 255 - b;
            // convertir les valeurs RGB inversées en couleur hexadécimale
            const inverseHex = this.rgbToHex(inverseR, inverseG, inverseB);
            return inverseHex;
        },
    },
    computed: {
        ...mapStores(useKituiStore),
    },
}
</script>

<style>

/*
 * CUSTOM STYLE INPUT COLOR
 */

 input[type="color"] {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    background: none;
    border: 0;
    cursor: pointer;
    height: 3em;
    padding: 0;
    width: 3em;
}


::-webkit-color-swatch-wrapper {
    padding: 0;
}

::-webkit-color-swatch{
    border: 0;
    border-radius:50%;
}

::-moz-color-swatch,
::-moz-focus-inner{
    border: 0;
}

::-moz-focus-inner{
    padding: 0;
}
</style>
