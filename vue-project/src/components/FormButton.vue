<template>
    <div>
        <h2>Form Button</h2>
        <form>
            <label for="size">Taille :</label>
            <input type="range" id="size" v-model="size" min="10" max="100">
            <br>
            <label for="bg-color">Couleur de fond :</label>
            <input type="color" id="bg-color" v-model="bgColor">
            <br>
            <label for="text-color">Couleur de texte :</label>
            <input type="color" id="text-color" v-model="textColor">
            <br>
            <label for="border-radius">Arrondi de bordure :</label>
            <input type="range" id="border-radius" v-model="borderRadius" min="0" max="50">
            <br>
            <label for="padding">Padding :</label>
            <input type="range" id="padding" v-model="padding" min="0" max="50">
            <br>
            <label for="margin">Marge :</label>
            <input type="range" id="margin" v-model="margin" min="0" max="50">
        </form>
        <button :style="buttonStyle">Cliquez ici</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            size: 50,
            bgColor: '#007bff',
            textColor: '#ffffff',
            borderRadius: 10,
            padding: 10,
            margin: 10
        }
    },
    computed: {
        buttonStyle() {
            return {
                fontSize: this.size + 'px',
                backgroundColor: this.bgColor,
                color: this.textColor,
                borderRadius: this.borderRadius + 'px',
                padding: this.padding + 'px',
                margin: this.margin + 'px'
            }
        }
    }
}
</script>
