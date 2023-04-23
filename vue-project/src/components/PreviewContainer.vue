<script>
import PreviewButton from '../components/Button/PreviewButton.vue'

export default {
  components:{
    PreviewButton,
  }
}
</script>
<template>
    <div>
        <!-- <h1>Preview</h1> -->
        <div class="mockup-window bg-base-300">
            <div class="flex justify-center px-4 py-16 bg-base-200">
                <PreviewButton />
            </div>
        </div>
    </div>
</template>