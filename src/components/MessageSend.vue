<template>
    <div class="sms-create">
        <textarea v-model="text" type="text" placeholder="Напишите сообщение..."></textarea>
        <div>
            <img @click="createOrEdit" src="../assets/send.png" width="35" height="35" >
            <MyButton v-if="this.internalMessage" @click="cancel" >Отменить</MyButton>
        </div>
    </div>
</template>

<script>
import MyButton from './MyButton.vue'


export default {
    components:{
    MyButton
},
    data(){
        return{
            text: '',
            internalMessage: null
        }
    },
    props:{
        messageEdit: null
    },
    methods:{
        createOrEdit() {
            if (!this.internalMessage) {
                this.$emit('createMessage', {
                    text: this.text,
                })
            }
            else {
                this.$emit('editMessage', {
                    id : this.internalMessage.id,
                    text: this.text,
                })
            }
            this.cancel()
        },
        cancel(){
            this.text=''
            this.internalMessage = null;
        }
    },
    watch:{
        'messageEdit.key'() {
            this.internalMessage = this.messageEdit
            this.text = this.internalMessage.text
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