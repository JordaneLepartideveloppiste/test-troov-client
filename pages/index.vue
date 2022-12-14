<template>

  <div class="min-h-screen flex">
    <div class="w-1/3 flex flex-col justify-center py-12 px-12">


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
              <input id="email" name="email" class="border rounded-sm py-1 px-2 mt-2" v-model="getForm(onLogin).email" type="text"/>
            </div>

            <div class="flex flex-col w-full mb-8">
              <label for="password">Votre mot de passe</label>
              <input id="password" name="password" class="border rounded-sm py-1 px-2 mt-2" @keydown.enter="submitLogin" v-model="getForm(onLogin).password" type="password"/>
            </div>
            <div classs="flex flex-col">
              <button v-if="onLogin" class="border border-transparent text-white bg-sky-600 hover:bg-sky-700 px-4 py-2 rounded " @click="submitLogin">Se connecter</button>
              <button v-else  class="border border-transparent text-white bg-sky-600 hover:bg-sky-700 px-4 py-2 rounded " @click="submitSignup">S'inscrire</button>
            </div>
            <p class="color-danger text-small" v-if="formLogin.message">{{formLogin.message}}</p>
            <p class="color-danger text-small" v-if="formCreate.message">{{formCreate.message}}</p>

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
import ButtonStyled from '~/components/ButtonStyled.vue';


export default {
    name: "Connexion",
    layout: "empty",
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
          this.$auth.loginWith('local', {data: this.form}).then(async () => {
        this.$router.push('/dashboard')
      }).catch(err => {
        console.log(err)
        if(err.response.status === 401) return this.formLogin.message = 'Email ou mot de passe incorrect';
      })
        },
        getForm(ctx) {
          if(!ctx) {
            return this.formCreate
          }
          return this.formLogin
        }
    },
}
</script>
