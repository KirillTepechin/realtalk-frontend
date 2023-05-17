<template>
    <form>
        <h4>Вход</h4>
        <InputIcon
        v-model="user.login"
        :type = "'email'"
        :placeholder = "'Логин'"
        :src = "'email.png'"
        :width = "'18'"
        :height = "'14'"
        />
        <InputIcon
        v-model="user.password"
        :type = "'password'"
        :placeholder = "'Пароль'"
        :src = "'password.png'"
        :width = "'18'"
        :height = "'19'"
        />
        <div class="btn-bar">
            <MyButton :onclick="login">Войти</MyButton>
            <MyButton :onclick="goToRegistration">Зарегистрироваться</MyButton>
        </div>     
    </form>
</template>

<script>

//import UserService from "@/services/UserService";

import MyButton from './MyButton.vue';
import InputIcon from './InputIcon.vue';
export default {
    components:{
        MyButton,
        InputIcon
    },
    data(){
      return {
        user:{},
      }
    },
    methods: {
      login() {
        this.$router.push('/feed')

        //  UserService.login(this.user).then(
        //     response => {
        //       console.log("токен "+response.data)
        //       localStorage.setItem('jwt', response.data)
        //     }
        // )
      },
      goToRegistration(){
        this.$router.push('/registration')
      }
    }
}
</script>

<style scoped>
form{
    display: flex;
    flex-direction: column;
    width: 35%;
    margin: auto;
    margin-top: 12%;
    background-color: #ffffff50;
    border-radius: 30px; 
    border: 1px solid;
    border-color: #D276FD;
}
.btn{
    padding: 10px;
    min-width: 150px;
    margin-top: 30px;
    margin-bottom: 30px;
}
.btn-bar{
    display: flex;
    justify-content: space-evenly;
}
</style>