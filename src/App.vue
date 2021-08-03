<template>
  <v-app>
    <v-app-bar
      app
      color="pink darken-2"
      dark 
    >
      <!-- dark = Letras se pinten blanco de la barra  -->
      <div class="d-flex align-center">
        <h2>Shop Store</h2>
      </div>

      <v-spacer/>

      <v-btn
        text
        @click="dialog = !dialog"
      >
        <span class="mr-2">Login</span>
      </v-btn>

      <v-btn
        text
      >
        <span class="mr-2">Salir</span>
        <v-avatar 
        size='35'
        color="indigo"
        >
          <v-icon dark>
            mdi-account-circle
          </v-icon>
        </v-avatar>
      </v-btn>
    </v-app-bar>

    <v-main class="grey lighten-2">
      <v-container>
        <router-view/>
      </v-container>
    </v-main>

    <v-dialog v-model="dialog"  max-width="450">
        <Login 
          @click="salir"
        />
    </v-dialog>
  </v-app>
</template>

<script>
import Login from "./components/login"

export default {
  name: 'App',
  components : {
    Login
  },
  data() {
    return {
      dialog: false
    }
  },
  methods: {
    salir() {
      console.log("No llega");
      this.dialog = false;
    }
  },
};
</script>
