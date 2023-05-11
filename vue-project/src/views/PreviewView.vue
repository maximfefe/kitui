<script>
import PreviewContainer from '@/components/PreviewContainer.vue'
import ButtonComponent from '@/components/Component/ButtonComponent.vue'
import LinkComponent from '@/components/Component/LinkComponent.vue'
import CardComponent from '@/components/Component/CardComponent.vue'
import ListArchives from "@/components/Component/ListArchives.vue";
import GridComponent from '@/components/Component/GridComponent.vue'
import PreviewTitle from '@/components/PreviewTitle.vue'

import {useKituiStore} from '@/stores/kitui'
import {mapStores} from 'pinia'
import DownloadButton from "@/components/DownloadButton.vue"
import SubNav from "@/components/SubNav.vue";
import { RouterLink } from 'vue-router'

export default {
  components:{
      RouterLink,
      SubNav,
      DownloadButton,
    PreviewContainer,
    ButtonComponent,
    LinkComponent,
    CardComponent,
    ListArchives,
    GridComponent,
    PreviewTitle
  },
  data() {
    const kituiStore = useKituiStore()
    return {
      nbColumn: kituiStore.kitui.layout.grid.nbColumn
    }
  },
  computed: {
    ...mapStores(useKituiStore),
  }
}
</script>
<template>
  <main class="container mx-auto">
    <div class="preview m-2">
      <div class="rounded-box bg-base-200 p-4 mb-2 flex justify-center flex-col sm:flex-row">
        <div class="w-1/2 m-auto flex justify-center">
            <ListArchives class="m-auto my-1"/>
        </div>
        <div class="w-1/2 m-auto flex flex-col justify-center">
            <RouterLink  class="sm:w-1/2 m-auto btn btn-sm btn-outline btn-info" to="/">Customiser</RouterLink>
            <DownloadButton class="sm:w-1/2 block m-auto my-1 btn btn-sm btn-accent"/>
        </div>
      </div>
      <PreviewContainer class="">
          <template #content>
            <TitleComponent reductSize="1">
              <h1>Rendu de votre configuration</h1>
            </TitleComponent>
            <TitleComponent reductSize="0.9">
              <h2>Bouton et lien</h2>
            </TitleComponent>
            <GridComponent>
              <ButtonComponent/>
              <LinkComponent :link="'#'" :content="'Lien cliquez ici'"/>
            </GridComponent>
            <TitleComponent reductSize="0.9">
              <h2>La carte</h2>
            </TitleComponent>
            <CardComponent>
              <template #content>
                <TextComponent>
                <LinkComponent :link="'#'" :content="'Lorem ipsum dolor sit'"/>, amet consectetur adipisicing elit. Quis eos consequuntur ratione a, esse laudantium veritatis. Qui rerum sunt blanditiis tenetur facere fuga voluptates nam distinctio, inventore corporis voluptatum. Enim?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis eos consequuntur ratione a, esse laudantium veritatis. Qui rerum sunt blanditiis tenetur facere fuga voluptates nam distinctio, inventore corporis voluptatum. Enim?
                </TextComponent>
              </template>
            </CardComponent>
            <TitleComponent reductSize="0.9">
              <h2>La grille</h2>
            </TitleComponent>
            <GridComponent>
              <div v-for="index in parseInt(kituiStore.kitui.layout.grid.nbColumn)" :key="index">
                <CardComponent>
                  <template #content>
                    <TextComponent>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis eos consequuntur ratione a, esse laudantium veritatis. Qui rerum sunt blanditiis tenetur facere fuga voluptates nam distinctio, inventore corporis voluptatum. Enim?</TextComponent>
                    <ButtonComponent/>
                  </template>
                </CardComponent>
              </div>
            </GridComponent>
            <TitleComponent reductSize="1">
              <h1>Titre et paragraphe</h1>
            </TitleComponent>
            <div class="">
              <TitleComponent reductSize="0.9">
                <h2>Titre de taille 2</h2>
              </TitleComponent>
              <TextComponent>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis eos consequuntur ratione a, esse laudantium veritatis. Qui rerum sunt blanditiis tenetur facere fuga voluptates nam distinctio, inventore corporis voluptatum. Enim?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis eos consequuntur ratione a, esse laudantium veritatis. Qui rerum sunt blanditiis tenetur facere fuga voluptates nam distinctio, inventore corporis voluptatum. Enim?</TextComponent>
              <TitleComponent reductSize="0.8">
                <h3>Titre de taille 3</h3>
              </TitleComponent>
              <TextComponent>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis eos consequuntur ratione a, esse laudantium veritatis. Qui rerum sunt blanditiis tenetur facere fuga voluptates nam distinctio, inventore corporis voluptatum. Enim?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis eos consequuntur ratione a, esse laudantium veritatis. Qui rerum sunt blanditiis tenetur facere fuga voluptates nam distinctio, inventore corporis voluptatum. Enim?</TextComponent>
              <TitleComponent reductSize="0.7">
                <h4>Titre de taille 4</h4>
              </TitleComponent>
              <TextComponent>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis eos consequuntur ratione a, esse laudantium veritatis. Qui rerum sunt blanditiis tenetur facere fuga voluptates nam distinctio, inventore corporis voluptatum. Enim?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis eos consequuntur ratione a, esse laudantium veritatis. Qui rerum sunt blanditiis tenetur facere fuga voluptates nam distinctio, inventore corporis voluptatum. Enim?</TextComponent>
              <TitleComponent reductSize="0.6">
                <h5>Titre de taille 5</h5>
              </TitleComponent>
              <TextComponent>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis eos consequuntur ratione a, esse laudantium veritatis. Qui rerum sunt blanditiis tenetur facere fuga voluptates nam distinctio, inventore corporis voluptatum. Enim?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis eos consequuntur ratione a, esse laudantium veritatis. Qui rerum sunt blanditiis tenetur facere fuga voluptates nam distinctio, inventore corporis voluptatum. Enim?</TextComponent>
              <TitleComponent reductSize="0.5">
                <h6>Titre de taille 6</h6>
              </TitleComponent>
              <TextComponent>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis eos consequuntur ratione a, esse laudantium veritatis. Qui rerum sunt blanditiis tenetur facere fuga voluptates nam distinctio, inventore corporis voluptatum. Enim?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis eos consequuntur ratione a, esse laudantium veritatis. Qui rerum sunt blanditiis tenetur facere fuga voluptates nam distinctio, inventore corporis voluptatum. Enim?</TextComponent>

            </div>
          </template>
      </PreviewContainer>
    </div>
  </main>
</template>

<style>

</style>
