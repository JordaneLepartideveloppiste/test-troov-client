<template>
    <!-- component -->
<div class="flex items-center justify-between flex-wrap bg-sky-600 p-6 w-full">
  <nuxt-link to="/dashboard" class="flex items-center flex-no-shrink text-white mr-6">
    <img src="/img/logo.png" alt="logo-troovList" width="10%">
    <span class="font-semibold text-xl">Troov List</span>
  </nuxt-link>
  
  <div class="">
      <button @click="deleteSession" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-sky-500 hover:bg-white mt-4 lg:mt-0">Se déconnecter</button>
  </div>
</div>
  </template>
  
  <script>
  
  export default {
   data() {
    return {

    }
   },
   methods: {
    deleteSession() {
      this.$auth.logout()
    },
   }
  }
  </script>
  