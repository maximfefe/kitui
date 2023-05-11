<template>
  <div class="tooltip" data-tip="Récuperer le CDN">
      <button @click="copyToClipboard" :class="{'animate-pulse': !isClicked}" class="btn btn-sm btn-secondary">
          <svg v-if="!isClicked" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clipboard" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
              <rect x="9" y="3" width="6" height="4" rx="2" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clipboard-check" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
              <rect x="9" y="3" width="6" height="4" rx="2" />
              <path d="M9 14l2 2l4 -4" />
          </svg>
          <!-- {{ buttonText }} -->
      </button>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        isClicked: false,
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
      },
      resetButton() {
        this.isClicked = false;
      },
    },
  };
</script>
