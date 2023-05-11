<template>
    <div>
        <input type="checkbox" id="my-modal" class="modal-toggle" />
    
        <div class="modal">
            <div class="modal-box">
                <label for="my-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 class="text-lg font-bold">Vous venez de télécharger votre css.</h3>
                <div class="flex items-center">
                    <p class="py-4">Vous avez aussi la possibilité d'utiliser notre CDN. </p>
                    <ButtonCopyComponent class="ms-2" :cdnArchive="`${api}/cdn/style/archive?filename=${this.kituiStore.kitui.name.split('.')[0]}`" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {useKituiStore} from '@/stores/kitui'
import {mapStores} from 'pinia'
import ButtonCopyComponent from "@/components/Component/ButtonCopyComponent.vue";

export default {
    components: {ButtonCopyComponent},
    data() {
        return {
            api : import.meta.env.VITE_API_URL
        }
    },
    computed: {
        ...mapStores(useKituiStore),
    }
}
</script>
