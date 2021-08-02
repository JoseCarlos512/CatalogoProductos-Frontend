<template>
  <v-card outlined>

    <v-card-title>
      <h3>Nuevo-Editar Producto</h3>

      <v-space/>
      <v-btn outlined @click="$router.back()">
          regresar
      </v-btn>
    </v-card-title>

    <v-divider/>
    
    <v-card-text>
      <v-card-actions>
        <v-btn color="green" outlined>
            Guardar
        </v-btn>
      </v-card-actions>
    </v-card-text>

  </v-card>
</template>


<!-- Aqui va todo el codigo -->
<!-- java script o vuejs    -->
<script>
export default {
  name: "producto-form",
  data() {
    // Declaracion de variables locales
    return {
      nombre: ""
    }
  },
  computed: {
    // Cambiar el estado o valor de las variables en tiempo de ejecucion.
    // operaciones de variable
  },
  created() {
    // Se ejecuta antes de dibujar el (DOM  de la pagina = la pagina)
  },
  mounted() {
    // Se ejecuta despues de dibujar el (DOM  de la pagina = la pagina)
  },
  methods: {
    
  },
}
</script>

<style scoped>

</style>