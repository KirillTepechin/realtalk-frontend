<template>
    <PageHeader/>
    <div class="page-chat">
        <div class="page-chat-container">        
            <CompanionView v-if="this.getChatUsers() && this.withUser()" :users="this.getChatUsers()" :with="this.withUser()"/> 
            <div class="sms-list">
                <div class="sms" v-for='msg in this.chat.messages' v-bind:key="msg.id">
                    <MessageView :message="msg" @deleteMessage ="onDeleteMessage" @editMessageEvent ="onEditMessageEvent"/>  
                </div>                               
            </div> 
            <MessageSend @createMessage="onCreateMessage" @editMessage ="onEditMessage" :messageEdit="messageEdit"/>
        </div>
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
    
    data() {
        return {
            chat: {},
            me: {},
            messageEdit: {}
        }
    },
    components: {
        PageHeader,
        MessageView,
        CompanionView,
        MessageSend
    },
    methods: {
        onCreateMessage(data){
            const message = {
                user: {login: this.me.login},
                text: data.text,
            };
            stompClient.send("/app/create-message/"  +this.$route.params.id , {}, JSON.stringify(message));
        },
        onDeleteMessage(id){
            stompClient.send("/app/delete-message/" + id , {}, {});            
        },
        onEditMessageEvent(data){
            data.key = Math.random()
            this.messageEdit = data
        },
        onEditMessage(data){
            const message = {
                id: data.id,
                text: data.text,
            };
            console.log(message)
            stompClient.send("/app/update-message/"  + message.id , {}, JSON.stringify(message));
        },
        connect(chatId, vm) {
            var socket = new SockJS('http://localhost:9000/gs-guide-websocket');
            stompClient = Stomp.over(socket);
            stompClient.connect({}, function (frame) {
                console.log('Connected: ' + frame);
                stompClient.subscribe('/topic/'+chatId, function (message) {
                    let messageData = JSON.parse(message.body)
                    if(messageData.action === 'ON_CREATE'){
                        vm.addMessage(messageData);
                    }
                    else if(messageData.action === 'ON_DELETE'){
                        vm.deleteMessage(messageData.id)
                    }
                    else if(messageData.action === 'ON_UPDATE'){
                        vm.updateMessage(messageData)
                    }
                });
            });
        },
        addMessage(data) {
            this.chat.messages.push(data)
        },
        deleteMessage(id) {
            this.chat.messages.splice(this.getIndex(this.chat.messages, id), 1)
        },
        updateMessage(data){
            let index = this.getIndex(this.chat.messages, data.id);
            this.chat.messages.splice(index, 1, data);
        },
        getIndex(list, id) {
            for (let i = 0; i < list.length; i++) {
                if (list[i].id === id) {
                    return i;
                }
            }
            return -1;
        },
        getChatUsers(){
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
        this.connect(chatId, vm);
    },

}
</script>

<style scoped>
    .page-chat{
        display: flex;
        flex-direction: column;
        margin: 0px 300px 20px 300px;
        padding: 0px 0px 0px 0px;
    }
    .page-chat-container{
        margin-top: 90px;
        background-color: white;
        border-radius: 10px;
        border: 1px solid;
        border-color: #D276FD;
    }

</style>