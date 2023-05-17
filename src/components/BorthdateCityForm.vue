<template>
    <form @submit.prevent>
        <h4>Укажите дату рождения и свой город</h4>
        <InputIcon
        :type = "'date'"
        :placeholder = "'Дата рождения'"
        :src = "'cake.png'"
        :width = "'18'"
        :height = "'18'"
        />
        <InputIcon
        :type = "'text'"
        :placeholder = "'Город'"
        :src = "'city.png'"
        :width = "'18'"
        :height = "'18'"
        />
        <div class="btn-bar">
            <MyButton>Пропустить</MyButton>
            <MyButton>Далее</MyButton>
        </div>        
    </form>
</template>

<script>
import MyButton from './MyButton.vue';
import InputIcon from './InputIcon.vue';
export default {
    components:{
        MyButton,
        InputIcon
    }
  
}
</script>

<style scoped>
form{
    display: flex;
    flex-direction: column;
    width: 35%;
    margin: auto;
    margin-top: 3%;
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