<script>
import PreviewContainer from '../components/PreviewContainer.vue'
import FormButton from '../components/Button/FormButton.vue'
import PreviewButton from '../components/Button/PreviewButton.vue'
import FormCard from '../components/Card/FormCard.vue'
import PreviewCard from '../components/Card/PreviewCard.vue'
import StepForm from '../components/StepForm.vue'
import SubNav from '../components/SubNav.vue'

export default {
  components:{
    PreviewContainer,
    FormButton,
    PreviewButton,
    FormCard,
    PreviewCard,
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
        <div v-if="$route.path === '/component/card'">
            <FormCard/>
        </div>
        <div v-else>
            <FormButton/>
        </div>
      </div>
      <div class="md:w-2/5 w-full p-2">
        <PreviewContainer>
            <template #content>
                <div v-if="$route.path === '/component/card'">
                    <PreviewCard/>
                </div>
                <div v-else>
                    <PreviewButton/>
                </div>

            </template>
        
        </PreviewContainer>
      </div>
    </div>
    <div>
        <StepForm/>
            <!-- <template #content>
                <li class="step step-primary">
                    <router-link active-class="bg-primary" to="/component/button">button</router-link>
                </li>
                <li class="step">
                    <router-link active-class="bg-primary" to="/button">button</router-link>
                </li>
            </template> 
        <StepForm/> -->

    </div>
  </main>
</template>
