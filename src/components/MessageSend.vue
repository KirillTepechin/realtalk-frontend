<template>
    <div class="sms-create">
        <textarea type="text" placeholder="Напишите сообщение..."></textarea>
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
.sms-create textarea{
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
.sms-create{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-inline: 10px;
    padding-block: 20px;
    background-color: #ffffff;
    border: 1px solid;
    border-radius: 10px;
    border-color: #D276FD;
}

.sms-create img{
    align-self: center;
}

</style>