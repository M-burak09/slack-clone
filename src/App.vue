<template>
  <!-- <NavBar/>
  <section class="md:flex">
    <SideBar/>
    <MainBlock/>
  </section> -->
  <router-view/>
  
</template>

<script>
import '@/assets/tailwind.css';


export default {
  name: 'App',
  components: {
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
