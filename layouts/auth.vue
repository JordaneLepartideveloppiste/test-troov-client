<template>
    <div>
      <TopList />
      <SideProfil />
      <Nuxt />
      <FootList />
    </div>
  </template>
  
  <script>
  import FootList from '~/components/FootList.vue';
import SideProfil from '~/components/SideProfil.vue';
  import TopList from '../components/TopList.vue';
  export default {
  
      head() {
          return {
              bodyAttrs: {
                  id: "auth-layout"
              }
          };
      },
      components: { TopList, FootList, SideProfil }
  }
  </script>