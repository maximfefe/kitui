<template>
    <div :style="containerStyle">
        <h2>Conteneur de démonstration</h2>
        <form>
            <label for="width">Largeur :</label>
            <input type="range" id="width" v-model="containerWidth" min="0" max="800">
            <br>
            <label for="height">Hauteur :</label>
            <input type="range" id="height" v-model="containerHeight" min="0" max="600">
            <br>
            <label for="marginTop">Marge supérieure :</label>
            <input type="range" id="marginTop" v-model="containerMarginTop" min="0" max="100">
            <br>
            <label for="marginBottom">Marge inférieure :</label>
            <input type="range" id="marginBottom" v-model="containerMarginBottom" min="0" max="100">
            <br>
            <label for="marginLeft">Marge gauche :</label>
            <input type="range" id="marginLeft" v-model="containerMarginLeft" min="0" max="100">
            <br>
            <label for="marginRight">Marge droite :</label>
            <input type="range" id="marginRight" v-model="containerMarginRight" min="0" max="100">
            <br>
            <label for="paddingTop">Rembourrage supérieur :</label>
            <input type="range" id="paddingTop" v-model="containerPaddingTop" min="0" max="50">
            <br>
            <label for="paddingBottom">Rembourrage inférieur :</label>
            <input type="range" id="paddingBottom" v-model="containerPaddingBottom" min="0" max="50">
            <br>
            <label for="paddingLeft">Rembourrage gauche :</label>
            <input type="range" id="paddingLeft" v-model="containerPaddingLeft" min="0" max="50">
            <br>
            <label for="paddingRight">Rembourrage droite :</label>
            <input type="range" id="paddingRight" v-model="containerPaddingRight" min="0" max="50">
            <br>
            <label for="borderWidth">Largeur de la bordure :</label>
            <input type="range" id="borderWidth" v-model="containerBorderWidth" min="0" max="20">
            <br>
            <label for="borderRadius">Rayon de la bordure :</label>
            <input type="range" id="borderRadius" v-model="containerBorderRadius" min="0" max="50">
            <br>
            <label for="borderColor">Couleur de la bordure :</label>
            <input type="color" id="borderColor" v-model="containerBorderColor">
            <br>
            <label for="backgroundColor">Couleur de fond :</label>
            <input type="color" id="backgroundColor" v-model="containerBackgroundColor">
            <br>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            containerWidth: 400,
            containerHeight: 300,
            containerMarginTop: 0,
            containerMarginBottom: 0,
            containerMarginLeft: 0,
            containerMarginRight: 0,
            containerPaddingTop: 10,
            containerPaddingBottom: 10,
            containerPaddingLeft: 10,
            containerPaddingRight: 10,
            containerBorderWidth: 1,
            containerBorderColor: '#000',
            containerBorderRadius: 0,
            containerBackgroundColor: '#fff',
        };
    },
    computed: {
        containerStyle() {
            return {
                width: `${this.containerWidth}px`,
                height: `${this.containerHeight}px`,
                margin: `${this.containerMarginTop}px ${this.containerMarginRight}px ${this.containerMarginBottom}px ${this.containerMarginLeft}px`,
                padding: `${this.containerPaddingTop}px ${this.containerPaddingRight}px ${this.containerPaddingBottom}px ${this.containerPaddingLeft}px`,
                borderWidth: `${this.containerBorderWidth}px`,
                borderRadius: `${this.containerBorderRadius}px`,
                borderColor: this.containerBorderColor,
                backgroundColor: this.containerBackgroundColor,
            };
        },
    },
};
</script>

