<template>
  <button @click="generateCss()">Télécharger mon kit</button>
</template>

<script>
import { useKituiStore } from '@/stores/kitui';

export default {
  // props:['classe'],
  methods: {
    async generateCss() {
      const store = useKituiStore();
      try {
        const response = await fetch(import.meta.env.VITE_API_URL + '/generate-css', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(store.kitui)
        });
        const blob = await response.blob();
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'kitui.css'); // Le nom du fichier de téléchargement
        document.body.appendChild(link);
        link.click();
      } catch (error) {
        console.error(error);
      }
    },
  },
};

</script>