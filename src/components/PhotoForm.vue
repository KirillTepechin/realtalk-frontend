<template>
    <form>
        <h4>Установите фото профиля</h4>
        <input @change="onFileChange" id="file" type="file" accept="image/*">
        <label for="file">
            <span class="input-file-btn">Выберите файл</span>
        </label>
        <div class="image-area">
            <img 
            src="../assets/surname.png"
            >
        </div>        
        <div class="btn-bar">
            <MyButton>Пропустить</MyButton>
            <MyButton>Готово</MyButton>
        </div>        
    </form>
</template>

<script>
import MyButton from './MyButton.vue';
export default {
    components:{
        MyButton
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
                var preview = document.querySelector("#app > form > div.image-area > img")
                vm.image = e.target.result;
                preview.src = e.target.result;
            };
            reader.readAsDataURL(file);
            //this.actor.photo = file;
        },
    }
  
}
</script>

<style scoped>
form{
    display: flex;
    flex-direction: column;
    width: 35%;
    margin: auto;
    margin-top: 10%;
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

h4{
    margin: 30px;
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

/*::-webkit-file-upload-button {
    padding: 10px;
    font-family: Georgia, serif;
    font-size: 10pt;
    color: white;
    border-radius: 50px;
    background-color: #D276FD;
    border-color: #D276FD;
    text-align: center;
}*/
</style>