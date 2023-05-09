<script>
import { useKituiStore } from '@/stores/kitui';

export default {
  methods: {
    async generateCss() {
      const store = useKituiStore();
      try {
        const response = await fetch('http://127.0.0.1:3000/generate-css', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(store.kitui)
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    },
  },
};

</script>