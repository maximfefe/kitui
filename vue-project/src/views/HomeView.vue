<script>
import PreviewContainer from '@/components/PreviewContainer.vue'
import FormContainer from '@/components/Form/FormContainer.vue'
import FormColors from '@/components/Form/FormColors.vue'
import FormFonts from '@/components/Form/FormFonts.vue'
import FormButton from '@/components/Form/FormButton.vue'
import FormCard from '@/components/Form/FormCard.vue'
import ContainerComponent from '@/components/Component/ContainerComponent.vue'
import ButtonComponent from '@/components/Component/ButtonComponent.vue'
import CardComponent from '@/components/Component/CardComponent.vue'
import PreviewColors from '@/components/PreviewColors.vue'
import PreviewTitle from '@/components/PreviewTitle.vue'
import SubNav from '@/components/SubNav.vue'

export default {
  components:{
    PreviewContainer,
    FormContainer,
    FormColors,
    FormFonts,
    FormButton,
    FormCard,
    ContainerComponent,
    PreviewColors,
    PreviewTitle,
    ButtonComponent,
    CardComponent,
    SubNav
  }
}
</script>

<template>
  <main class="container mx-auto">
    <div class="flex flex-wrap">
      <div class="md:w-1/5 w-full p-2">
        <SubNav/>
      </div>
      <div class="md:w-2/5 w-full p-2">
        <FormContainer v-if="$route.path === '/'"/>
        <FormColors v-if="$route.path === '/colors'"/>
        <FormFonts v-if="$route.path === '/fonts'"/>
        <FormCard v-if="$route.path === '/component/card'"/>
        <FormButton v-if="$route.path === '/component/button'"/>
      </div>
      <div class="md:w-2/5 w-full p-2">
        <PreviewContainer>
          <template #content>
            <ContainerComponent v-if="$route.path === '/'"/>
            <PreviewColors v-if="$route.path === '/colors'"/>
            <PreviewTitle v-if="$route.path === '/fonts'"/>
            <CardComponent v-if="$route.path === '/component/card'">
              <template #content>
                <TextComponent>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat odit non minima mollitia sint deleniti in facere, possimus atque, veniam illum, voluptate dignissimos repellendus quasi perspiciatis nisi distinctio dolor accusantium?</TextComponent>
              </template>
            </CardComponent>
            <ButtonComponent v-if="$route.path === '/component/button'"/>
          </template>
        </PreviewContainer>
      </div>
    </div>
  </main>
</template>
