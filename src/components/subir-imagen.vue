<template>
    <v-card outlined>
        <form 
        action="post" 
        id="formImagen"
        enctype="multipart/form-data"
        @submit.prevent="save()">
            <v-card-title>
                <h3>Cargar imagen del producto: {{producto.codigo}}</h3>
                <v-spacer/>
                <v-btn icon @click="$emit('salir')">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-card-title>

            <v-divider></v-divider>
            
            <v-card-text>
                <v-file-input  
                        v-model="file"
                        type="file"
                        label="File input"
                        dense
                        filled
                        prepend-icon="mdi-camera" 
                        name="url_imagen" 
                        id="url_imagen" 
                        ref="url_imagen" 
                        accept="image/gif, image/jpeg, image/png, image/jpg"
                        required>
                </v-file-input>
            </v-card-text>
            <v-card-actions>
                <v-btn class="white--text" color="pink darken-2" type="submit" block>
                    Subir imagen
                </v-btn>
            </v-card-actions>
        </form>
    </v-card>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex'

export default {
    name: "subir-imagen",
    props: ["producto"],
    data() {
        return {
            loading: false,
            file: null
        }
    },
    computed: {
        ...mapState(['url']) 
    },
    methods: {
        save() {
            //console.log("Imagen-name: " + this.field.name);
            const url = this.url + "set_imagen/" + this.producto.id;
            let data = new FormData();
            data.append('imagen', this.file);
            data.append('_method', 'PUT');

            this.loading = true;
            axios.post(url, data  )
            .then(response => {
                if (response.data.res == true) {
                    this.$toastr.success(response.data.message);
                    this.$emit('listar');
                    this.$emit('salir');
                } else {
                    this.$toastr.error(response.data.message);
                }
                this.loading = false;  
            })

        }
    },
}
</script>

<style scoped>
    
</style>