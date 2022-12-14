<template>

    <div class="">
     <h2>WESH MA GUEULE</h2>
     <h4>{{thing.name}}</h4>
    </div>
  
  </template>
  
  <script>  
  export default {
      name: "Dashboard",
      layout: "auth",
      middleware: 'auth',
      data() {
          return {
              user: {}
              }
          
      },
      head() {
          return {
              title: "Troov test | Dashboard",
              meta: [
                  { hid: "description", name: "description", content: "Votre tableau de bord sur Troov List" }
              ]
          };
      },
      methods: {
          
      },
      created() { 
        this.user = {...this.$auth.user}
       }
  }
  </script>
  