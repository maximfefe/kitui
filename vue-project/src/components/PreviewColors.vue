<template>
    <div >
        <CardComponent>
            <template #content>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis eos consequuntur ratione a, esse laudantium veritatis. Qui rerum sunt blanditiis tenetur facere fuga voluptates nam distinctio, inventore corporis voluptatum. Enim?</p>
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
