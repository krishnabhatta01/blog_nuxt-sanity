<template>
  <div>
    <div v-if="posts">
    <div v-for="p in posts" :key="p._id">
      <h1 >{{ p.title }}</h1>
      
    </div>
    </div>
  </div>
</template>

<script >
import { groq } from '@nuxtjs/sanity';

  export default {
    async asyncData({ $sanity }) {
      const query = groq`*[_type == "post"]`;
      const posts = await $sanity.fetch(query);
      return { posts };
    },
};
definePageMeta({
  layout: "default",
});
</script>

<style scoped>
body {
  background: #e5e7eb;
}
</style>
