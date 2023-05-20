<template>
  <router-view :key="$route.path"/>
</template>

<script>
  export default {
    name: 'App',
    components: {
    }
  }
</script>

<style>
#app {
  font-family: Georgia, serif;
  text-align: center;
  color: black;
  font-size: 22pt;
}
body{
  background-image: url('assets/background.jpg');
  background-size: cover; 
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
h4{    
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: #D276FD;
}
</style>
