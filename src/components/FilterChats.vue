<template>
    <div id="btn-bar">
        <button>
        Все чаты
        </button>
        <button>
        Непрочитанные чаты
        </button>
        <button>
        Избранное
        </button>
    </div>
</template>

<script>
export default {
    components:{
    }
  
}
</script>

<style scoped>
#btn-bar{
    display: flex;
    flex-direction: column;
    width: 25%;
    background-color: white;
    border-radius: 10px;
    border: 1px solid;
    border-color: #D276FD;
}
button{
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    background-color: white;
    border-color: #D276FD;    
    font-family: Georgia, serif;
    font-size: 10pt;  
}
</style>