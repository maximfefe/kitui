<script>
import PreviewContainer from '../components/PreviewContainer.vue'

export default {
  components:{
    PreviewContainer
  }
}
</script>
<template>
  <main class="container mx-auto">
    <div class="preview">
      <PreviewContainer/>
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
