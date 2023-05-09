<template>
  <select class="select select-secondary select-sm w-full max-w-xs" @change="searchArchive($event)">
    <option>Veuillez selectionner une archive</option>
    <option v-for="archive in archives" :value="archive">{{ archive }}</option>
  </select>
  <ModalComponent v-if="showModal" :cdnArchive="cdnArchive" ref="modalComponent" />
</template>

<script>

import {useKituiStore} from "@/stores/kitui";
import ModalComponent from "@/components/Component/ModalComponent.vue";

export default {
  components: {ModalComponent},
  data() {
    return {
      archives: [],
      css: "",
      showModal: false,
      cdnArchive: null,
    }
  },
  methods: {
    async archiveList() {
      const response = await fetch(import.meta.env.VITE_API_URL + '/archives', {
        method: 'GET',
      });
      if (!response.bodyUsed) {
        this.archives = await response.json();
      }
    },
    async searchArchive(event){
      if (!confirm('Êtes-vous sur de changer les paramètres actuels ? (Vous perdrez toutes vos modifications)')){
        return;
      }
      const kituiStore = useKituiStore()
      const response = await fetch(import.meta.env.VITE_API_URL + '/archive?filename=' + event.target.value, {
        method: 'GET',
      });
      if (!response.bodyUsed) {
        this.css = await response.json();
      }
      kituiStore.kitui = this.css;
      this.showModal = true;
      this.cdnArchive = import.meta.env.VITE_API_URL + "/cdn/style/archive?filename=" + event.target.value.slice(0, -4);
      await this.$nextTick(() => {
        this.$refs.modalComponent.resetButtonText();
      });
    },
  },
  mounted() {
    this.archiveList();
  }
};

</script>