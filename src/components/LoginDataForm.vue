<template>
    <form @submit.prevent>
        <h4>Данные входа</h4>
        <InputIcon
        v-model = "user.login"
        :type = "'text'"
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
        <InputIcon
        :type = "'password'"
        :placeholder = "'Повторите пароль'"
        :src = "'password.png'"
        :width = "'18'"
        :height = "'19'"
        />
        <MyButton @click="editLoginData($event)">Изменить</MyButton>
    </form>
</template>

<script>
import UserService from "@/services/UserService";

import MyButton from './MyButton.vue';
import InputIcon from './InputIcon.vue';
export default {
    data(){
        return {
            user:{}
        }
    },
    methods:{
        // editLoginData(e){
        //     UserService.editProfile(this.user).then((response)=> {
        //     if(response.status == 200) {            
        //         this.user = response.data
        //         console.log(this.user)
        //     }          
        //     }) 
        //     e.preventDefault();
        // }
    },
    components:{
        MyButton,
        InputIcon
    },
    mounted(){
        UserService.me().then((response)=> {
          if(response.status == 200) {            
            this.user = response.data
            console.log(this.user)
          }          
        })        
    }
  
}
</script>

<style scoped>
form{
    display: flex;
    flex-direction: column;
    background-color: white;
    border: 1px solid;
    border-radius: 10px;
    border-color: #D276FD;
}
.btn{
    margin: 30px 50px;
    padding: 10px 70px;
}
</style>