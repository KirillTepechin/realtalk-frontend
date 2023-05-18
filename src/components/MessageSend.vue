<template>
    <div class="post-create">
        <input type="text" placeholder="Напишите сообщение...">
        <img src="../assets/send.png" width="35" height="35" >
    </div>
</template>

<script>

export default {
    components:{
    }
  
}
</script>

<style>
.post-create input{
    outline: none;
    padding: 10px;
    width: 100%;
    background-color: #ffffff;
    border: 1px solid;
    border-radius: 10px;
    border-color: #D276FD;
    margin-right: 10px;
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


    width: 60%;
}

</style>