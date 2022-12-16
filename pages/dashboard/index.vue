<template>
<div class="flex items-center h-[576px]">

  <div class="bg-sky-50 border border-r-sky-200 w-1/5 h-full">
    <div class="pt-6 flex flex-col justify-between items-center">
      <div class="mt-12 mb-2">
        <span class="text-gray-700 text-md">Bienvenue</span>
        <span class="text-sky-700 ml-1 text-2xl">{{user.name}}</span>
      </div>   
      <div class="mt-12 flex flex-col items-center justify-end">
        <span class="text-gray-600">Voici votre liste d'objets :</span>
        <span class="mt-8">Vous avez actuellement</span>
        <span class="text-sky-600 text-bold text-4xl mt-2 mb-2">{{user.things.length}}</span>
        <span v-if="user.things.length > 1">objets listés.</span>
        <span v-else>objet listé.</span>
      </div>
    </div>
  </div>
  <div class="w-4/5 h-full px-12 py-12 ">
    <div class="flex justify-end mb-12">
      <button @click="dialogFormCreate = true" class=" text-white bg-sky-400 hover:bg-sky-500 px-4 py-2 rounded ">Ajouter un objet</button>
    </div>
    <div class="mx-auto w-11/12 bg-grey-200 flex flex-col">
      <div class="w-full grid grid-cols-10 ">
        <span class="text-center col-span-3 bg-sky-700 text-white border border-sky-700 rounded-tl text-bold py-3">Intitulé</span>
        <span class="text-center bg-sky-700 text-white border border-sky-700 border-l-white text-bold py-3">Matière</span>
        <span class="text-center bg-sky-700 text-white border border-sky-700 border-l-white text-bold py-3">Couleur</span>    
        <span class="text-center col-span-2 bg-sky-700 text-white border border-sky-700 border-l-white text-bold py-3">Marque</span>
        <span class="text-center col-span-3 border border-sky-700 text-sky-700 rounded-tr text-bold py-3">Actions</span>
      </div>
      <div class="border border-t-O h-[300px] overflow-scroll">
        <div class="w-full grid grid-cols-10 border-b border-b-sky-600" v-for="thing in user.things" :key="thing._id">
          <span class="pl-2 col-span-3 capitalize text-sky-600 text-bold py-2 m-1">{{thing.name}}</span>
          <span class="text-center capitalize border-l -ml-0.5 border-l-sky-700 text-sky-600 text-bold py-2 m-1">{{thing.material}}</span>
          <span class="text-center capitalize border-l -ml-0.5 border-l-sky-700 text-sky-600 text-bold py-2 m-1">{{thing.color}}</span>    
          <span class="text-right pr-2 capitalize col-span-2 border-l -ml-0.5 border-l-sky-700 text-sky-600 text-bold py-2 m-1">{{thing.brand}}</span>
          <nuxt-link :to="{name: 'mythings-slug', params: {id: thing._id, slug: getSlug(thing.name)}}" class="text-center border border-sky-600 text-sky-600 rounded text-bold py-2 m-1 hover:text-white hover:bg-sky-600">
            <span class="">Voir</span>
          </nuxt-link>
          
          <button @click="dialogFormUpdate = true" class="text-center border border-orange-400 text-orange-400 rounded text-bold py-2 m-1 hover:text-white hover:bg-orange-400">Modifier</button>
          <button @click="dialogConfirm = true" class="text-center border border-rose-400 text-rose-400 rounded text-bold py-2 m-1 hover:text-white hover:bg-rose-400">Supprimer</button>
          <div id="dialogConfirm" v-if="dialogConfirm" class="w-1/3 flex flex-col bg-slate-100 shadow-sm border rounded-lg px-4 py-4 text-center absolute top-20 right-[30%] z-10">
              <span  class="text-sm pt-1">Êtes-vous sûr de vouloir supprimer</span>
              <div class="py-4 flex items-center justify-center">
                <span  class=" text-sky-600 text-md mr-2 capitalize">{{thing.name}}</span>
                <span  class=" text-sm">de votre liste ?</span>
              </div>
              <div class="flex items-center justify-around mt-2">
                <button @click="dialogConfirm = false" class=" text-white bg-rose-500 hover:bg-rose-600 px-4 py-1 rounded ">Annuler</button>
                <button @click.prevent="deleteThing(thing._id)" class=" text-white bg-green-400 hover:bg-green-500 px-4 py-1 rounded ">Confirmer</button>
              </div>
              
          </div>
          <div id="dialogFormUpdate" v-if="dialogFormUpdate" class="flex flex-col w-1/2 bg-white shadow border rounded-lg p-4 absolute right-[20%] top-32">
            <div class="flex justify-between items-center">
              <span class="py-1 mb-4 text-sky-500 font-bold uppercase text-lg">Vous souhaitez modifier</span>
              <span @click="dialogFormUpdate = false" class="px-1 text-xs bg-white border border-sky-500 text-sky-500 rounded-full relative -top-6 -right-2 cursor-pointer hover:bg-sky-500 hover:text-white">X</span>
            </div>
            <div class="flex flex-col">
              <label for="name">L'intitulé de votre objet ? <span class="text-rose-600">*</span></label>
              <input class="py-2 px-2 border rounded my-2" type="text" id="name" name="name" v-model="formUpdate.name" :placeholder="thing.name">
              <label for="color">Sa couleur ?</label>
              <input class="py-2 px-2 border rounded my-2" type="text" id="color" name="color" v-model="formUpdate.color" :placeholder="thing.color ? thing.color : 'Ajouter...'">
              <label for="material">Sa matière ?</label>
              <input class="py-2 px-2 border rounded my-2" type="text" id="material" name="material" v-model="formUpdate.material" :placeholder="thing.material ? thing.material : 'Ajouter...'">
              <label for="brand">La marque ?</label>
              <input class="py-2 px-2 border rounded my-2" type="text" id="brand" name="brand" v-model="formUpdate.brand" :placeholder="thing.brand ? thing.brand : 'Ajouter...'">
              <button @click.prevent="modifyThing(thing._id)" class="py-2 px-2 border rounded my-4 border-transparent text-white bg-sky-500 hover:bg-sky-600">Modifier</button>
            </div>
          </div>
        </div>
      </div>
        
    </div>
    <div id="dialogFormCreate" v-if="dialogFormCreate"  class="flex flex-col w-1/2 bg-white shadow border rounded-lg p-4 absolute right-[20%] top-32">
            <div class="flex justify-between items-center">
              <span class="py-1 mb-4 text-sky-500 font-bold uppercase text-lg">Ajouter un objet</span>
              <span @click="dialogFormCreate = false" class="px-1 text-xs bg-white border border-sky-500 text-sky-500 rounded-full relative -top-6 -right-2 cursor-pointer hover:bg-sky-500 hover:text-white">X</span>
            </div>
            <div class="flex flex-col">
              <label for="name">De quel objet s'agit-il ? <span class="text-rose-600">*</span></label>
              <input class="py-2 px-2 border rounded my-2" type="text" id="name" name="name" v-model="formCreate.name" placeholder="ex: ma montre, le parapluie de mamie, etc...">
              <label for="color">A-t-il une couleur particulière ?</label>
              <input class="py-2 px-2 border rounded my-2" type="text" id="color" name="color" v-model="formCreate.color" placeholder="ex: rose, vert, etc...">
              <label for="material">Précisez la matière, le tissu et/ou le matériau</label>
              <input class="py-2 px-2 border rounded my-2" type="text" id="material" name="material" v-model="formCreate.material" placeholder="ex: plastique, laine, or, etc...">
              <label for="brand">Indiquez la marque</label>
              <input class="py-2 px-2 border rounded my-2" type="text" id="brand" name="brand" v-model="formCreate.brand" placeholder="">
              <button @click.prevent="addThing" class="py-2 px-2 border rounded my-4 border-transparent text-white bg-sky-500 hover:bg-sky-600">Ajouter</button>
            </div>
          
    </div>
    <div id="dialogMessage" v-if="dialogMessage" class="w-1/5 bg-slate-200 shadow-sm border rounded-lg px-4 py-2 text-center absolute bottom-20 right-6 z-10">
        <span v-if="message.type === 'success'" class=" text-green-600 text-sm">{{message.title}}</span>
        <span v-else class=" text-rose-600 text-sm">{{message.title}}</span>
    </div>
  </div>
