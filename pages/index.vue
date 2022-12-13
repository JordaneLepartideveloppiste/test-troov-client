<template>

  <div class="min-h-screen flex">
    <div class="w-1/3 flex flex-col justify-center py-12 px-12">
      <div class="">

        <h2 class="mt-6 text-3xl font-bold text-gray-900">Se connecter</h2>
  

        <div class="mt-8">

          <div class="mt-6 space-y-4">
            <div class="flex flex-col ">
              <label for="name">Indiquez votre prénom ou votre pseudo</label>
              <input id="name" name="name" class="border rounded-sm" v-model="form.name" type="text"/>
            </div>
            <div class="flex flex-col ">
              <label for="email">Votre email</label>
              <input id="email" name="email" class="border rounded-sm" v-model="form.email" type="text"/>
            </div>

            <div class="flex flex-col space-y-1">
              <label for="password">Votre mot de passe</label>
              <input id="password" name="password" class="border rounded-sm" @keydown.enter.native="submitForm" v-model="form.password" type="password"/>
            </div>

            <ButtonStyled :type="typeButton" :size="sizeButton" @click="submitForm">Se connecter</ButtonStyled>

            <p class="text-sm text-slate-500 text-center">Pas encore de compte ? <span>Créer un compte</span></p>
          </div>
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
    auth: "guest",
    layout: "empty",
    data() {
        return {
            title: process.env.name + " | Connexion",
            typeButton: "primary",
            sizeButton: "large",
            
            form: {
                email: "",
                password: "",
                error: ""
            },
        };
    },
    head() {
        return {
            title: this.title,
            meta: [
                { hid: "description", name: "description", content: "Connexion au service MesVolontés" }
            ]
        };
    },
    methods: {
        async submitForm() {
            this.loading = true;
            const credentials = {
                email: this.form.email,
                password: this.form.password
            };
            await this.$auth.loginWith("local", {
                data: credentials
            }).then(_ => {
                this.$notify({ group: "success", title: "Vous êtes connecté !" });
                this.$router.push("/auth");
            }).catch(e => {
                this.loading = false;
                this.$notify({ group: "error", title: "Email ou mot de passe incorrect" });
            });
        }
    },
    async mounted() {
    },
    created() {
    },
    components: { ButtonStyled }
}
</script>
