<template>
    <form @submit.prevent="login" enctype="multipart/form-data">
      <h4>Вход</h4>
      <input
          v-model="user.login"
          type="text"
          placeholder="Введите логин"
      />
      <input
          v-model="user.password"
          type="password"
          placeholder="Введите пароль"
      />
      <button
          type="submit"
      >
        Войти
      </button>
    </form>
    <button
          v-on:click="get"
      >
        получай
      </button>
  </template>
  
  <script>
  
  
  import UserService from "@/services/UserService";
  
  export default {
    name: "LoginPage",
    data(){
      return {
        user:{},
      }
    },
    methods: {
      login() {
         UserService.login(this.user).then(
            response => {
              console.log("токен "+response.data)
              localStorage.setItem('jwt', response.data)
            }
        )
      },
      get(){
        UserService.me().then(
            response => {
              console.log("ПОльзователь - "+response.data)
            }
        )
      }
    }
  }
  
  
  
  </script>
  
  <style scoped>
  
  </style>