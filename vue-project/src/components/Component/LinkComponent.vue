<template>
    <a :href="link"  :style="accentStyle">{{content}}</a>
</template>

<script>
import {useKituiStore} from '@/stores/kitui'
import {mapStores} from 'pinia'
export default {
    props: ['link', 'content'],
    computed: {
        ...mapStores(useKituiStore),
        accentStyle() {
            const accent = this.kituiStore.kitui.colors.accent
            const fontFamily = this.kituiStore.kitui.fonts.text.fontFamily
            return {
                color: accent,
                fontFamily: fontFamily,
            }
        }
    }
}

</script>