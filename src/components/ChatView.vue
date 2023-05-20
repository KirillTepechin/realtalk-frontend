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
        this.connect()
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
    },
    methods: {
        showMessage(data) {
            let message = {user:{photo: this.me.photo, name: this.me.name, surname: this.me.surname}, text: data.text, date: new Date()}
            this.chat.messages.push(message)
        },
        onSendMessage(data){
            var url = document.location.pathname;
            const message = {
                userDto: {id:this.me.id},
                text: data.text,
            };
            console.log(data)
            stompClient.send("/app/" + url, {id: this.chat.id}, JSON.stringify(message));
        },
        connect() {
            const url = 'http://localhost:9000/chat-websocket'
            stompClient = Stomp.over(() => new SockJS(url));
            stompClient.debug = () => { }
            stompClient.connect({}, (frame) => {
                console.log("Connected -" + frame)
                stompClient.subscribe('/chat/'+this.chat.id, message => {
                    this.showMessage(JSON.parse(message.body))
                })
            })
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