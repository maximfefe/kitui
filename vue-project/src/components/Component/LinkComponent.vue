<template>
    <a :href="link"  :style="accentStyle">{{content}}</a>
</template>

<script>
import {useKituiStore} from '../../stores/kitui'
import {mapStores} from 'pinia'
export default {
    props: ['link', 'content'],
    computed: {
        ...mapStores(useKituiStore),
        accentStyle() {
            const accent = this.kituiStore.kitui.colors.accent
            console.log(accent);
            return {
                color: accent,
            }
        }
    }
}

</script>