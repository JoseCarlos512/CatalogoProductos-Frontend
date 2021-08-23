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
            <form 
            @submit.prevent="login()"
            lazy-validation>
                <v-text-field
                    v-model="user"
                    label="Usuario*"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="password"
                    label="Password*"
                    required
                ></v-text-field>
                <v-card-actions>
                    <v-btn class="white--text" type="submit" color="pink darken-2" block>
                        Ingresar
                    </v-btn>
                </v-card-actions>
            </form>
        </v-card-text>
    </v-card>
</template>

<script>
import store from "@/store/index";

export default {
    name: "Login",
    data() {
        return {
            user: "",
            password: ""
        }
    },
    methods: {
        salir () {
            this.$emit("salir");
        },
        login() {
            store.dispatch('getToken', {
                email: this.user,
                password: this.password
            }).then(response => {
                if(response.data.res == true) {
                    this.$toastr.success(response.data.message);
                    this.$emit("salir");
                } else {
                    this.$toastr.error(response.data.message);
                }
            });
        }
    },
}
</script>

<style scoped>

</style>