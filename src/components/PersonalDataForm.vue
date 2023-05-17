<template>
    <form @submit.prevent>
        <h4>Личные данные</h4>
        <div class="image-area">
            <img 
            src="../assets/realtalk.png"
            width="200"
            height="150"
            >
        </div>
        <input id="file" type="file" accept="image/*">
        <label for="file">
            <span class="input-file-btn">Выберите файл</span>
        </label>        
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
        <MyButton>Изменить</MyButton>
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
    background-color: white;
}
.btn{
    margin: 30px 50px;
    padding: 10px 70px;
}

input{
    display: none;
}

.input-file-btn {
	position: relative;
	display: inline-block;
	cursor: pointer;
	outline: none;
	text-decoration: none;
	font-size: 10pt;
	vertical-align: middle;
	color: rgb(255 255 255);
	text-align: center;
	background-color: #D276FD;
	line-height: 22px;
	height: 40px;
	padding: 10px 20px;
	box-sizing: border-box;
	border: none;
	margin: 0;
	transition: background-color 0.2s;
    border-radius: 50px;    
    border: 1px solid;
    border-color: #D276FD;
    margin-bottom: 20px;
}

.image-area{
    border: 2px solid;
    width: 50%;
    align-self: center;
    border-color: #D276FD;
    margin-bottom: 10px;
}

h4{
    margin: 30px;
}
</style>