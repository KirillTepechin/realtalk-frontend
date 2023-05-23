<template>
    <div class="sms-create">
        <textarea v-model="text" type="text" placeholder="Напишите сообщение..."></textarea>
        <img @click="send" src="../assets/send.png" width="35" height="35" >
    </div>
</template>

<script>

export default {
    components:{
    },
    date(){
        return{
            text:''
        }
    },
    methods:{
        send() {
            this.$emit('sendMessage', {
                text: this.text,
            })
            this.text=''
        }
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
    cursor: pointer;
}

</style>