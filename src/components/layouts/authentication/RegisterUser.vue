<template lang="">
    <h1>Create an account</h1>
    <input type="email" placeholder="Email" v-model="email">
    <input type="password" placeholder="Password" v-model="password">
    <button @click="register">Submit</button>
    <button @click="signInWithGoogle">Sign in with google</button>
</template>

<script setup>
import {ref} from 'vue';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {useRouter} from 'vue-router';
const email = ref("");
const password = ref("");
const router = useRouter();
const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then(() => {
            console.log("Registration succesfull!");
            router.push('/')
        })
        .catch((error) => {
            console.log(error.code);
            alert(error.message);
        });
};

const signInWithGoogle = () => {

};
</script>
<style lang="">
    
</style>