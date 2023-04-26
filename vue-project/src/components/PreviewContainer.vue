<script>
import PreviewButton from '../components/Button/PreviewButton.vue'
import PreviewCard from '../components/Card/PreviewCard.vue'

export default {
  components:{
    PreviewButton,
    PreviewCard
  }
}
</script>
<template>
    <div>
        <!-- <h1>Preview</h1> -->
        <div class="mockup-window bg-base-300">
            <div class="px-4 py-16 bg-base-200">
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>