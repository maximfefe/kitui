<script>
import PreviewContainer from '@/components/PreviewContainer.vue'
import ButtonComponent from '@/components/Component/ButtonComponent.vue'
import LinkComponent from '@/components/Component/LinkComponent.vue'
import CardComponent from '@/components/Component/CardComponent.vue'
import ListArchives from "@/components/Component/ListArchives.vue";

export default {
  components:{
    PreviewContainer,
    ButtonComponent,
    LinkComponent,
    CardComponent,
    ListArchives,
  }
}
</script>
<template>
  <main class="container mx-auto">
    <ListArchives />
    <div class="preview m-2">
      <PreviewContainer class="">
          <template #content>
              <TitleComponent reductSize="1">
                <h1>Rendu de votre configuration</h1>
              </TitleComponent>
              <TitleComponent reductSize="0.9">
                <h2>Bouton et lien</h2>
              </TitleComponent>
              <ButtonComponent/>
              <LinkComponent :link="'#'" :content="'Lien cliquez ici'"/>
              <TitleComponent reductSize="0.9">
                <h2>Les cartes</h2>
              </TitleComponent>
              <div class="flex">
                <CardComponent>
                  <template #content>
                    <TextComponent>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis eos consequuntur ratione a, esse laudantium veritatis. Qui rerum sunt blanditiis tenetur facere fuga voluptates nam distinctio, inventore corporis voluptatum. Enim?</TextComponent>
                    <ButtonComponent/>
                  </template>
                </CardComponent>
                <CardComponent>
                  <template #content>
                    <TextComponent>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis eos consequuntur ratione a, esse laudantium veritatis. Qui rerum sunt blanditiis tenetur facere fuga voluptates nam distinctio, inventore corporis voluptatum. Enim?</TextComponent>
                    <ButtonComponent/>
                  </template>
                </CardComponent>
                <CardComponent>
                  <template #content>
                    <TextComponent>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis eos consequuntur ratione a, esse laudantium veritatis. Qui rerum sunt blanditiis tenetur facere fuga voluptates nam distinctio, inventore corporis voluptatum. Enim?</TextComponent>
                    <ButtonComponent/>
                  </template>
                </CardComponent>
              </div>
          </template>
      </PreviewContainer>
    </div>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
