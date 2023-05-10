<template>
  <label @click="copyToClipboard" :class="{'animate-pulse': isClicked}" class="btn">{{ buttonText }}</label>
</template>

<script>
  export default {
    data() {
      return {
        isClicked: false,
        buttonText: "Copier le CDN",
      };
    },
    props: {
      cdnArchive: {
        type: String,
        required: true,
      },
    },
    methods: {
      copyToClipboard() {
        navigator.clipboard.writeText(this.cdnArchive);
        this.isClicked = true;
        setTimeout(() => {
          this.buttonText = "Copié !";
          this.isClicked = false;
        }, 300);
      },
      resetButtonText() {
        this.buttonText = "Copier le CDN";
      },
    },
  };
</script>
