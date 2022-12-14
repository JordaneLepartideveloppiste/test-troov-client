<template>

    <div class="w-4/5 h-full absolute right-0 px-24 py-12 ">
    <div class="flex justify-end mb-12">
      <button class="border border-transparent text-white bg-sky-400 hover:bg-sky-500 px-4 py-2 rounded ">Ajouter un objet</button>
    </div>
      <div class="mx-auto w-9/10 bg-grey-200 flex flex-col ">
        <div class="w-full grid grid-cols-7 ">
          <span class="text-center bg-sky-700 text-white border border-sky-700 rounded-tl text-bold py-2">Intitulé</span>
          <span class="text-center bg-sky-700 text-white border border-sky-700 text-bold py-2">Matière</span>
          <span class="text-center bg-sky-700 text-white border border-sky-700 text-bold py-2">Couleur</span>    
          <span class="text-center bg-sky-700 text-white border border-sky-700 text-bold py-2">Taille / Dimensions</span>
          <span class="text-center bg-sky-700 text-white border border-sky-700 text-bold py-2">Marque</span>
          <span class="text-center col-span-2 border border-sky-700 text-sky-700 rounded-tr text-bold py-2">Actions</span>
        </div>
        <div class="w-full grid grid-cols-7 " v-for="thing in things" :key="thing._id">
          <span class="text-center bg-sky-700 text-white border border-sky-700 text-bold py-2">{{thing.name}}</span>
          <span class="text-center bg-sky-700 text-white border border-sky-700 text-bold py-2">{{thing.material}}</span>
          <span class="text-center bg-sky-700 text-white border border-sky-700 text-bold py-2">{{thing.color}}</span>    
          <span class="text-center bg-sky-700 text-white border border-sky-700 text-bold py-2">{{thing.size}}</span>
          <span class="text-center bg-sky-700 text-white border border-sky-700 text-bold py-2">{{thing.brand}}</span>
          <span class="text-center border border-sky-700 text-sky-700 rounded text-bold py-2 m-1">Modifier</span>
          <span class="text-center border border-sky-700 text-sky-700 rounded text-bold py-2 m-1">Supprimer</span>
       
        </div>
      </div>
    </div>
  
  </template>
  
  <script>  
  export default {
      name: "Dashboard",
      layout: "auth",
      auth: "guest",
      data() {
          return {
              user: {
                email: "jojo@olo.com"
              },
              things: [
                {
                  _id: 1234,
                  name: "montre",
                  brand: "rolex",
                  color: "gold",

                },
                {
                  _id: 2341,
                  name: "montre",
                  brand: "rolex",
                  material: "gold",
                  
                },
                {
                  _id: 3412,
                  name: "montre",
                  brand: "flic flac",
                  size: "enfant",
                  
                },
              ],
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
      
  }
  </script>
  