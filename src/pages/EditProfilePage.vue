<template>
    <PageHeader/>
    <div class="page-edit">
        <div class="page-edit-container">
            <div class="route">
                <router-view/>
            </div>            
            <div class="filter">
                <FilterProfileEdit />
            </div>
        </div>     
    </div>
</template>
  
<script>


import PageHeader from "@/components/PageHeader";
import FilterProfileEdit from "@/components/FilterProfileEdit";

export default {
    
    components: {
        PageHeader,
        FilterProfileEdit
    },
    
}
</script>
  
<style scoped>
    .page-edit-container{
        display: flex;
        align-items: flex-start;
        margin: 15px 300px 20px 500px;
        padding: 0px 0px 20px 0px;
        justify-content: space-evenly;
    }

    .filter{
        min-width: 300px;
    }

    .route{
        width: 100%;
        margin-right: 20px;
    }
</style>