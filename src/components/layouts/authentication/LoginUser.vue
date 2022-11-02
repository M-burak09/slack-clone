<template>
    <section class="bg-primary-color h-[100vh] text-white w-full">
        <div class="bg-quartinary-color h-[50vh] w-[40vw] m-auto translate-y-[50%] p-4">
            <h1 class="text-2xl text-center mt-4 mb-8">Login to account</h1>
            <input class="w-[80%] p-2 mx-auto my-4 block text-primary-color" type="email" placeholder="Email" v-model="email">
            <input class="w-[80%] p-2 mx-auto my-4 block text-primary-color" type="password" placeholder="Password" v-model="password">
            <p v-if="errMsg">{{errMsg}}</p>
            <div class="pt-4">
                <button class="px-16 w-1/2 block mx-auto py-2 bg-primary-color" @click="register">Login</button> 
                <router-link to="/" custom v-slot="{ navigate }">
                    <span @click="navigate" @keypress.enter="navigate" role="link" class="cursor-pointer px-8 py-2 w-[265px] block mx-auto">No account? Sign up instead</span>
                </router-link>
            </div>
        </div> 
    </section>
</template>

<script setup>
import {ref} from 'vue';
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {useRouter} from 'vue-router'
const email = ref("");
const password = ref("");
const router = useRouter();
const errMsg = ref();
const register = () => {
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
        .then(() => {
            console.log("Login succesfull!");
            router.push('/home')
        })
        .catch((error) => {
            console.log(error.code);
            switch(error.code) {
                case "auth/invalid-email":
                    errMsg.value = "Invalid email";
                    break;
                case "auth/user-not-found":
                    errMsg.value = "No account with that email was found";
                    break;
                case "auth/wrong-password":
                    errMsg.value = "Incorrect password";
                    break;
                default:
                    errMsg.value = "Email or password was incorrect";
                    break;
            }
        });
};

</script>