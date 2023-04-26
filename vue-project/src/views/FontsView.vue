<script>
import PreviewContainer from '../components/PreviewContainer.vue'
import StepForm from '../components/StepForm.vue'
import SubNav from '../components/SubNav.vue'

export default {
  components:{
    PreviewContainer,
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
        <!-- FORM -->
      </div>
      <div class="md:w-2/5 w-full p-2">
        <PreviewContainer>
            <template #content>
                <!-- <PreviewButton/> -->
            </template>
        </PreviewContainer>
      </div>
    </div>
    <StepForm/>
    <button>Previous</button>
    <button>Next</button>
  </main>
</template>
