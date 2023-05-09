<script>
import PreviewContainer from '@/components/PreviewContainer.vue'
import ButtonComponent from '@/components/Component/ButtonComponent.vue'
import LinkComponent from '@/components/Component/LinkComponent.vue'
import CardComponent from '@/components/Component/CardComponent.vue'
import GridComponent from '@/components/Component/GridComponent.vue'
import PreviewTitle from '@/components/PreviewTitle.vue'

import {useKituiStore} from '@/stores/kitui'
import {mapStores} from 'pinia'

export default {
  components:{
    PreviewContainer,
    ButtonComponent,
    LinkComponent,
    CardComponent,
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
              <div v-for="index in parseInt(nbColumn)" :key="index">
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
