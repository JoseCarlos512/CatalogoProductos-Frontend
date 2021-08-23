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
        v-if="!isLogin"
      >
        <span class="mr-2">Login</span>
      </v-btn>

      <v-btn
        text
        @click="logout"
        v-if="isLogin"
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

    <v-dialog v-model="dialog"  max-width="450" persistent>
        <Login 
          @salir="salir"
        />
    </v-dialog>
  </v-app>
</template>

<script>
import Login from "./components/login"
import store from "@/store/index";
import { mapGetters } from 'vuex';

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
  computed: {
    ...mapGetters({
      isLogin: "isLogin",
      user: "getUser"
    })
  },
  methods: {
    salir() {
      this.dialog = false;
    },
    logout() {
      if(confirm("Seguro que quiere salir?")) {
        store.dispatch("destroyToken")
        .then(response => {
            if (response.data.res == true) {
              this.$toastr.success(response.data.message);
            } else {
              this.$toastr.error(response.data.message);
            }
        });
      }
    }
  },
};
</script>
