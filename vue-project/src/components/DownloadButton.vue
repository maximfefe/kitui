<template>
  <button @click="generateCss()">Télécharger mon kit</button>
</template>

<script>
import { useKituiStore } from '@/stores/kitui';

export default {
  // props:['classe'],
  methods: {
    async generateCss() {

      const kituiStore = useKituiStore();
      try {
        await fetch(import.meta.env.VITE_API_URL + '/generate-css', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(kituiStore.kitui)
        })
        .then(response => response.json())
        .then(data => {
          // extraire le nom et le contenu du fichier CSS du JSON
          const { name, css } = data;
          kituiStore.updateProperty('name', `${name}`)
          const blob = new Blob([css], { type: 'text/css' });
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = 'kitui';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          // libérer l'URL créée
          URL.revokeObjectURL(url);
        })
        document.getElementById('my-modal').checked = true;
      } catch (error) {
        console.error(error);
      }
    },
  },
};

</script>