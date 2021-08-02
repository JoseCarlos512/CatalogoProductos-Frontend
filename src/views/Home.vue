<template>
  <v-card outlined>
    <v-card-title>
      Catalogo de Productos
    </v-card-title>
    <v-divider/>


    <v-card-text>
        <v-row>
            <v-col cols='10' sm='12' md='10' >
              <v-text-field
                label="Buscar por nombre o descripcion"
                outlined
                dense>
              </v-text-field>
            </v-col>
            <v-col cols='2' sm='12' md='2'  >
              <v-btn color='green' text outlined @click="openForm">
                Nuevo Producto
              </v-btn>
            </v-col>
        </v-row>
        <v-row style="margin-top: -30px">
          <v-col cols="12" md="3" sm="6" v-for="(producto, index) in productos" :key="index">
              <producto/>
          </v-col>
        </v-row >
    </v-card-text>

  </v-card>
</template>

<script>
  import producto from "../components/producto"
  export default {
    name: 'Home',
    components: {
      producto
    },
    data() {
      return {
        productos : [
          {id : 1},
          {id : 2},
          {id : 3},
          {id : 4},
          {id : 5},
          {id : 6},
          {id : 7},
          {id : 8},
          {id : 9},
          {id : 10},
          {id : 11},
          {id : 12}
        ]
      }
    },
    methods: {
      openForm() {
        this.$router.push({name: 'Producto'}); // name: nombre ruta
      }
    },
  }
</script>
