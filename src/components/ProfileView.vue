<template>
    <div class="profile-container">
        <div class="user-photo">
            <img src="../assets/realtalk.png" class ="img-photo" >
        </div>
        <div class="user-info">
            <div class="name-surname">
                <label>Маргарита</label>
                <label>Машкова</label>
            </div>
            <div class="nickname">
                <label>@Ritysik</label>
            </div>            
            <div class="borthdate">
                <img class="icon" src="../assets/cake.png" width="20" height="20">
                <label>Дата рождения: 11.04.2002</label>
            </div>
            <div class="city">
                <img class="icon" src="../assets/city.png" width="20" height="20">
                <label>Город: Ульяновск</label>
            </div>
            <div class="post-count">
                <img class="icon" src="../assets/news.png" width="20" height="20">
                <label>Количество постов: 11</label>
            </div>
            <MyButton :onclick="goTo">Редактировать профиль</MyButton> 
        </div>
    </div>
</template>

<script>
import MyButton from './MyButton.vue';
export default {
    components:{
        MyButton
    },
    methods:{
        goTo(){
            this.$router.push("/edit-profile")
        }
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