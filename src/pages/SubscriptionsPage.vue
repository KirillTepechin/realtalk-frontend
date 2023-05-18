<template>
    <PageHeader/>
    <div class="page-subscribers">        
        <div class="users-list">
            <InputIcon
            class="input-icon"
            :type = "'text'"
            :placeholder = "'Поиск'"
            :src = "'search.png'"
            :width = "'18'"
            :height = "'18'"
            />
            <SubscrView/>
            <SubscrView/>
            <SubscrView/>
            <SubscrView/>
            <SubscrView/>
            <SubscrView/>
            <SubscrView/>
            <SubscrView/>
        </div>        
    </div>
</template>
  
<script>
import PageHeader from "@/components/PageHeader";
import SubscrView from "@/components/SubscrView";
import InputIcon from "@/components/InputIcon";

export default {
    components: {
        PageHeader,
        SubscrView,
        InputIcon
    }
}
</script>
  
<style>
    .page-subscribers{
        display: flex;
        flex-direction: column;
    }
    
    .users-list{
        margin: 15px 300px 20px 300px;
        padding: 0px 0px 20px 0px;
        background-color: white;
        border-radius: 20px;
        border: 1px solid;
        border-color: #D276FD;
    }

    .input-icon{
        margin: 5px !important;
        border: 0px !important;        
    }
    
</style>