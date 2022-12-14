<template>
    <!-- component -->
<!-- component -->
<div class="bg-sky-50 border border-r-sky-200 w-1/5 absolute left-0 h-full">
    <div class="pt-6 flex flex-col justify-between items-center">
      <div class="mt-12 mb-2">
        <span class="text-sky-700 text-md">Bienvenue</span>
        <span class="text-gray-700 ml-1 text-2xl" target="_blank">{{user.name}}</span>
      </div>   
      <div class="mt-12 flex flex-col items-center justify-end">
        <span class="text-gray-600">Voici votre liste d'objets :</span>
        <span class="mt-8">Vous avez actuellement</span>
        <span class="text-sky-600 text-bold text-4xl mt-2 mb-2">{{things.length}}</span>
        <span>objets listés.</span>
      </div>
      
    </div>
  </div>
  </template>
  
  <script> 
  export default {
    data() {
        return {
            user: {
                name: "Jojo"
            },
            things: [
                {
                    name: "une montre",
                    brand: "flic-flac"
                },
                {
                    name: "une montre",
                    brand: "flic-flac"
                },
                {
                    name: "une montre",
                    brand: "flic-flac"
                },
            ]
        }
    }
  }
  </script>
  