</div>
    
  
  </template>
  
  <script>  
  export default {
      name: "Dashboard",
      layout: "AuthLayout",
      middleware: 'auth',
      data() {
          return {
              dialogFormCreate: false,
              dialogFormUpdate: false,
              dialogMessage: false,
              dialogConfirm: false,
              typeForm: "",
              thingId: "",
              formCreate: {
                name: "",
                color: "",
                material: "",
                brand: "",
              },
              formUpdate: {
                name: "",
                color: "",
                material: "",
                brand: "",
              },
              message: {
                type: "",
                title: ""
              },
              user: {},
              things: [],
              
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
          addThing() {
            this.$axios
            .$post(`/user/thing/new`, this.formCreate)
            .then((_) => {
              this.dialogForm = false;
              this.$router.go(0);
              return this.message  = {type: "success", title: "Objet ajouté !"};
            })
            .catch((err) => {
              return this.message = {type: "error", title: "Impossible d'ajouter l'objet"};
            });
          },
          modifyThing(id) {
            this.$axios
            .$put(`/user/thing/${id}/update`, this.formUpdate)
            .then((_) => {
              this.dialogForm = false;
              this.$router.go(0);
              return this.message  = {type: "success", title: "Objet modifié !"};
            })
            .catch((err) => {
              return this.message = {type: "error", title: "Impossible de modifier l'objet"};
            });
          },
          deleteThing(id) {
            this.$axios
            .$delete(`/user/thing/${id}/delete`)
            .then((_) => {
              this.dialogConfirm = false;
              this.$router.go(0);
              return this.message  = {type: "success", title: "Objet supprimé !"};
            })
            .catch((err) => {
              return this.message = {type: "error", title: "Impossible de supprimer l'objet"};
            });
          },
          getSlug(name) {
            let nameMin = name.toLowerCase()
            let nameNoAccent = nameMin.normalize('NFD').replace(/\p{Diacritic}/gu, "")
            let nameNospace = nameNoAccent.replace(/\s/g, "_")
            let slug= nameNospace.replace(/'/g, "_")
            return `${slug}`
          },
          
      },
      created() {
            this.user = this.$auth.$state.user;
          }
      
  }
  </script>
  