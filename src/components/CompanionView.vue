<template>
    <div class="companion-container">
        <div class="user">
            <div class="back" @click="back()">
                <img src="../assets/back.png" width="15" height="15" >
                <label>Назад</label>
            </div>
            <div class="user-info">

                    <label class="username" >{{this.with.name + this.with.surname}}</label>
                    <label class="login">@{{ this.with.login }}</label>
                </div>
            <div class="user-profile" v-if="!this.with.photo">
                <img class="user-photo" src="../assets/profile.png" width="50" height="50">
            </div>
            <div class="user-profile" v-else>
                <img class="user-photo" v-bind:src= "'/photos/'+ this.with.photo" width="50" height="50">
            </div>                        
        </div>
    </div>
</template>

<script>

    export default{
        data(){
            return{
                me:{}
            }
        },
        props:{
            users:[],
            with:{}
        },
        methods:{
            back(e){
                this.$router.push("/chats")
                e.preventDefault()
            },
            
        }
    }
</script>
    

<style scoped>
.companion-container{
    display: flex;
    flex-direction: column;
    background-color: white;
    font-family: Georgia, serif;
    font-size: 12pt;
    border-radius: 10px;
    border: 1px solid;
    padding: 10px 20px;
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
    align-items: center;
    align-self: center;
}
.user-photo{
    border: 2px solid;
    border-color: #D276FD;
    border-radius: 50%;
}

.username{
    margin-bottom: 5px;
}

.login{
    font-size: 11pt;
}

.back{
    display: flex;
    align-self: center;
}

.back label{
    margin-left: 5px;
}

label{
    text-align: left;
}

img{
    align-self: center;
}
</style>