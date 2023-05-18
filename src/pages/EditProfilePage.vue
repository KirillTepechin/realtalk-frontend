<template>
    <PageHeader/>
    <div class="page-edit">
        <router-view class="route"/>
        <FilterProfileEdit class="filter"/>
    </div>
</template>
  
<script>
import PageHeader from "@/components/PageHeader";
import FilterProfileEdit from "@/components/FilterProfileEdit";

export default {
    components: {
        PageHeader,
        FilterProfileEdit
    }
}
</script>
  
<style>
    .page-edit{
        display: flex;
        justify-content: center;
        align-items: flex-start;
        margin-block: 20px;
        margin-inline-start: 200px;
        margin-inline-end: 20px;
        
    }
    .filter, .route {
        margin-inline-start: 300px;
    }    
</style>