<template>

  <div class="min-h-screen flex">
    <div class="w-1/3 flex flex-col justify-center pb-12 px-12">
      <div class="flex items-center border border-sky-700 bg-sky-600 rounded-full w-3/4 pl-4 pr-8 py-3 my-12">
      
      <img src="/img/logo.png" alt="logo" width="20%">
      <span class="text-4xl text-white">Troov List</span>
      </div>

        <h2 v-if="onLogin" class="mt-6 text-3xl font-bold text-gray-900">Connectez-vous</h2>
        <h2 v-else class="mt-6 text-3xl font-bold text-gray-900">Créez votre compte</h2>
  

        <div class="mt-8">

          <div class="mt-6 space-y-6 flex flex-col items-end">
            <div v-if="!onLogin" class="flex flex-col w-full">
              <label for="name">Indiquez votre prénom ou votre pseudo</label>
              <input id="name" name="name" class="border rounded-sm py-1 px-2 mt-2" v-model="formCreate.name" type="text"/>
            </div>
            <div class="flex flex-col w-full ">
              <label for="email">Votre email</label>
              <input v-if="onLogin" id="email" name="email" class="border rounded-sm py-1 px-2 mt-2" v-model="formLogin.email" type="text"/>
              <input v-else id="email" name="email" class="border rounded-sm py-1 px-2 mt-2" v-model="formCreate.email" type="text"/>
            </div>

            <div class="flex flex-col w-full mb-8">
              <label for="password">Votre mot de passe</label>
              <input v-if="onLogin" id="password" name="password" class="border rounded-sm py-1 px-2 mt-2" v-model="formLogin.password" type="password"/>
              <div v-else class="m-0">
                <input id="password" name="password" class=" w-full border rounded-sm py-1 px-2 mt-2" v-model="formCreate.password" type="password"/>
                <p class="text-gray-400 text-sm">( 8 caractères minimum )</p>
              </div>
              
            </div>
            <div classs="flex flex-col">
              <button v-if="onLogin" class="text-white bg-sky-600 hover:bg-sky-700 px-4 py-2 rounded " @click="submitLogin">Se connecter</button>
              <button v-else  class="text-white bg-sky-600 hover:bg-sky-700 px-4 py-2 rounded " @click="submitCreate">S'inscrire</button>
            </div>
            <p class="text-small text-rose-700" v-if="onLogin && formLogin.message">{{formLogin.message}}</p>
            <p class="text-small text-rose-700" v-if="!onLogin && formCreate.message">{{formCreate.message}}</p>

            <p v-if="onLogin" class="text-sm text-slate-500 text-center">Pas encore de compte ? <span @click="onLogin = false" class="hover:text-black cursor-pointer">Créer un compte</span></p>
            <p v-else class="text-sm text-slate-500 text-center">Vous avez déjà un compte ? <span @click="onLogin = true" class="hover:text-black cursor-pointer">Connectez-vous</span></p>
          </div>
        </div>
    </div>
    <div class="w-2/3">
      <img class="h-full w-full object-cover" src="https://images.pexels.com/photos/5097283/pexels-photo-5097283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="">
    </div>
  </div>

</template>

<script>


export default {
    name: "Connexion",
    layout: "EmptyLayout",
    auth: false,
    data() {
        return {
            typeButton: "primary",
            sizeButton: "large",
            onLogin: true,
            formCreate: {
                name: "",
                email: "",
                password: "",
                message: ""
            },
            formLogin: {
                email: "",
                password: "",
                message: ""
            },
        };
    },
    head() {
        return {
            title: "Troov List",
            meta: [
                { hid: "description", name: "description", content: "Connexion au service Troov List" }
            ]
        };
    },
    methods: {
        async submitLogin() {
          const user = {
          email: this.formLogin.email,
          password: this.formLogin.password
        }
    
            this.$auth.loginWith('local', {data: user}).then(_ => {
          this.$router.push('/dashboard')
        }).catch(err => {
              if(err.message.includes('401') ) return this.formLogin.message = 'Email ou mot de passe incorrect';
              if(err.message.includes('402')) return this.formLogin.message = 'Le mot de passe doit contenir au moins une majuscule et un chiffre.';
              if(err.message.includes('403')) return this.formLogin.message = 'Votre email ne semble pas au bon format.';
          })
          
            
        },
      submitCreate() {
          if (this.formCreate.name === "" || this.formCreate.email === "" || this.formCreate.password === "") {
            return this.formCreate.message = 'Merci de remplir tous les champs'
          }
          this.$axios.$post('/user/signup', this.formCreate).then(_ => {
         
        const user = {
          email: this.formCreate.email,
          password: this.formCreate.password
        }

        this.$auth.loginWith('local', {data: user}).then(_ => {
          this.$router.push('/dashboard')
        }).catch(err => {
            if(err.message.includes('401')) return this.formCreate.message = 'Email ou mot de passe incorrect.';
            if(err.message.includes('402')) return this.formCreate.message = 'Le mot de passe doit contenir au moins une majuscule et un chiffre.';
            if(err.message.includes('403')) return this.formCreate.message = 'Votre email ne correspond pas.';
            if(err.message.includes('409')) return this.formCreate.message = 'Il semblerait que vous ayez déjà un compte chez nous';
          })
        })    
    },
  }
}
</script>
