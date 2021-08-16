 <template>
  <v-card outlined :loading="loading">
    <v-card-title>
      <h2>Catalogo de Productos</h2>
      <v-spacer/>
      <v-btn color='green' text outlined @click="openForm">
        Nuevo Producto
      </v-btn>
    </v-card-title>
    <v-divider/>


    <v-card-text>
        <v-row>
            <v-col cols='10' sm='12' md='10' >
              <v-text-field
                v-model="buscar"
                label="Buscar por nombre o descripcion"
                outlined
                dense>
              </v-text-field>
            </v-col>
            <v-col cols='2' sm='12' md='2'  >
              <v-btn color='primary' @click="getAllProductos()">
                Buscar
              </v-btn>
            </v-col>
        </v-row>
        <v-row style="margin-top: -30px">
          <v-col cols="12" md="3" sm="6" v-for="(producto, index) in productos" :key="index">
              <Producto :rowProducto="producto" @listar="getAllProductos()"/>
          </v-col>
        </v-row >
    </v-card-text>
  </v-card>
</template>

<script>
  import Producto from "../components/producto"
  import axios from "axios"
  import {mapState} from "vuex"


  export default {
    name: 'Home',
    components: {
      Producto
    },
    data() {
      return {
        productos : [],
        loading : false,
        buscar: ""
      }
    },
    computed: {
      ...mapState(['url'])
    },
    methods: {
      openForm() {
        this.$router.push({name: 'Producto'}); // name: nombre ruta
      },
      getAllProductos() {
        this.loading = true;

        const url = this.url + "productos?txtBuscar=" + this.buscar;
        axios.get(url)
        .then(response => {
          console.log(response.data);
          this.productos = response.data;

          this.loading = false;
        })
        .catch()
      }
    },
    mounted() {
      this.getAllProductos();
    },
  }
</script>
