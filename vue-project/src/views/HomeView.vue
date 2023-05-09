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
    SubNav
  }
}
</script>

<template>
  <main class="container mx-auto">
    <div class="flex flex-wrap">
      <div class="md:w-1/5 w-full p-2">
        <SubNav/>
        <!-- <div class="tabs">
          <a class="tab tab-lifted">Tab 1</a> 
          <a class="tab tab-lifted tab-active">Tab 2</a> 
          <a class="tab tab-lifted">Tab 3</a>
        </div> -->
        <!-- <div class="btm-nav z-10">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
          </button>
          <button class="active">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </button>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
          </button>
        </div> -->
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
