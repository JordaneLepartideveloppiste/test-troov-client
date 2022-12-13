<template>
    <div>
      <TopList />
      <Nuxt />
      <FootList />
    </div>
  </template>
  
  <script>
  import FootList from '~/components/FootList.vue';
  import TopList from '../components/TopList.vue';
  export default {
  
      head() {
          return {
              bodyAttrs: {
                  id: "auth-layout"
              }
          };
      },
      components: { TopList, FootList }
  }
  </script>