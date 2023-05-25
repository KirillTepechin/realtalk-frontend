<template>
    <PageHeader/>
    <div class="page-search">        
        <div class="users-list">
            <InputIcon
            class="input-icon"
            :type = "'text'"
            :placeholder = "'Поиск'"
            :src = "'search.png'"
            :width = "'18'"
            :height = "'18'"
            />
            <div class="subscr" v-for='user in users' v-bind:key="user.id">
                <SubscrView :user="user"/>
            </div>            
        </div>        
    </div>
</template>
  
<script>
import PageHeader from "@/components/PageHeader";
import SubscrView from "@/components/SubscrView";
import InputIcon from "@/components/InputIcon";
import UserService from "@/services/UserService";

export default {
    data(){
        return {
            users:{},
            categories:[
                {tag:"Природа"},
                {tag:"Животные"},
                {tag:"Люди"},
                {tag:"Спорт"},
                {tag:"Еда"},
                {tag:"Семья"},
                {tag:"Мода"},
                {tag:"Машина"}
            ]
        }
    },
    components: {
        PageHeader,
        SubscrView,
        InputIcon
    },
    mounted(){
        UserService.me().then((response)=> {
          if(response.status == 200) {            
            this.users = response.data
            console.log(this.user)
          }
        })
    },
}
</script>
  
<style>
    .page-search{
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