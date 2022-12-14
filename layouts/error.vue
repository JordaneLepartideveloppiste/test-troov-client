<template>
    <div class="flex flex-col items-center justify-center mt-12 w-full">
            
            <div class="border rounded-xl flex flex-col items-center justify-center p-4">
                <span v-if="error.statusCode === 404" class="text-sky-700 font-bold text-xl mb-1 mt-demi"> Erreur 404 </span>                
                <span v-else-if="error.statusCode === 500" class="text-sky-700 font-bold text-xl mb-1 mt-demi"> Erreur 500 </span>                
                <span v-if="error.statusCode === 404" class="text-md text-sky-700 mb-2 mr-2 ml-2"> Cette page est introuvable ! </span>                
                <span v-else-if="error.statusCode === 500" class="text-md text-sky-700 mb-2 mr-2 ml-2"> Le serveur semble inopérant ! </span>                
                <span v-else class="text-md text-sky-700 mb-2 mr-2 ml-2"> Une erreur {{error.statusCode.toString()}} est survenue ! </span>                
                <span class="text-md mb-1"> Notre équipe de développeurs s'affaire à rétablir la situation dans les plus brefs délais. </span>                
            </div>
            <div class="mt-8 flex justify-center">
            <nuxt-link to="/dashboard" class="text-decoration-none">
              <ButtonStyled :size="sizeButton" :type="typeButton" class="button-brand-two py-1 px-2">Revenir à l'accueil</ButtonStyled>
            </nuxt-link>
          </div>
    </div>

  </template>
  
  <script>
import ButtonStyled from '~/components/ButtonStyled.vue';

  
  export default {
    props: ["error"],
    layout: "empty",
    data() {
        return {
            sizeButton: 'large',
            typeButton: 'primary'
        }
    },
    components: { ButtonStyled }
};
  </script>
  