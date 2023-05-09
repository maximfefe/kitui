<template>
  <select @select="archiveList()">
    <option v-for="archive in archives" :value="archive.id">{{ archive.name }}</option>
  </select>
</template>

<script>

export default {
  data() {
    return {
      archives: []
    }
  },
  methods: {
    async archiveList() {
      const response = await fetch(import.meta.env.VITE_API_URL + '/archives', {
        method: 'GET',
      });
      console.log(response);
      this.archives = await response.json();
    }
  }
};

</script>