<template>
    <div class="post-container">
        <div class="user">
            <div class="user-profile">
                <img class="user-photo"
                 v-if="this.post.user.photo"
                 v-bind:src= "'/photos/'+ this.post.user.photo"
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
                    <router-link :to="'/'+post.user.login">@{{ post.user.login }}</router-link>
                    <label style="font-size: 10pt;">{{post.date}}</label>
                </div>
            </div>
            <div class="btns-bar" v-if="post.user.login == this.me.login">
                <img class="icon" src="../assets/edit.png" width="20" height="20">
                <img class="icon" src="../assets/delete.png" width="20" height="20">
            </div>
        </div>
        <div class="post-text" v-if="post.text != ''">
            <label>{{ post.text }}</label>
        </div>
        <div class="post-photo" >
            <div class="image-area" v-if="post.photo != null">
                <img v-bind:src= "'/photos/'+ post.photo">
            </div>
        </div>
        <div class="likes-comms">
            <div class="likes">                
                <img v-if="!likedByMe" src="../assets/unlike.png" width="20" height="22" @click="this.like" :class="{'animated': animated}">
                <img v-else src="../assets/like.png" width="20" height="22" @click="this.like" :class="{'animated': animated}">
                <label class="likes-count">{{this.likesCount+likedByMe}}</label>
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
import PostService from "@/services/PostService";


    export default{
        data(){
            return {
                me:{},
                likedByMe: false,
                animated: false,
                likesCount: Number
            }
        },
    props: {
        post: {
            id: Number,
            text: "",
            date: "",
            tag: "",
            user: {},
            comments: [],
            likes: {},
        }
    },
    methods: {
        like() {
            PostService.likePost(this.post.id).then((response)=>this.likedByMe=response.data)
            this.animated = true;
            setTimeout(() => {
                this.animated = false;
            }, 500); // 1 second animation duration
        }
    },
    mounted() {
        UserService.me().then((response) => {
            if (response.status == 200) {
                this.me = response.data
                if (this.post.likes.map(user => user.login).includes(this.me.login)) {
                    this.likedByMe = true
                    this.likesCount = this.post.likes.length-1
                }
                else{
                    this.likesCount = this.post.likes.length
                }
            }
        })
    },
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
    margin-bottom: 10px;
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
    margin: 10px 0px 10px 0px;
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

.image-area{
    overflow: hidden;
    width: 500px;
    height: 500px;
}

.image-area img{
    width: auto;
    height: 100%;
    margin: 0 auto;    
}

.post-photo{
    /* align-self: center; */
    margin: 5px 0px 20px 0px;
}

.likes, .comms{
    cursor: pointer;
    transition: all 1s ease-out;
}

.animated {
  transform: rotate(360deg) scale(1.5);
}
</style>