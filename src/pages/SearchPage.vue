<template>
    <PageHeader />
    <div class="page-search">
        <div class="container">
        <div class="users-list">
            <InputIcon class="input-icon" :type="'text'" :placeholder="'Поиск'" :src="'search.png'" :width="'18'"
                :height="'18'" v-model="query"/>
            <div v-if="this.users.length > 0">
                <div class="user" v-for='user in users' v-bind:key="user.id">
                    <SubscrView :user="user" :me2="this.me"/>
                </div>
            </div>
            <div v-else>
                <label>По запросу "{{this.query}}" ничего не найдено</label>
            </div>
        </div>
        <div>        
            <div id="preferences-checkboxes">
                <label class="choose">Выберите категории, которые Вам интересны:</label>
                <div class="list">
                    <div class="category" v-for="cat in categories" v-bind:key="cat.tag">
                        <input
                            type="checkbox" 
                            :value="cat.tag"
                            v-model="choosen"
                            :checked="choosen.includes(cat)"
                            >
                        <label>{{ cat.tag }}</label>
                    </div>
                </div>
                <div>
                    <MyButton @click="editPreferences($event)">Сохранить выбор</MyButton>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
  
<script>
import PageHeader from "@/components/PageHeader";
import SubscrView from "@/components/SubscrView";
import InputIcon from "@/components/InputIcon";
import UserService from "@/services/UserService";

import MyButton from "@/components/MyButton";

export default {
    data() {
        return {
            me: {},
            users: {},
            choosen:[],
            preferences:[],
            noResults: false,
            categories: [
                { tag: "Природа" },
                { tag: "Животные" },
                { tag: "Люди" },
                { tag: "Спорт" },
                { tag: "Еда" },
                { tag: "Семья" },
                { tag: "Мода" },
                { tag: "Машина" },
                { tag: "Мемы" }
            ],
            query: ""
        }
    },
    components: {
        PageHeader,
        SubscrView,
        InputIcon, 
        MyButton
    },
    methods: {
        getIndex(list, id) {
            for (let i = 0; i < list.length; i++) {
                if (list[i].id === id) {
                    return i;
                }
            }
            return -1;
        },
        findUsersByQuery(query){
            UserService.findUsers(query).then((response)=> {
                if(response.status == 200) {
                    console.log(response.data)
                    this.users = response.data
                    this.users.splice(this.getIndex(this.users, this.me.id), 1)
                }
            }) 
        }
    },
    mounted() {
        UserService.me().then((response) => {
            if (response.status == 200) {
                this.me = response.data
                UserService.findAllUsers().then((response) => {
                    if (response.status == 200) {
                        this.users = response.data
                        this.users.splice(this.getIndex(this.users, this.me.id), 1)
                    }
                })
            }
        })
    },
    watch:{
        'query'(){
            this.findUsersByQuery(this.query)
        }
    }
}
</script>
  
<style scoped>
.page-search {
    margin: 0px 300px 20px 300px;
    padding: 0px 0px 20px 0px;
}

.container{
    display: flex;
    flex-direction: row;
}

.users-list {
    width: 100%;
    min-width: 600px;
    background-color: white;
    border-radius: 20px;
    border: 1px solid;
    border-color: #D276FD;
    margin-right: 20px;
    margin-top: 15px;
    padding-bottom: 20px;
}

.users-list label{
    font-size: 13pt;
}

.input-icon {
    margin: 5px !important;
    border: 0px !important;
}

#preferences-checkboxes{
    font-family: Georgia, serif;
    font-size: 12pt;
    display: flex;
    background-color: white;
    border-radius: 10px;
    border: 1px solid;
    border-color: #D276FD;
    margin-top: 15px;
    flex-direction: column;
    padding: 10px;
}

#preferences-checkboxes input, label{
    margin-right: 10px;
}

.category{
    margin: 5px;
}

.list{
    display: flex;
    flex-direction: column;
    align-items: self-start;
}

.choose{
    font-size: 13pt;
    font-weight: bold;
    margin-bottom: 15px;
}

.btn{
    padding: 10px 70px;
    margin-top: 15px;
}

.page-search{
    display: flex;
    flex-direction: row;
}
</style>