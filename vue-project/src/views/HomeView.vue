<script>
import PreviewContainer from '@/components/PreviewContainer.vue'
import FormContainer from '@/components/Form/FormContainer.vue'
import FormGrid from '@/components/Form/FormGrid.vue'
import FormColors from '@/components/Form/FormColors.vue'
import FormFonts from '@/components/Form/FormFonts.vue'
import FormButton from '@/components/Form/FormButton.vue'
import FormCard from '@/components/Form/FormCard.vue'
import ContainerComponent from '@/components/Component/ContainerComponent.vue'
import GridComponent from '@/components/Component/GridComponent.vue'
import ButtonComponent from '@/components/Component/ButtonComponent.vue'
import CardComponent from '@/components/Component/CardComponent.vue'
import PreviewColors from '@/components/PreviewColors.vue'
import PreviewTitle from '@/components/PreviewTitle.vue'
import SubNav from '@/components/SubNav.vue'
import DownloadButton from '../components/DownloadButton.vue'

export default {
  components:{
    PreviewContainer,
    FormContainer,
    FormGrid,
    FormColors,
    FormFonts,
    FormButton,
    FormCard,
    ContainerComponent,
    GridComponent,
    PreviewColors,
    PreviewTitle,
    ButtonComponent,
    CardComponent,
    SubNav,
    DownloadButton
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
        <FormContainer v-if="$route.path === '/' || $route.path === '/container'"/>
        <FormGrid v-if="$route.path === '/grid'"/>
        <FormColors v-if="$route.path === '/colors'"/>
        <FormFonts v-if="$route.path === '/fonts'"/>
        <FormCard v-if="$route.path === '/component/card'"/>
        <FormButton v-if="$route.path === '/component/button'"/>
      </div>
      <div class="md:w-2/5 w-full p-2">
        <PreviewContainer>
          <template #content>
            <ContainerComponent v-if="$route.path === '/' || $route.path === '/container'"/>
            <GridComponent  v-if="$route.path === '/grid'">
              <img alt="Vue logo" class="logo-content" src="/kitUIfavicon.svg" width="100" height="100" />
              <img alt="Vue logo" class="logo-content" src="/kitUIfavicon.svg" width="100" height="100" />
              <img alt="Vue logo" class="logo-content" src="/kitUIfavicon.svg" width="100" height="100" />
              <img alt="Vue logo" class="logo-content" src="/kitUIfavicon.svg" width="100" height="100" />
              <img alt="Vue logo" class="logo-content" src="/kitUIfavicon.svg" width="100" height="100" />

            </GridComponent>

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
