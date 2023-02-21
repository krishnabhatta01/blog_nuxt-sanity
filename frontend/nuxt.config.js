// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  buildModules: ["@nuxtjs/sanity", "@nuxtjs/tailwindcss"],
  modules: [],
  sanity: {
    projectId: "7gijxk60",
    apiVersion: "2022-03-25",
  },
  head: {
    title: "Blogs",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
  },
});
