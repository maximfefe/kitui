<script>
import PreviewContainer from '../components/PreviewContainer.vue'
import FormColors from '../components/Colors/FormColors.vue'
import PreviewColors from '../components/Colors/PreviewColors.vue'
import StepForm from '../components/StepForm.vue'
import SubNav from '../components/SubNav.vue'

export default {
  components:{
    PreviewContainer,
    FormColors,
    PreviewColors,
    StepForm,
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
        <FormColors/>
      </div>
      <div class="md:w-2/5 w-full p-2">
        <PreviewContainer>
            <template #content>
                    <PreviewColors/>
            </template>
        </PreviewContainer>
      </div>
    </div>
    <div>
    </div>
  </main>
</template>
