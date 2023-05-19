<template>
    <form @submit.prevent>
        <h4>Личные данные</h4>
        <div class="image-area">
            <img 
            src="../assets/realtalk.png"
            >
        </div>
        <input @change="onFileChange" id="file" type="file" accept="image/*">
        <label for="file">
            <span class="input-file-btn">Выберите файл</span>
        </label>        
        <InputIcon
        v-model = "user.name"
        :type = "'text'"
        :placeholder = "'Имя'"
        :src = "'name.png'"
        :width = "'18'"
        :height = "'18'"
        />
        <InputIcon
        v-bind:modelValue = "user.surname"
        :type = "'text'"
        :placeholder = "'Фамилия'"
        :src = "'name.png'"
        :width = "'18'"
        :height = "'18'"
        />
        <InputIcon
        v-model = "year"
        :type = "'date'"
        :placeholder = "'Дата рождения'"
        :src = "'cake.png'"
        :width = "'18'"
        :height = "'18'"
        />
        <InputIcon
        v-bind:modelValue = "user.city"
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
import UserService from "@/services/UserService";

import MyButton from './MyButton.vue';
import InputIcon from './InputIcon.vue';
export default {
    data(){
        return {
            user:{
                login:"",
                name:"",
                surname:"",
                photo:"",
                city:"",
                borthdate: Date,
                subscribers:[],
                subscriptions:[]
            }
        }
    },
    components: {
        MyButton,
        InputIcon
    },
    methods:{
        onFileChange(e) {
            console.log(e)
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.createImage(files[0]);
        },
        createImage(file) {
            
            var reader = new FileReader();
            var vm = this;
            
            reader.onload = (e) => {
                var preview = document.querySelector("#app > div.page-edit > form > div.image-area > img")
                vm.image = e.target.result;
                preview.src = e.target.result;
            };
            reader.readAsDataURL(file);
            //this.actor.photo = file;
        },
        
    },
    mounted(){
        UserService.me().then((response)=> {
          if(response.status == 200) {            
            this.user = response.data
            console.log(this.user)
          }          
        })
    },
    computed:{
        year(){
            console.log(new Date(this.user.borthdate).getFullYear())
            return new Date(this.user.borthdate)
        }
  }
}
</script>

<style scoped>
form{
    display: flex;
    flex-direction: column;
    width: 35%;
    background-color: white;
    border: 1px solid;
    border-radius: 10px;
    border-color: #D276FD;
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
    border: 0.5px solid;
    border-color: #D276FD;
    margin-bottom: 20px;
}

.image-area{
    border: 2px solid;
    align-self: center;
    border-color: #D276FD;
    margin-bottom: 10px;
    overflow: hidden;
    border-radius: 50%;

    width: 150px;
    height: 150px;
}
img{
    width: auto;
    height: 100%;
    margin: 0 auto;
}
h4{
    margin: 30px;
}
</style>