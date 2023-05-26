<template>
    <div class="subscr-container">        
        <div class="user-photo">
            <img
            v-if="this.user.photo"
            v-bind:src= "'/photos/'+ this.user.photo"
            width="150" 
            height="150"
            >
            <img
            v-else
            src= "../assets/profile-photo.png" 
            width="150" 
            height="150"
            >              
        </div>
        <div class="user-profile">
            <div class="user-info">
                    <label class="username">{{ user.name }} {{ user.surname }}</label>
                    <label class="login">@{{ user.login }}</label>
            </div>
            <div class="btn-bar">
                <MyButton @click="createChat($event)">Сообщение</MyButton>
                <MyButton v-if="isSubscription">Отписаться</MyButton>
                <MyButton v-else>Подписаться</MyButton>                
            </div>            
        </div>
    </div>
</template>

<script>
import ChatService from "@/services/ChatService";
import UserService from "@/services/UserService";


import MyButton from './MyButton.vue';
export default {
    components:{
        MyButton,
    },
    data(){
        return{
            me:{},
            createdId: null,
            isSubscription: false
        }
    },
    props:{
        user:{},
        me2:{}
    },
    methods:{
        createChat(e){
            if(this.createdId!=null){
                this.$router.push('chat/'+this.createdId)
            }
            else{
                let chat = {name: '', isPrivate: true, userIds: [this.user.id]}
                ChatService.createChat(chat).then((response)=>{
                    this.$router.push('chat/'+response.data.id)
                })
                
            }
            e.preventDefault()
        },
        checkPrivateChat(chats){
            this.createdId = chats.find(chat=> chat.isPrivate==true &&chat.users.map(user=>user.id).includes(this.user.id)).id
        },
        checkIsSubscription(){            
            this.me2.subscriptions.forEach(sub => {
                if(sub.login == this.user.login)
                    this.isSubscription = true
            })
        }
    },
    mounted() {
        UserService.me().then((response) => {
            if (response.status == 200) {
                this.me = response.data
            }
        }),
        ChatService.getChatsByUser().then((response)=>{
            if (response.status == 200) {
                this.checkPrivateChat(response.data)
            }
        }),
        this.checkIsSubscription()
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