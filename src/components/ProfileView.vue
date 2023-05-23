<template>
    <div class="profile-container">
        <div class="user-photo">
            <img class="img-photo"
            v-if="user.photo"
            v-bind:src= "'/photos/'+ user.photo"
            width="50" 
            height="50"
            >
            <img class="img-photo"
            v-else
            src= "../assets/profile-photo.png" 
            width="50" 
            height="50"
            >
        </div>
        <div class="user-info">
            <div class="name-surname">
                <label style="margin-right: 5px;">{{ user.name }}</label>
                <label>{{ user.surname }}</label>
            </div>
            <div class="nickname">
                <label>@{{ user.login }}</label>
            </div>            
            <div class="borthdate">
                <img class="icon" src="../assets/cake.png" width="20" height="20">
                <label>Дата рождения: {{ user.borthdate }}</label>
            </div>
            <div class="city">
                <img class="icon" src="../assets/city.png" width="20" height="20">
                <label>Город: {{ user.city }}</label>
            </div>
            <div class="post-count">
                <img class="icon" src="../assets/news.png" width="20" height="20">
                <label>Количество постов: {{ posts.length }}</label>
            </div>
            <div v-if="this.user.login==this.me.login">
                <MyButton  @click="goTo">Редактировать профиль</MyButton>
            </div>
            <div v-else>
                <MyButton v-if="checkSub()" @click="subscribe($event)">Подписаться</MyButton> 
                <MyButton v-else @click="subscribe($event)">Отписаться</MyButton> 
            </div>
            
        </div>
    </div>
</template>

<script>
import UserService from "@/services/UserService";

import MyButton from './MyButton.vue';
export default {
    components:{
        MyButton
    },
    data(){
        return{
            me:{},
        }
    },
    methods:{
        goTo(){
            this.$router.push("/edit-profile")
        },
        checkSub(){
            return (this.me.login!=this.user.login && 
                !this.user.subscribers.map(x => x.login)
                .includes(this.me.login))
        },
        subscribe(e){
            console.log('user')
            console.log(this.user)
            UserService.subscribe(this.user.id).then((response)=>{
                if(response.status == 200){
                    let but = document.querySelector("#app > div.profile-body > div.profile-container.profile-top > div.user-info > div:nth-child(6) > button")
                    if(response.data==true) but.innerHTML = "Отписаться"
                    else but.innerHTML = "Подписаться"
                }
            })

            e.preventDefault()
        }
    },
    props:{
        user:{},
        posts:{}
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
.profile-container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background-color: white;
    min-height: 250px;
    font-family: Georgia, serif;
    font-size: 12pt;
    border-radius: 10px;
    border: 1px solid;
    padding: 25px 30px;
    border-color: #D276FD;
}

.user-info{
    width: 50%;
    display: flex;
    flex-direction: column;
    align-self: center;
    align-items: flex-start;
}

.user-photo{
    /* width: 30%;
    border: 2px solid;
    border-color: #D276FD; */
    width: 250px;
    height: 250px;
    margin: 0 auto;
    overflow: hidden;
    border: 2px solid;
    border-color: #D276FD;
    border-radius: 50%;
}

.img-photo {
    width: auto;
    height: 100%;
    margin: 0 auto;
}

.name-surname{
    display: flex;
    flex-direction: row;
    margin-bottom: 0px;
}

.nickname{
    margin-bottom: 35px;
}

.borthdate{
    display: flex;
    margin-bottom: 20px;
}

.city{
    display: flex;
    margin-bottom: 20px;
}

.post-count{
    display: flex;
    margin-bottom: 35px;
}

label{
    text-align: left;
    align-self: center;
}

img{
    align-self: center;
}

.btn{
    padding: 10px 70px;
}

.icon{
    margin-right: 10px;
}
</style>