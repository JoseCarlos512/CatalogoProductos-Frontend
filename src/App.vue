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
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Login</span>
      </v-btn>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
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
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
