<template>
    <div id="users-list" >
        <div class="title">
            <router-link :to="link">{{ title }}</router-link>
            <label class="subscr-count">{{ count }}</label>
        </div>
        <div class="user" v-for='user in newUsersList.slice(0,3)' v-bind:key="user.id">
            <img class="user-photo" src="../assets/profile.png" width="50" height="50">
            <div class="user-info">
                <a href="#">{{ user.name }} {{ user.surname }}</a>
                <label>@{{user.login}}</label>
            </div>            
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                count: 0,
                newUsersList: [],
            }            
        },
        props:{
            usersList: [],
            title: String,
            link: String
        },
        updated(){
            this.count = this.usersList.length
            this.newUsersList = this.usersList
        }
    }
</script>

<style scoped>
#users-list{
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 10px;
    border: 1px solid;
    border-color: #D276FD;
    font-family: Georgia, serif;
    font-size: 11pt;
    padding: 10px 10px;
    margin-bottom: 10px;
}

.title{
    align-self: self-start;
}

.user{
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    border: 2px solid;
    border-color: #D276FD;
    border-radius: 20px;
    padding: 6px 15px;
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

a{
    text-decoration: none;
    color: black;
    margin-left: 5px;
    align-self: start;
}

a:hover {
  color: #D276FD;
}

.subscr-count{
    margin-left: 10px;
}
</style>