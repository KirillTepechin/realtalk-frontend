<template>
    <div class="post-container">
        <div class="user">
            <div class="user-profile">
                <img class="user-photo"
                 v-if="this.post.user.photo"
                 v-bind:src= "'./realtalk/img/'+'post.user.photo'" 
                 width="50" 
                 height="50"
                 >
                 <img class="user-photo"
                 v-else
                 src= "../assets/profile.png" 
                 width="50" 
                 height="50"
                 >
                <div class="user-info">
                    <a href="#">{{ post.user.login }}</a>
                    <label style="font-size: 10pt;">{{post.date}}</label>
                </div>
            </div>
            <div class="btns-bar" v-if="post.user.login == this.me.login">
                <img class="icon" src="../assets/edit.png" width="20" height="20">
                <img class="icon" src="../assets/delete.png" width="20" height="20">
            </div>
        </div>
        <div class="post-text">
            <label>{{ post.text }}</label>
        </div>
        <div class="likes-comms">
            <div class="likes">                
                <img src="../assets/unlike.png" width="20" height="22">
                <label class="likes-count">{{post.likesCount}}</label>
            </div>
            <div class="comms">
                <img src="../assets/comment.png" width="16" height="16">
                <label class="comms-count">{{post.comments.length}}</label>
            </div>
        </div>
    </div>
</template>

<script>
import UserService from "@/services/UserService";
    export default{
        data(){
            return {
                me:{}
            }
        },
        props:{
            post:{
                text:"",
                date:"",
                tag:"",
                user:{},
                comments:[],
                likesCount: 0
            }
        },
        mounted(){
            UserService.me().then((response)=> {
                if(response.status == 200) {            
                    this.me = response.data
                    console.log("me" + response.data)
                }                
            })
            console.log("me id " + this.me.login)
            console.log("post user id " + this.post.user.id)
            // this.me = localStorage.getItem("me")
            // console.log("me" + this.me)
        }
    }
</script>

<style scoped>
.post-container{
    display: flex;
    flex-direction: column;
    background-color: white;
    min-height: 150px;
    font-family: Georgia, serif;
    font-size: 12pt;
    margin-bottom: 10px;
    border-radius: 10px;
    border: 1px solid;
    padding: 25px 30px;
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
    align-self: center;
    align-items: flex-start;
    margin-left: 15px;
}
.user-photo{
    border: 2px solid;
    border-color: #D276FD;
    border-radius: 50%;
}

.btns-bar{
    display: flex;
    align-self: self-start;
}

a{
    text-decoration: none;
    color: black;
}

a:hover {
  color: #D276FD;
}

.post-text{    
    margin: 30px 0px;
    text-align: left;
    text-align: justify;
}

label{
    text-align: left;
}

.likes-comms{
    display: flex;
}

.likes{
    display: flex;
    border: 2px solid;
    border-color: #D276FD;
    border-radius: 50px;
    padding: 5px 15px;
    margin-right: 10px;
}

.comms{
    display: flex;
    border: 2px solid;
    border-color: #D276FD;
    border-radius: 50px;
    padding: 5px 15px;
}

.likes-count{
    margin-left: 6px;
}

.comms-count{
    margin-left: 6px;
}

img{
    align-self: center;
}

.icon{
    margin-right: 10px;
}
</style>