<script>
import PreviewContainer from '../components/PreviewContainer.vue'
import PreviewButton from '../components/Button/PreviewButton.vue'
import PreviewCard from '../components/Card/PreviewCard.vue'

export default {
  components:{
    PreviewContainer,
    PreviewButton,
    PreviewCard,
  }
}
</script>
<template>
  <main class="container mx-auto">
    <div class="preview">
        <PreviewContainer>
          <template #content>
              <PreviewButton/>
              <div class="flex">
                <PreviewCard/>
                <PreviewCard/>
                <PreviewCard/>

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
