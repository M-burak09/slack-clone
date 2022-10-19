<template>
    <NavBar :function="handleSignOut" isLoggedIn="isLoggedIn"/>
    <section class="md:flex">
      <SideBar/>
      <MainBlock/>
      <!-- <button @click="handleSignOut" v-if="isLoggedIn"> Sign out </button> -->
    </section>
    
  </template>
<!--   
  <script setup>
  import SideBar from './SideBar.vue';
  import NavBar from './NavBar.vue';
  import MainBlock from './MainBlock.vue';
  
  import '@/assets/tailwind.css';
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
  

  </script> -->

  <script> 

    import SideBar from './SideBar.vue';
    import NavBar from './NavBar.vue';
    import MainBlock from './MainBlock.vue'; 
    export default {
    components: {
      SideBar,
      NavBar,
      MainBlock,
    }
  }</script>