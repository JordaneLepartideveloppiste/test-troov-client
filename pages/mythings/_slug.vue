<template>
  <div class="flex items-center h-[576px]">

<div class="bg-sky-50 border border-r-sky-200 w-1/5 h-full">
  <div class="pt-6 flex flex-col justify-between items-center">
    <div class="mt-12 mb-2">
        <span class="text-3xl">Voici votre objet :</span>
    </div>   
  </div>
</div>
<div class="w-4/5 pl-24 pt-12 h-full">
        
  <div class="flex flex-col w-5/6 border mt-12 h-[300px] rounded-md shadow-lg">
    <p class="text-rose-700 text-small" v-if="message">{{message}}</p>
     <div class="pl-36 py-4 bg-sky-600 rounded-t-md">
        <span class="uppercase text-white text-2xl font-bold">{{thing.name}}</span>
     </div>
     <div class="flex justify-between items-center px-4 py-4">
        <span>Vous l'avez ajouté à votre liste le</span> 
        <span>{{humanDate(thing.createdAt)}}</span>
     </div>
     <div class="flex justify-between items-center px-4 py-4">
        <span>Il est</span> 
        <span class="uppercase">{{thing.color}}</span>
     </div>
     <div class="flex justify-between items-center px-4 py-4">
        <span>Fait de</span> 
        <span class="uppercase">{{thing.material}}</span>
     </div>
     <div class="flex justify-between items-center px-4 py-4">
        <span>Et de la marque</span> 
        <span class="uppercase">{{thing.brand}}</span>
     </div>
    </div>
     
     

    <button @click="$router.push('/dashboard')" class="px-2 py-1 rounded-md border border-sky-400 text-sky-400 hover:text-white hover:bg-sky-400 absolute bottom-28 right-28">Retour</button>

    </div>
  </div>
  </template>
  
  <script>  
  export default {
      name: "My Object",
      layout: "AuthLayout",
      middleware: "auth",
      async asyncData({$axios, params, error}) {
      const slug = params.slug;
      return $axios
      .$get(`/user/thing/${slug}`)
      .then(async (data) => {
        return {
          thing: data,
          message : ""
        }
      })
      .catch((err) => {
        return this.message = `Impossible d'obtenir les données de l'objet : ${err.message}`
      })
      },
      data() {
          return {
              thing: {},
              }       
      },
      head() {
          return {
              title: `Troov test | Mon Objet :  ${this.thing.name}`,
              meta: [
                  { hid: "description", name: "description", content: "Votre tableau de bord sur Troov List" }
              ]
          };
      },
      methods: {
        humanDate(date) {
            return this.$moment(date).format('DD/MM/YYYY')
        },
      },
  }
  </script>
  