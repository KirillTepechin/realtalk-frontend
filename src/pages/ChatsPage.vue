<template>
    <PageHeader/>
    <div class="page-chats">        
        <div class="chats-list">
            <InputIcon
            class="input-icon"
            :type = "'text'"
            :placeholder = "'Поиск'"
            :src = "'search.png'"
            :width = "'18'"
            :height = "'18'"
            />
            <MessageView/>
            <MessageView/>
            <MessageView/>
            <MessageView/>
            <MessageView/>
            <MessageView/>
            <MessageView/>
            <MessageView/>
        </div>        
    </div>
</template>
  
<script>
import PageHeader from "@/components/PageHeader";
import MessageView from "@/components/MessageView";
import InputIcon from "@/components/InputIcon";

export default {
    components: {
        PageHeader,
        MessageView,
        InputIcon
    }
}
</script>
  
<style>
    .page-chats{
        display: flex;
        flex-direction: column;
    }
    
    .chats-list{
        margin: 15px 300px 20px 300px;
        padding: 0px 0px 20px 0px;
        background-color: white;
        border-radius: 10px;
        border: 1px solid;
        border-color: #D276FD;
    }

    .input-icon{
        margin: 3px !important;
        border: 0px !important;
    }
    
</style>