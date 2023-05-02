<template>
    <div >
        <h2>Bienvenue sur le choix des couleurs</h2>
        <PreviewCard />
    </div>
</template>

<script>
import {useKituiStore} from '../../stores/kitui'
import {mapStores} from 'pinia'
import PreviewCard from '../Card/PreviewCard.vue'
export default {
    components:{
        PreviewCard
    },
    computed: {
        ...mapStores(useKituiStore),
    }
}
</script>
