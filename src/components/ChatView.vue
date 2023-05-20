<template>
    <PageHeader/>
    <div class="page-chat">
        <CompanionView />
        <div class="sms-list">
            <!-- <div v-for='msg in chat.messages' v-bind:key="msg.id">
                <MessageView :message="msg"/>               
            </div>             -->
            <div class="sms">
                <label>sms</label>
            </div>
            <div class="sms">
                <label>sms</label>
            </div>
            <div class="sms">
                <label>sms</label>
            </div>
            <div class="sms">
                <label>sms</label>
            </div>
            <div class="sms">
                <label>sms</label>
            </div>
            <div class="sms">
                <label>sms</label>
            </div>            
        </div>
        <MessageSend/>
    </div>
</template>

<script>
import ChatService from "@/services/ChatService";

import PageHeader from "@/components/PageHeader";
import CompanionView from "@/components/CompanionView";
import MessageSend from "@/components/MessageSend";
//import MessageView from "@/components/MessageView";

export default{
        data(){
            return {
                chat:{}
            }
        },
        components:{
            PageHeader,
            //MessageView,
            CompanionView,
            MessageSend
        },
        mounted(){
            ChatService.getChatById(localStorage.getItem('chatId')).then((response)=> {
                if(response.status == 200) {            
                    this.chat = response.data
                    console.log(response.data)
                }
            })       
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