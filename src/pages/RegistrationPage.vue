<template>
    <router-view :user="user" @updateUser="onUpdateUser"/>
  </template>
  
  <script>
  import UserService from "@/services/UserService";
  
  export default {
    name: "RegisterPage",
    data() {
      return {
        user: {
          name: '',
          surname: '',
          file: null,
          password: '',
          login: '',
          borthdate: '',
          city: ''
        },
    }
  },
    methods: {
      register() {
        UserService.register(this.user).then((response)=> {
          if(response.status!==400) window.location.href = "/auth"
        });
      },
      onUpdateUser(data) {
        if(data.name!=null)this.user.name=data.name
        if(data.surname!=null)this.user.surname=data.surname
        if(data.login!=null)this.user.login=data.login
        if(data.password!=null)this.user.password=data.password
        if(data.file!=null)this.user.file=data.file
        if(data.city!=null)this.user.city=data.city
        if(data.borthdate!=null)this.user.borthdate=data.borthdate
      }
    }
  }
  </script>
  
  <style scoped>
  </style>