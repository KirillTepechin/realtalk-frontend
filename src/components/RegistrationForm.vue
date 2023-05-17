<template>
    <form>
        <h4>Регистрация</h4>
        <InputIcon
        :type = "'text'"
        :placeholder = "'Имя'"
        :src = "'name.png'"
        :width = "'18'"
        :height = "'18'"
        />
        <InputIcon
        :type = "'text'"
        :placeholder = "'Фамилия'"
        :src = "'name.png'"
        :width = "'18'"
        :height = "'18'"
        />
        <InputIcon
        :type = "'email'"
        :placeholder = "'Логин'"
        :src = "'email.png'"
        :width = "'18'"
        :height = "'14'"
        />
        <InputIcon
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

        <MyButton :onclick="goToStep2">Зарегистрироваться</MyButton>
    </form>
</template>

<script>
import MyButton from './MyButton.vue';
import InputIcon from './InputIcon.vue';
export default {
    components:{
        MyButton,
        InputIcon
    },
    methods:{
        goToStep2(){
            this.$router.push("/registration/step-2")
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
    margin-top: 7%;
    background-color: #ffffff50;
    border-radius: 30px; 
    border: 1px solid;
    border-color: #D276FD;
}
.btn{
    margin: 30px 50px;
    padding: 10px 70px;
}
</style>