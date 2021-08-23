<template>
  <v-card outlined>
    <v-form 
      lazy-validation 
      @submit.prevent="save()" 
      v-model="valido"
      ref="form">
      <v-card-title>
        <h3>{{accion}} Producto</h3>
        <v-spacer/>
        <v-btn outlined @click="$router.back()">
            regresar
        </v-btn>
      </v-card-title>

      <v-divider/>

      <v-card-text>

            <error-componente 
              v-if="errores !== null"
              :errores="errores"/>

            <v-text-field
            :counter="10"
            label="Codigo*"
            v-model="producto.codigo"
            type="number"
            :rules="[
              (v) => !!v || 'Codigo es requerido',
              v => (v && v.length >= 3 && v.length <=5) || 'Codigo debe tener entre 3 y 5 digistos'
            ]"
            required
            outlined
          ></v-text-field>
          <v-text-field
            :counter="10"
            label="Nombre*"
            v-model="producto.nombre"
            :rules="[
              (v) => !!v || 'Nombre es requerido',
            ]"
            required
          ></v-text-field>
          <v-textarea
            label="Descripcion*"
            v-model="producto.descripcion"
            :rules="[
              (v) => !!v || 'Descripcion es requerido',
            ]"
            required
          ></v-textarea>
          <v-text-field
            :counter="10"
            label="Precio*"
            v-model="producto.precio"
            type="number"
            :rules="[
              (v) => !!v || 'Precio es requerido',
            ]"
            required
          ></v-text-field>
        
      </v-card-text>
    
      <v-card-actions>
        <v-btn color="green" type="submit" :loading="loading" outlined>
            Guardar
        </v-btn>
      </v-card-actions>

      <pre>
        {{errores}}
      </pre>
    </v-form>
  </v-card>
</template>


<!-- Aqui va todo el codigo -->
<!-- java script o vuejs    -->
<script>
import axios from 'axios';
import { mapState } from 'vuex';
import errores from '@/components/errores.vue';

export default {
  name: "producto-form",
  components: {
    'error-componente': errores
  },
  data() {
    // Declaracion de variables locales
    return {
      nombre: "",
      id: null,
      valido: false,
      accion: "",
      producto: {
        user: {}
      },
      errores: null,
      loading: false
    }
  },
  computed: {
    // Cambiar el estado o valor de las variables en tiempo de ejecucion.
    // operaciones de variable
    ...mapState(['url'])
  },
  created() {
    // Se ejecuta antes de dibujar el (DOM  de la pagina = la pagina)
    this.id = this.$route.params.id;
    if (this.id != null) {
      this.accion = "Editar";
    } else {
      this.accion = "Nuevo";
    }
  },
  methods: {
    getOneRowProducto() {
      const url = this.url + 'productos/' + this.id;
      axios.get(url)
      .then(response => {
        this.producto = response.data;
      })
    },
    save() {
      if (!this.$refs.form.validate())
        return;

      let url = "";
      if (this.id != null)
        url = this.url + 'productos/' + this.id;
      else 
        url = this.url + 'productos';

      this.loading = true;
      axios({
        method: this.id != null ? 'PUT': 'POST',
        url: url,
        data: this.producto
      }).then(response => {
        if (response.data.res == true) {
            this.$toastr.success(response.data.message, 'Mensaje');
            this.$router.back()
        } else {
            this.$toastr.error(response.data.message, 'Mensaje');
        }
      }).catch(e => {
        this.errores = e.response.data.errors;
        /**
         * Comentado de momentos las alertas se generan 
         * por la validacion del backend sin usando el mismo vuetify 
         */
        //this.$toastr.error(e.response.data.message, 'Mensaje'); 
      }).finally(() => {
        this.loading = false;
      })
    }
  },
  mounted() {
    // Se ejecuta despues de dibujar el (DOM  de la pagina = la pagina)
    if (this.id != null) {
      this.getOneRowProducto()
    }
  },
}
</script>

<style scoped>

</style>