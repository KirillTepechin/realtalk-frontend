<template>
    <PageHeader/>
    <div class="page-chat"> 
        <CompanionView v-if="this.getChatUsers() && this.withUser()" :users="this.getChatUsers()" :with="this.withUser()"/> 
        <div class="sms-list" v-for='msg in this.chat.messages' v-bind:key="msg.id">
            <MessageView :message="msg"/>                     
        </div> 
       <MessageSend @sendMessage="onSendMessage"/>
    </div> 
</template>

<script>
import ChatService from "@/services/ChatService";

import PageHeader from "@/components/PageHeader";
import CompanionView from "@/components/CompanionView";
import MessageSend from "@/components/MessageSend";
import MessageView from "@/components/MessageView";

import SockJS from 'sockjs-client'
import { Stomp } from '@stomp/stompjs'
import UserService from "@/services/UserService";

let stompClient = null

export default{
        data(){
            return {
            chat: {},
            me:{},
        }
    },
    components: {
        PageHeader,
        MessageView,
        CompanionView,
        MessageSend
    },
    methods: {
       
        onSendMessage(data){
            //var url = document.location.pathname;
            const message = {
                user: {login: this.me.login},
                text: data.text,
            };
            console.log(data)
            stompClient.send("/app/create-message/" +this.$route.params.id , {}, JSON.stringify(message));
        },
        connect(chatId, vm) {
            var socket = new SockJS('http://localhost:9000/gs-guide-websocket');
            stompClient = Stomp.over(socket);
            stompClient.connect({}, function (frame) {
                console.log('Connected: ' + frame);
                stompClient.subscribe('/topic/'+chatId, function (message) {
                    console.log(JSON.parse(message.body))
                    vm.showMessage(JSON.parse(message.body));
                });
            });
        },
        showMessage(data) {
            let message = { user: { photo: this.me.photo, name: this.me.name, surname: this.me.surname }, text: data.text, date: data.date }
            this.chat.messages.push(message)
        },
        getChatUsers(){
            console.log(this.chat.users)
            return this.chat.users
        },
        withUser() {
            if (this.chat.users[0].login == this.me.login) {
                return this.chat.users[1]
            }
            else {
                return this.chat.users[0]
            }
        },

    },
    mounted() {
        const vm = this; // сохраняем ссылку на объект Vue

        let chatId = this.$route.params.id
        ChatService.getChatById(chatId).then((response) => {
            if (response.status == 200) {
                this.chat = response.data
            }
        })
        UserService.me().then((response) => {
            if (response.status == 200) {
                this.me = response.data
            }
        })
        this.connect(chatId, vm)
    },

}
</script>

<style scoped>
    .page-chat{
        display: flex;
        flex-direction: column;
        margin: 15px 300px 20px 300px;
        padding: 0px 0px 0px 0px;
        
        background-color: white;
        border-radius: 10px;
        border: 1px solid;
        border-color: #D276FD;
    }

    .sms{
        background-color: white;
        border: 1px solid;
        border-color: #D276FD;
    }
   

</style>