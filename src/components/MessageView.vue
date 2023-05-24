<template>
    <div class="message-container" @click="$emit('click')">
        <div v-if="chat!=null" class="user">
            <div class="user-profile">
                <img class="user-photo"
                 v-if="this.chat.image"
                 v-bind:src= "'/photos/'+ this.chat.image"
                 width="50" 
                 height="50"
                 >
                <img class="user-photo"
                v-else-if="this.chat.users.length == 2 && this.withUser().photo"
                v-bind:src= "'/photos/'+ this.withUser().photo"
                width="50" 
                height="50"
                >
                <img class="user-photo"
                 v-else
                 src= "../assets/profile-photo.png"
                 width="50" 
                 height="50"
                 >
                <div class="user-info">
                    <label class="username" 
                    v-if="this.chat.users.length == 2">{{ this.withUser().name }} {{ this.withUser().surname }}</label>
                    <label class="username" v-else>{{ this.chat.name }}</label>
                    <label class="message-text">{{ this.getLastMessage() }}</label>
                </div>
            </div>
            
            <div class="date">
                <label style="font-size: 11pt;">{{this.getLastMessageDate()}}</label>
            </div>            
        </div>

        <div v-else class="user">
            <div class="user-profile">
                <img class="user-photo"
                 v-if="this.message.user.photo"
                 v-bind:src= "'/photos/'+ this.message.user.photo"
                 width="50" 
                 height="50"
                 >
                <img class="user-photo"
                 v-else
                 src= "../assets/profile-photo.png"
                 width="50" 
                 height="50"
                 >
                <div class="user-info">
                    
                    <label class="username">{{ this.message.user.name + ' '+ this.message.user.surname }}</label>
                    <label class="message-text">{{ this.message.text }}</label>
                </div>
            </div>
            <div>
               
                <div class="date">
                    <label style="font-size: 11pt;">{{this.message.date}}</label>
                </div> 
                <div class="btns-bar" v-if="message.user.login == this.me.login">
                    <img class="icon" src="../assets/edit.png" width="20" height="20" @click="this.$emit('editMessageEvent', message)">
                    <img class="icon" src="../assets/delete.png" width="20" height="20" @click="this.$emit('deleteMessage', message.id)">   
                </div>
            </div>
                 
        </div>
    </div>
</template>

<script>
    import UserService from "@/services/UserService";

    export default{
        data(){
            return{
                me:{},
            }
        },
        props:{
            chat: null,
            message:{},
        },
        methods:{
            getLastMessage(){
                console.log(this.chat)
                if(this.chat.messages.length!=0){
                    let text = this.chat.messages[this.chat.messages.length-1].text
                    return text
                }
                return ""
            },
            getLastMessageDate(){
                if(this.chat.messages.length!=0){
                    let text = this.chat.messages[this.chat.messages.length-1].date
                    return text
                }
                return ""
            },
            withUser(){
                if(this.chat.users[0].login == this.me.login){
                    return this.chat.users[1]
                }
                else{
                    return this.chat.users[0]
                }
            },
        },
        mounted(){
            UserService.me().then((response) => {
                if (response.status == 200) {
                    this.me = response.data
                }
            })
        }
        
    }
</script>

<style scoped>
.message-container{
    display: flex;
    flex-direction: column;
    background-color: white;
    font-family: Georgia, serif;
    font-size: 12pt;
    border: 1px solid;
    padding: 15px 20px;
    border-color: #D276FD;
}

.user{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.user-profile{
    display: flex;
    flex-direction: row;
}

.user-info{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 15px;
}
.user-photo{
    border: 2px solid;
    border-color: #D276FD;
    border-radius: 50%;
}

.username{
    margin-bottom: 5px;
}

.date{
    display: flex;
    align-self: self-start;
}

label{
    text-align: left;
}

img{
    align-self: center;
}

.icon{
    cursor: pointer;
}

</style>