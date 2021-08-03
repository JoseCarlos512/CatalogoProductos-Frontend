<template>
    <v-card outlined>
        <v-card-title>
            <h3>Login</h3>
            <v-spacer/>
            <v-btn 
            text
            @click="salir">
                Salir
            </v-btn>
        </v-card-title>

        <v-divider></v-divider>
        
        <v-card-text>
            <v-text-field
                label="Usuario*"
                required
            ></v-text-field>
            <v-text-field
                label="Password*"
                required
            ></v-text-field>
            <v-card-actions>
                <v-btn class="white--text" color="pink darken-2" block>
                    Ingresar
                </v-btn>
            </v-card-actions>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            
        }
    },
    methods: {
        salir () {
            this.$emit("salir");
        }
    },
}
</script>

<style scoped>

</style>