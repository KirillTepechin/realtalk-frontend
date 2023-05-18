<template>
    <form>
        <h4>Укажите дату рождения и свой город</h4>
        <InputIcon
        v-model="borthdate"
        :type = "'date'"
        :placeholder = "'Дата рождения'"
        :src = "'cake.png'"
        :width = "'18'"
        :height = "'18'"
        />
        <InputIcon
        v-model="city"
        :type = "'text'"
        :placeholder = "'Город'"
        :src = "'city.png'"
        :width = "'18'"
        :height = "'18'"
        />
        <div class="btn-bar">
            <MyButton :onclick="goToStep3(false)" >Пропустить</MyButton>
            <MyButton :onclick="goToStep3(true)">Далее</MyButton>
        </div>        
    </form>
</template>

<script>
import MyButton from './MyButton.vue';
import InputIcon from './InputIcon.vue';
export default {
    components:{
        MyButton,
        InputIcon
    },
    props: ['user'],
    data() {
        return {
            borthdate: '',
            city: ''
        }
    },
    methods:{
        goToStep3(flag) {
            if (flag) {
                this.$emit('updateUser', {
                    borthdate: this.borthdate,
                    city: this.city
                })
            }
            this.$router.push("/registration/step-3")
        },
        
    },
    created() {
        this.borthdate = this.$props.user.borthdate
        this.city = this.$props.user.city
    },
    unmounted() {
        this.$emit('updateUser', {
            borthdate: this.borthdate,
            city: this.city
        })
    }
  
}
</script>

<style scoped>
form{
    display: flex;
    flex-direction: column;
    width: 35%;
    margin: auto;
    margin-top: 12%;
    background-color: #ffffff50;
    border-radius: 30px; 
    border: 1px solid;
    border-color: #D276FD;
}
.btn{    
    padding: 10px;
    min-width: 150px;
    margin-top: 30px;
    margin-bottom: 30px;
}
.btn-bar{
    display: flex;
    justify-content: space-evenly;
}
</style>