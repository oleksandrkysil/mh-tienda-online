<template>
  <div class="container my-8">
    <h1 v-if="!loading" class="mb-8 text-3xl font-semibold text-primary">{{ pageTitle }}</h1>
    <div v-if="!loading" class="my-8 prose" v-html="pageContent"></div>
    <div v-else>Loading...</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  setup() {
    const pageTitle = ref<string>('');
    const pageContent = ref<string>('');
    const loading = ref<boolean>(true);

    onMounted(async () => {
      try {
        const response = await fetch('https://next-wp-store.x10.mx/wp/graphql/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
              query {
                page(id: "contact", idType: URI) {
                  title
                  content
                }
              }
            `,
          }),
        });
        const result = await response.json();
        pageTitle.value = result.data.page.title;
        pageContent.value = result.data.page.content;
      } catch (error) {
        console.error("Error fetching page content:", error);
      } finally {
        loading.value = false;
      }
    });

    return { pageTitle, pageContent, loading };
  },
});
</script>

<style scoped>
/* Додайте стилі за потреби */
</style>
