<template>
    <PageHeader/>
    <div class="page-chats">        
        <div class="chats-list">
            <InputIcon
            class="input-icon"
            :type = "'text'"
            :placeholder = "'Поиск'"
            :src = "'search.png'"
            :width = "'18'"
            :height = "'18'"
            />
            <div v-for='chat in chats' v-bind:key="chat.id">
                <MessageView :chat="chat" @click="click(chat.id)" class="chat"/>               
            </div>
            <div v-if="!bot">
                <p>Не с кем пообщаться? </p>
                <MyButton @click="createChatWithBot($event)">Поговорите с Чаттером!</MyButton>
            </div>            
        </div>        
    </div>
</template>
  
<script>
import ChatService from "@/services/ChatService";

import PageHeader from "@/components/PageHeader";
import MessageView from "@/components/MessageView";
import InputIcon from "@/components/InputIcon";
import MyButton from "@/components/MyButton";
import UserService from "@/services/UserService";

export default {
    data(){
        return {
            chats:[],
            chat:{},
            bot:null
        }
    },
    components: {
        PageHeader,
        MessageView,
        InputIcon,
        MyButton
    },
    mounted(){
        ChatService.getChatsByUser().then((response)=> {
            if(response.status == 200) {            
                this.chats = response.data
                console.log(this.chats)
                let usersInChat = this.chats.map(chat => chat.users)
                usersInChat.forEach(userInChat => {
                    userInChat.forEach(user => {
                        if(user.login==="bot"){
                            this.bot = user
                        }
                    });
                });
            }
        })
    },
    methods:{
        click(chatId, e){
            ChatService.getChatById(chatId).then((response)=> {
                if(response.status == 200) {            
                    this.chat = response.data
                }
            })
            this.$router.push('/chat'+'/'+chatId)            
            e.preventDefault()
        },
       
        createChatWithBot(e) {
            UserService.getUserProfile("bot").then((response) => {
                let chat = { name: '', isPrivate: true, userIds: [response.data.id] }
                ChatService.createChat(chat).then((response) => {
                    this.$router.push('/chat/' + response.data.id)
                })
            })
            e.preventDefault()
        }
    }
}
</script>
  
<style>
    .page-chats{
        display: flex;
        flex-direction: column;
    }
    
    .chats-list{
        margin: 0px 300px 20px 300px;
        padding: 0px 0px 20px 0px;
        background-color: white;
        border-radius: 10px;
        border: 1px solid;
        border-color: #D276FD;
        margin-top: 90px;
    }

    .input-icon{
        margin: 3px !important;
        border: 0px !important;
    }
    .chat{
        cursor: pointer;
    }
    .btn{
    padding: 10px 70px;
    }
</style>