<template>
  <div>
    <div class="flex flex-wrap justify-between pt-12 -mx-6">

        <!-- <div v-for="post in data" :key="post._id"> -->
      <div class="w-full md:w-1/3 p-6 flex flex-col">
        <div
          class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg"
        >
          <a href="#" class="flex flex-wrap no-underline hover:no-underline">
            <img
              src="https://source.unsplash.com/collection/225/800x600"
              class="h-64 w-full rounded-t pb-6"
            />
            <p class="w-full text-gray-600 text-xs md:text-sm px-6">
              GETTING STARTED
            </p>
            <div class="w-full font-bold text-xl text-gray-900 px-6">
              {{post.title}}
            </div>
            <p class="text-gray-800 font-serif text-base px-6 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              at ipsum eu nunc commodo posuere et sit amet ligula.
            </p>
          </a>
        </div>
        <div
          class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6"
        >
          <div class="flex items-center justify-between">
            <img
              class="w-8 h-8 rounded-full mr-4 avatar"
              data-tippy-content="Author Name"
              src="http://i.pravatar.cc/300"
              alt="Avatar of Author"
            />
            <p class="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
          </div>
        </div>
      </div>
     <!--  </div> -->
      


    </div>
   <!-- <div v-for="p in posts" :key="p._id">
      <h1 >{{ p.title }}</h1>
      
    </div> -->
  </div>
</template>

<script>
/* const query = groq`*[_type == "post"]`;
const { data } = useSanityQuery(query); */

/* import { groq } from '@nuxtjs/sanity';

  export default {
    async asyncData({ $sanity }) {
      const query = groq`*[_type == "post"]`;
      const posts = await $sanity.fetch(query);
      return { posts };
    },
}; */
  

</script>

<style lang="scss" scoped></style>
