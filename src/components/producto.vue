<template>
    <v-card
        class="mx-auto my-12"
        max-width="220"
        max-height="640"
    >
        <!-- <template slot="progress">
            <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
            ></v-progress-linear>
        </template> -->

        <v-img height="150"
               :src="rowProducto.url_imagen != null && rowProducto.url_imagen.includes('http')?rowProducto.url_imagen:'http://127.0.0.1:8000/imagenes/'+rowProducto.url_imagen"
               @click="dialogImagen = true"
        ></v-img>

        <v-card-title>{{rowProducto.codigo}} | {{rowProducto.nombre}}</v-card-title>

        <v-card-text>
            <v-row align="center" class="mx-0" >
                <v-rating
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                ></v-rating>

                <div class="grey--text ms-4">
                    4.5 (413)
                </div>
            </v-row>

            <div class="my-4 text-subtitle-1">
                $/ {{rowProducto.precio}}
            </div>

            <div>
                {{rowProducto.descripcion}}
            </div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-text>
            <v-chip-group
                active-class="deep-purple accent-4 white--text"
                column
            >
                <v-chip @click="setLike()">
                    <v-icon size='20'>mdi-thumb-up-outline</v-icon> ({{rowProducto.like}})
                </v-chip>

                <v-chip @click="setDislike()">
                    <v-icon size='20'>mdi-thumb-down-outline</v-icon> ({{rowProducto.dislike}})
                </v-chip>
            </v-chip-group>
        </v-card-text>

        <v-card-actions>
            <v-btn color="green" text @click="openForm">
                Editar
            </v-btn>
            <v-btn color="red" @click="eliminar()" text>
                Eliminar
            </v-btn>
        </v-card-actions>

        <v-dialog
            v-model="dialogImagen"
            persistent
            max-width="500px"
            transition="dialog-transition"
        >
            <subir-imagen 
            :producto="rowProducto"
            @salir="dialogImagen=false"
            @listar="$emit('listar')">
            </subir-imagen>
        </v-dialog>

    </v-card>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';
import subirImagen from "./subir-imagen";

export default {
    name: 'Producto',
    components: {
        'subir-imagen' : subirImagen
    },
    props: ['rowProducto'],
    data() {
        return {
            dialogImagen: false
        }
    },
    computed: {
        ...mapState(['url'])
    },
    methods: {
        openForm() {
            this.$router.push({name: 'Producto-edit', params: {id: this.rowProducto.id}}); // name: nombre ruta
        },
        setLike() {
            const url = this.url + "set_like/" + this.rowProducto.id;
            axios.put(url)
            .then(response => {
                if (response.data.res == true) {
                    this.$toastr.success(response.data.message, 'Mensaje');
                    this.rowProducto.like ++;
                } else {
                    this.$toastr.error(response.data.message, 'Mensaje');
                }
            })
        },
        setDislike() {
            const url = this.url + "set_dislike/" + this.rowProducto.id;
            axios.put(url)
            .then(response => {
                if (response.data.res == true) {
                    this.$toastr.success(response.data.message, 'Mensaje');
                    this.rowProducto.dislike --;
                } else {
                    this.$toastr.error(response.data.message, 'Mensaje');
                }
            })
        },
        eliminar() {
            if (confirm("Seguro que quiere eliminar el registro?")) {
                const url = this.url + "productos/" + this.rowProducto.id;
                axios.delete(url)
                .then(response => {
                    if (response.data.res == true) {
                        this.$toastr.success(response.data.message, 'Mensaje');
                        this.$emit("listar");
                    } else {
                        this.$toastr.error(response.data.message, 'Mensaje');
                    }
                })
            }
        }
    }, 
    mounted() {
        
    },
}
</script>

<style scoped>

</style>