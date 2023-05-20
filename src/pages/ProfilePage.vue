<template>
    <PageHeader/>
    <div class="profile-body" v-if="this.user.login == this.getLoginByRoute()">
        <ProfileView class ="profile-top" :user="this.user" :posts="this.posts"/>
        <div class="profile-bottom">
            <div class="posts-form">
                    <div class="post-create">
                        <textarea v-model="this.postText" type="text" placeholder="Что у Вас нового?"></textarea>
                        <MyButton @click="createPost($event)">
                            Создать пост
                        </MyButton>
                    </div>
                    <div class="post" v-for='post in posts' v-bind:key="post.id">
                    <PostView :post="post"/>
                    </div>
            </div>
            <div class="sub-sub">
                <div class="subscriptions">
                    <SubcrList :usersList="user.subscriptions" :title="'Подписки'" :link="'/subscriptions'"/>
                </div>
                <div class="subscribers">
                    <SubcrList :usersList="user.subscribers" :title="'Подписчики'" :link="'/subscribers'"/>
                </div> 
            </div>            
        </div>        
    </div>
    
    <div class="profile-body" v-else>
        <ProfileView class ="profile-top" :user="this.anotherUser" :posts="this.posts"/>
        <div class="profile-bottom">
            <div class="posts-form">
                    <div class="post" v-for='post in posts' v-bind:key="post.id">
                    <PostView :post="post"/>
                    </div>
            </div>
            <div class="sub-sub">
                <div class="subscriptions">
                    <SubcrList :usersList="anotherUser.subscriptions" :title="'Подписки'" :link="'/subscriptions'"/>
                </div>
                <div class="subscribers">
                    <SubcrList :usersList="anotherUser.subscribers" :title="'Подписчики'" :link="'/subscribers'"/>
                </div> 
            </div>            
        </div>        
    </div>   
</template>

<script>
import PostService from "@/services/PostService";
import UserService from "@/services/UserService";

import PageHeader from "@/components/PageHeader";
import ProfileView from "@/components/ProfileView";
import PostView from "@/components/PostView";
import SubcrList from "@/components/SubcrList";
import MyButton from "@/components/MyButton";

export default {
    data(){
        return {
            posts:[],
            user:{},
            anotherUser:{},
            postText:''
        }
    },
    components:{
        PageHeader,
        ProfileView,
        SubcrList,
        PostView,
        MyButton,
    },
    methods:{
        createPost(e) {
            if(this.postText){
                const post = {text: this.postText, tag:'пердода'}
                PostService.createPost(post).then((response) => {
                if (response.status == 200) {
                    let newPost = response.data
                    newPost.comments = []
                    this.posts.push(newPost)
                    this.postText = ''
                }
            })
            }
            e.preventDefault() 
        },
        getLoginByRoute(){
            return this.$route.path.toString().substring(1)
        }
    },
    mounted(){
        UserService.me().then((response) => {
            if (response.status == 200) {
                this.user = response.data
            }
        })
        UserService.getUserProfile(this.getLoginByRoute()).then((response) => {
            if (response.status == 200) {
                this.anotherUser = response.data
                console.log(this.anotherUser)
            }
        })
        UserService.getUserPosts(this.getLoginByRoute()).then((response) => {
            if (response.status == 200) {
                this.posts = response.data
                console.log(this.posts)
            }
        })
    }
}
</script>

<style>
.profile-body{
    display: flex;
    flex-direction: column;
    margin: 0px 300px 20px 300px;
    padding: 0px 0px 20px 0px;

}
.profile-top{
    margin-block: 15px;
}

.profile-bottom{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
   
}

.sub-sub, .posts {
    min-width: 300px;
}
.sub-sub{
    margin-left: 10px;
}
.posts-form{
    flex: auto;
}
.post-create textarea{
    outline: none;
    padding: 10px;
    width: 100%;
    background-color: #ffffff;
    border: 1px solid;
    border-radius: 10px;
    border-color: #D276FD;
    margin-right: 20px;
    font-family: Georgia, serif;

}
.post-create{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-block-end: 10px;
    padding-inline: 10px;
    padding-block: 20px;
    background-color: #ffffff;
    border: 1px solid;
    border-radius: 10px;
    border-color: #D276FD;
}

.post-create button{
    padding: 10px;
    min-width: 150px;
    font-family: Georgia, serif;
    align-self: center;
}
</style>