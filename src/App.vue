<template>
  <RegisterPage/>
  <LoginPage/>
</template>

<script>
import RegisterPage from './pages/RegisterPage.vue'
import LoginPage from './pages/LoginPage.vue'

export default {
  name: 'App',
  components: {
    RegisterPage,
    LoginPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
