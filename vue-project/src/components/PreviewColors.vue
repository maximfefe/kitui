<template>
    <div >
        <CardComponent>
            <template #content>
                <TextComponent>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat odit non minima mollitia sint deleniti in facere, possimus atque, veniam illum, voluptate dignissimos repellendus quasi perspiciatis nisi distinctio dolor accusantium?</TextComponent>
                <ButtonComponent/>
                <LinkComponent :link="'#'" :content="'Lien cliquez ici'"/>
            </template>
        </CardComponent>
        <ButtonComponent/>
        <LinkComponent :link="'#'" :content="'Lien cliquez ici'"/>
    </div>
</template>

<script>
import {useKituiStore} from '../stores/kitui'
import {mapStores} from 'pinia'
import CardComponent from './Component/CardComponent.vue'
import ButtonComponent from './Component/ButtonComponent.vue'
import LinkComponent from './Component/LinkComponent.vue'
export default {
    components:{
        CardComponent,
        LinkComponent,
        ButtonComponent
    },
    computed: {
        ...mapStores(useKituiStore),
    }
}
</script>
