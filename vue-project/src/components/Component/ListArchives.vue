<template>
  <select class="select select-secondary select-sm w-full max-w-xs" @change="searchArchive($event)">
    <option>Veuillez selectionner une archive</option>
    <option v-for="archive in archives" :value="archive">{{ archive }}</option>
  </select>
  <ButtonCopyComponent v-if="showButton" :cdnArchive="cdnArchive" ref="ButtonCopyComponent" />
</template>

<script>

import {useKituiStore} from "@/stores/kitui";
import {mapStores} from 'pinia'

import ButtonCopyComponent from "@/components/Component/ButtonCopyComponent.vue";

export default {
  components: {ButtonCopyComponent},
  data() {
    return {
      archives: [],
      css: "",
      showButton: false,
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
      // if (!confirm('Êtes-vous sur de changer les paramètres actuels ? (Vous perdrez toutes vos modifications)')){
      //   return;
      // }
      // const kituiStore = useKituiStore()
      const response = await fetch(import.meta.env.VITE_API_URL + '/archive?filename=' + event.target.value, {
        method: 'GET',
      });
      if (!response.bodyUsed) {
        this.css = await response.json();
      }
      this.kituiStore.setKitUI(this.css)

      this.showButton = true;
      this.cdnArchive = import.meta.env.VITE_API_URL + "/cdn/style/archive?filename=" + event.target.value.slice(0, -4);
      await this.$nextTick(() => {
        this.$refs.ButtonCopyComponent.resetButtonText();
      });
    },
  },
  mounted() {
    this.archiveList();
  },
  computed: {
    ...mapStores(useKituiStore),
  }
};

</script>