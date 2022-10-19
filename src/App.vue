<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <NavBar/>
  <section class="md:flex">
    <SideBar/>
    <MainBlock/>
  </section>
</template>

<script>
import SideBar from './components/layouts/SideBar.vue';
import NavBar from './components/layouts/NavBar.vue';
import MainBlock from './components/layouts/MainBlock.vue';
import '@/assets/tailwind.css';


export default {
  name: 'App',
  components: {
    SideBar,
    NavBar,
    MainBlock,
    
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
::-webkit-scrollbar {
  width: 16px;
}
::-webkit-scrollbar-track {
 
  border-radius: 50px;
  box-shadow: inset 0 0 10px 10px rgb(187, 188, 189, 0.5);
  border: solid 4px transparent;
  
}
</style>
