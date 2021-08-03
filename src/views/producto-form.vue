<template>
  <v-card outlined>
    
    <v-card-title>
      <h3>Nuevo-Editar Producto</h3>
      <v-spacer/>
      <v-btn outlined @click="$router.back()">
          regresar
      </v-btn>
    </v-card-title>

    <v-divider/>

    <v-card-text>
        <v-form lazy-validation>
            <v-text-field
            :counter="10"
            label="Codigo*"
            type="number"
            required
            outlined
          ></v-text-field>
          <v-text-field
            :counter="10"
            label="Nombre*"
            required
          ></v-text-field>
          <v-textarea
            label="Descripcion*"
            required
          ></v-textarea>
          <v-text-field
            :counter="10"
            label="Precio*"
            type="number"
            required
          ></v-text-field>
        </v-form>
    </v-card-text>
    
    <v-card-actions>
      <v-btn color="green" outlined>
          Guardar
      </v-btn>
    </v-card-actions>

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