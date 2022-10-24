<template lang="">
    <section class="bg-tertiary-color text-white h-[5vh] select-none flex justify-center w-full">
        <font-awesome-icon :icon="['far', 'clock']" class="ml-2 my-auto"/>
        <input type="text" v-model="input" placeholder="Search Hogeschool Leiden" class="rounded-md border border-quartinary-color bg-primary-color ml-4 px-2 my-2 w-1/2 max-w-[600px]"/>
        <font-awesome-icon :icon="['fas', 'xmark']" class="-ml-6 my-auto"/>
        <font-awesome-icon :icon="['far', 'circle-question']" class="my-auto ml-8"/>
        <button @click="handleSignOut" v-if={isLoggendIn}> Sign out </button>
        <h2>test: {{user}}</h2>

    </section>
</template>
<script setup> 
 
    import {onMounted, ref} from "vue";
    import {getAuth, onAuthStateChanged, signOut} from "firebase/auth";
    import {useRouter} from 'vue-router'

    const isLoggedIn = ref(false);
    const router = useRouter();

    let auth;
    onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if(user) {
        isLoggedIn.value = true;
        } else {
        isLoggedIn.value = false;
        }
        });
    });

    const handleSignOut = () => {
    signOut(auth).then(() =>{
        router.push("/login")
    });
    }

    const auths = getAuth();
    const user = auths.currentUser;
    console.log(user)
    if (user !== null) {
      const email = user.email;
      console.log(email)
    }

  </script>
<style lang="">
    
</style>