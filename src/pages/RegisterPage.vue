<template>
    <form @submit.prevent="register" enctype="multipart/form-data">
      <h4>Регистрация</h4>
      <input
          v-model="user.name"
          type="text"
          placeholder="Введите имя"
      /> 
      <input
          v-model="user.surname"
          type="text"
          placeholder="Введите фамилию"
      />
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
        Зарегистрироваться
      </button>
    </form>
  </template>
  
  <script>
  import UserService from "@/services/UserService";
  export default {
    name: "RegisterPage",
    data(){
      return {
        user:{login:'', password: '', name:'', surname:''},
      }
    },
    methods: {
      register() {
        UserService.register(this.user).then((response)=> {
          if(response.status!==400) window.location.href = "/auth"
        });
      },
    }
  }
  </script>
  
  <style scoped>
  </style>