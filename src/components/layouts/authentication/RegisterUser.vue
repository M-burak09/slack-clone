<template>
    <section class="bg-primary-color h-[100vh] text-white w-full">
        <div class="bg-quartinary-color h-[50vh] w-[40vw] m-auto translate-y-[50%] p-4">
            <h1 class="text-2xl text-center mt-4 mb-8">Create an account</h1>
            <input class="w-[80%] p-2 mx-auto my-4 block text-primary-color" type="email" placeholder="Email" v-model="email">
            <input class="w-[80%] p-2 mx-auto my-4 block text-primary-color" type="password" placeholder="Password" v-model="password">
            <div class="pt-4">
                <button class="px-16 w-1/2 block mx-auto py-2 bg-primary-color" @click="register">Sign up</button> 
                <router-link to="/login" custom v-slot="{ navigate }">
                    <span @click="navigate" @keypress.enter="navigate" role="link" class="cursor-pointer px-8 py-2 w-[300px] block mx-auto">Already an account? Login instead</span>
                </router-link>
            </div>
        </div> 
    </section>
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
            router.push('/home')
        })
        .catch((error) => {
            console.log(error.code);
            alert(error.message);
        });
};
</script>