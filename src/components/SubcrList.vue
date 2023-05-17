<template>
    <div id="users-list">
        <div class="title">
            <a href="#">Подписки</a>
            <label class="subscr-count">11</label>
        </div>
        <div class="user">
            <img class="user-photo" src="../assets/profile.png" width="50" height="50">
            <div class="user-info">
                <a href="#">Кирилл Тепечин</a>
                <label>@KirTep</label>
            </div>            
        </div>
        <div class="user">
            <img class="user-photo" src="../assets/profile.png" width="50" height="50">
            <div class="user-info">
                <a href="#">Кирилл Тепечин</a>
                <label>@KirTep</label>
            </div>            
        </div>
        <div class="user">
            <img class="user-photo" src="../assets/profile.png" width="50" height="50">
            <div class="user-info">
                <a href="#">Кирилл Тепечин</a>
                <label>@KirTep</label>
            </div>            
        </div>
    </div>
</template>

<script>
export default {
    components:{
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