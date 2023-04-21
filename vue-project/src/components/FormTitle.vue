<template>
    <div>
        <component :is="titleTag" :style="titleStyle">{{ title }}</component>
        <form>
            <label for="title">Titre :</label>
            <input type="text" id="title" v-model="title">
            <br>
            <label for="size">Taille :</label>
            <input type="range" id="size" v-model="size" min="10" max="100">
            <br>
            <label for="font">Police :</label>
            <select id="font" v-model="font">
                <option value="Arial">Arial</option>
                <option value="Helvetica">Helvetica</option>
                <option value="Verdana">Verdana</option>
                <option value="Georgia">Georgia</option>
                <option value="Times New Roman">Times New Roman</option>
            </select>
            <br>
            <label for="color">Couleur du texte :</label>
            <input type="color" id="color" v-model="color">
            <br>
            <label for="fontWeight">Graisse :</label>
            <select id="fontWeight" v-model="fontWeight">
                <option value="normal">Normal</option>
                <option value="bold">Gras</option>
            </select>
            <br>
            <label for="textDecoration">Décoration :</label>
            <select id="textDecoration" v-model="textDecoration">
                <option value="none">Aucune</option>
                <option value="underline">Souligné</option>
                <option value="overline">Sur-ligné</option>
                <option value="line-through">Barré</option>
            </select>
            <br>
            <label for="titleTag">Balise de titre :</label>
            <select id="titleTag" v-model="titleTag">
                <option value="h1">h1</option>
                <option value="h2">h2</option>
                <option value="h3">h3</option>
                <option value="h4">h4</option>
                <option value="h5">h5</option>
                <option value="h6">h6</option>
            </select>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Titre de la page',
            size: 50,
            font: 'Arial',
            color: '#000000',
            fontWeight: 'normal',
            textDecoration: 'none',
            titleTag: 'h1'
        }
    },
    computed: {
        titleStyle() {
            return {
                fontSize: this.size + 'px',
                fontFamily: this.font,
                color: this.color,
                fontWeight: this.fontWeight,
                textDecoration: this.textDecoration
            }
        }
    }
}
</script>
