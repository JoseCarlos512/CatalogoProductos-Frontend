<template>
    <v-card outlined>
        <form 
        action="post" 
        id="formImagen"
        enctype="multipart/form-data">
            <v-card-title>
                <h3>Cargar imagen del producto: </h3>
                <v-spacer/>
                <v-btn icon @click="$emit('salir')">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-card-title>

            <v-divider></v-divider>
            
            <v-card-text>
                <v-file-input  
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
export default {
    name: "subir-imagen"
    
}
</script>

<style scoped>
    
</style>