<template>
    <PageHeader/>
    <div class="profile-body">
        <ProfileView class ="profile-top"/>
        <div class="profile-bottom">
            <div class="posts">
                    <div class="post-create">
                        <input type="text" placeholder="Что у Вас нового?">
                        <MyButton>
                            Создать пост
                        </MyButton>
                    </div>
                    <PostView/>
                    <PostView/>
                    <PostView/>
                    <PostView/>
                </div>
            <div class="sub-sub">
                <SubcrList/>
                <SubcrList/>
            </div>        
        </div>        
    </div>   
</template>

<script>

import PageHeader from "@/components/PageHeader";
import ProfileView from "@/components/ProfileView";
import PostView from "@/components/PostView";
import SubcrList from "@/components/SubcrList";
import MyButton from "@/components/MyButton";

export default {
    components:{
        PageHeader,
        ProfileView,
        SubcrList,
        PostView,
        MyButton,
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
.posts{
    margin-right: 10px;
}
.post-create input{
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

}
</style>