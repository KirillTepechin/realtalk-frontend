<template>    
        <form novalidate="true">
        <h4>Регистрация</h4>

        <!-- <div class="errors">
            <p v-if="errors.length">
            <b>Пожалуйста, исправьте указанные ошибки:</b>
            <ul>
              <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
            </ul>
          </p>
        </div> -->
        
        <InputIcon
        v-model="name"
        :type = "'text'"
        :placeholder = "'Имя'"
        :src = "'name.png'"
        :width = "'18'"
        :height = "'18'"
        />
        <div class="error">
            <label>Поле "Имя" должно быть заполнено</label>
        </div>        
        <InputIcon
        v-model="surname"
        :type = "'text'"
        :placeholder = "'Фамилия'"
        :src = "'name.png'"
        :width = "'18'"
        :height = "'18'"
        />
        <div class="error">
            <label>Поле "Имя" должно быть заполнено</label>
        </div> 
        <InputIcon
        v-model="login"
        :type = "'text'"
        :placeholder = "'Логин'"
        :src = "'email.png'"
        :width = "'18'"
        :height = "'14'"
        />
        <div class="error">
            <label>Поле "Имя" должно быть заполнено</label>
        </div> 
        <InputIcon
        v-model="password"
        :type = "'password'"
        :placeholder = "'Пароль'"
        :src = "'password.png'"
        :width = "'18'"
        :height = "'19'"
        />
        <div class="error">
            <label>Поле "Имя" должно быть заполнено</label>
        </div> 
        <InputIcon
        v-model="passwordR"
        :type = "'password'"
        :placeholder = "'Повторите пароль'"
        :src = "'password.png'"
        :width = "'18'"
        :height = "'19'"
        />
        <div class="error">
            <label>Поле "Имя" должно быть заполнено</label>
        </div> 

        <MyButton @click="goToStep2">Зарегистрироваться</MyButton>
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
    props: ['user'],
    data() {
      return {
        errors:[],
        name: '',
        surname: '',
        login:'',
        password:'',
        passwordR:''
      }
    },
    methods: {
        goToStep2() {
            this.$emit('updateUser', {
                name: this.name,
                surname: this.surname,
                login: this.login,
                password: this.password
            })
            this.$router.push("/registration/step-2")
        },

    },
    created() {
        this.name = this.$props.user.name
        this.surname = this.$props.user.surname
        this.login = this.$props.user.login
        this.password = this.$props.user.password
        this.passwordR = this.$props.user.password
    },
  
}
</script>

<style scoped>
form{
    display: flex;
    flex-direction: column;
    max-width: 30%;  
    margin: auto;
    /* margin-top: 7%; */
    margin-top: 60px;
    background-color: #ffffff50;
    border-radius: 30px; 
    border: 1px solid;
    border-color: #D276FD;
}
.btn{
    margin: 30px 50px;
    padding: 10px 70px;
}
.error{
    padding: 2px;
    background-color: #ffb6b6;
    margin: 0px 50px;
    
    border-radius: 2px;
    border-color: #ed5656;
    display: flex;
}

label{
  font-size: 11.5pt;
  color: #b10000;
}
</style>