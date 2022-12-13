<template>
    <div>
    <el-row class="d-flex d-column v-align-center h-align-center pl-2 pr-2 mt-8 full-width-content">
            
            <div class="border-brand b-radius d-flex d-column v-align-center h-align-center p-1">
                <span v-if="error.statusCode === 404" class="color-brand text-bold text-huge mb-1 mt-demi"> Erreur 404 </span>                
                <span v-else-if="error.statusCode === 500" class="color-brand text-bold text-huge mb-1 mt-demi"> Erreur 500 </span>                
                <span v-if="error.statusCode === 404" class="text-mid-plus color-brand mb-2 mr-2 ml-2"> Cette page est introuvable ! </span>                
                <span v-else-if="error.statusCode === 500" class="text-mid-plus color-brand mb-2 mr-2 ml-2"> Le serveur semble inopérant ! </span>                
                <span v-else class="text-mid-plus color-brand mb-2 mr-2 ml-2"> Une erreur {{error.statusCode.toString()}} est survenue ! </span>                
                <span class="text-medium mb-demi"> Notre équipe de développeurs s'affaire à rétablir la situation dans les plus brefs délais. </span>                
            </div>
            <div class="mt-4 d-flex h-align-center">
            <nuxt-link to="/dashboard" class="text-decoration-none">
              <span class="button-brand-two pt-demi pb-demi pl-1 pr-1">Revenir à l'accueil</span>
            </nuxt-link>
          </div>
    </el-row>
</div>
  </template>
  
  <script>
  
  export default {
    props: ['error'],
    layout: 'empty'
    
  };
  </script>
  