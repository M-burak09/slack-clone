<template>
    <NavBar :function="handleSignOut" isLoggedIn="isLoggedIn"/>
    <section class="flex">
      <SideBar/>
      <MainBlock/>
    </section>
    
  </template>

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
  }
  </script>