<template>
    <div class="subscr-container">        
        <div class="user-photo">
            <img src="../assets/realtalk.png" width="150" height="150">                
        </div>
        <div class="user-profile">
            <div class="user-info">
                    <label class="username">{{ user.name }} {{ user.surname }}</label>
                    <label class="login">@{{ user.login }}</label>
            </div>
            <div class="btn-bar">
                <MyButton>Сообщение</MyButton>
                <MyButton>Отписаться</MyButton>
            </div>            
        </div>
    </div>
</template>

<script>
import MyButton from './MyButton.vue';
export default {
    components:{
        MyButton,
    },
    props:{
        user:{}
    }
  
}
</script>

<style scoped>
.subscr-container{
    display: flex;
    flex-direction: row;
    background-color: white;
    font-family: Georgia, serif;
    font-size: 12pt;
    border: 1px solid;
    padding: 15px 20px;
    border-color: #D276FD;
    justify-content: flex-start;
}

.user-photo{
    display: flex;
    margin-left: 50px;
    margin-right: 20px;
}

.user-profile{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.user-info{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 15px;
}
.user-photo img{
    border: 2px solid;
    border-color: #D276FD;
    border-radius: 50%;
}

.username{
    margin-bottom: 5px;
}

label{
    text-align: left;
}

img{
    align-self: center;
}

.btn{
    padding: 10px;
    min-width: 150px;
    margin: 10px 10px;
}
.btn-bar{
    display: flex;
    justify-content: space-evenly;
}

</style>