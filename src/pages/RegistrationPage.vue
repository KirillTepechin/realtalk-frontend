<template>
    <router-view/>
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