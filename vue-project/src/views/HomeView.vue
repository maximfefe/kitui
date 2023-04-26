<script>
import PreviewContainer from '../components/PreviewContainer.vue'
import FormContainer from '../components/FormContainer.vue'
import FormButton from '../components/Button/FormButton.vue'
import FormTitle from '../components/FormTitle.vue'

export default {
  components:{
    PreviewContainer,
    FormContainer,
    FormButton,
    FormTitle
  }
}
</script>

<template>
  <main class="container mx-auto">
    <div class="flex flex-wrap">
      <div class="md:w-1/5 w-full p-2">
        <ul class="menu p-2 rounded-box bg-base-200 ">
          <li>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              layout
            </a>
          </li>
          <li>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              colors
            </a>
          </li>
          <li>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              fonts
            </a>
          </li>
          <li>
            <a class="bg-primary">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              component
            </a>
          </li>
        </ul>
      </div>
      <div class="md:w-2/5 w-full p-2">
        <FormButton/>
      </div>
      <div class="md:w-2/5 w-full p-2">
        <PreviewContainer />
      </div>
    </div>
    <!-- <FormTitle/> -->
    <div class="flex content-center">
      <ul class="steps w-3/5 m-auto	">
        <li class="step step-primary">button</li>
        <li class="step">card</li>
      </ul>
    </div>
  </main>
</template>
