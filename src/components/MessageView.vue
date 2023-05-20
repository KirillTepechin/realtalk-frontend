<template>
    <div class="message-container" @click="$emit('click')">
        <div class="user">
            <div class="user-profile">
                <img class="user-photo"
                 v-if="this.chat.image"
                 v-bind:src= "'/photos/'+ this.chat.image"
                 width="50" 
                 height="50"
                 >
                <img class="user-photo"
                v-else-if="this.chat.users.length == 2 && this.chat.users[0].photo"
                v-bind:src= "'/photos/'+ this.chat.users[0].photo"
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
                    v-if="this.chat.users.length == 2">{{ this.chat.users[0].name }} {{ this.chat.users[0].surname }}</label>
                    <label class="username" v-else>{{ this.chat.name }}</label>
                    <label class="message-text">Привет</label>
                </div>
            </div>
            <div class="date">
                <label style="font-size: 11pt;">12 мая в 21:44</label>
            </div>            
        </div>
    </div>
</template>

<script>
    export default{
        props:{
            chat:{
                id:"",
                name:"",
                image:"",
                user:[]
            }
        },
        
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
</style>