<template>
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
  ::-webkit-scrollbar {
    width: 16px;
  }

  ::-webkit-scrollbar-track, ::-webkit-scrollbar-thumb {
    border-radius: 50px;
    box-shadow: inset 0 0 10px 10px rgb(187, 188, 189, 0.5);
    border: solid 4px transparent; 

  }
</style>
