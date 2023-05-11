<template>
  <div class="flex justify-center">
    <div class="indicator"   >
      <div class="indicator-item tooltip tooltip-right" data-tip="Vous perdrez vos modifications en cours." >
        <span class="badge">!</span>
      </div>
      <select class="select select-secondary select-sm max-w-xs me-2" @click="archiveList()" @change="searchArchive($event)">
        <option disabled selected>Veuillez selectionner une archive</option>
        <option v-for="archive in archives" :value="archive">{{ archive }}</option>
      </select>
    </div>
    <ButtonCopyComponent v-if="showButton" :cdnArchive="cdnArchive"  ref="ButtonCopyComponent" />
    
  </div>
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

      this.kituiStore.updateProperty('name', `${event.target.value}`)
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
        this.$refs.ButtonCopyComponent.resetButton();
      });
    },
  },
  computed: {
    ...mapStores(useKituiStore),
  }
};

</script>