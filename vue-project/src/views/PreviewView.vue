<script>
import PreviewContainer from '../components/PreviewContainer.vue'

export default {
  components:{
    PreviewContainer
  }
}
</script>
<template>
  <div class="preview">
    <PreviewContainer/>
  </div>
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
