<template>
    <PageHeader/>
    <div class="page-chat"> 
        <CompanionView /> 
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
            me:{}
        }
    },
    components: {
        PageHeader,
        MessageView,
        CompanionView,
        MessageSend
    },
    mounted() {
       
        ChatService.getChatById(this.$route.params.id).then((response) => {
            if (response.status == 200) {
                this.chat = response.data
            }
        })
        UserService.me().then((response)=> {
            if(response.status == 200) {            
                this.me = response.data
            }          
        })
        this.connect()
    },
    methods: {
        showMessage(data) {
            let message = {user:{photo: this.me.photo, name: this.me.name, surname: this.me.surname}, text: data.text, date: new Date()}
            this.chat.messages.push(message)
        },
        onSendMessage(data){
            var url = document.location.pathname;
            const message = {
                id: 0,
                userDto: {login: this.me.login},
                text: data.text,
            };
            console.log(data)
            stompClient.send("/app" + url, {}, JSON.stringify(message));
        },
        connect() {
            var socket = new SockJS('http://localhost:9000/gs-guide-websocket');
            stompClient = Stomp.over(socket);
            stompClient.connect({}, function (frame) {
                console.log('Connected: ' + frame);
                stompClient.subscribe('/topic/1', function (greeting) {
                    this.showMessage(JSON.parse(greeting.body));
                });
            });
        },
    }

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