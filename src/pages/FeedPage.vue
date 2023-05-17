<template>
    <PageHeader />
    <div class="feed-body">
        <div class="feed-posts">
            <PostView />
            <PostView />
            <PostView />
            <PostView />
            <PostView />
            <PostView />
            <PostView />
        </div>
        <FilterNews class="feed-filters"/>
    </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import PostView from "@/components/PostView";
import FilterNews from "@/components/FilterNews";

export default {
    
    components:{
        PageHeader,
        PostView,
        FilterNews
    },
  
}
</script>

<style>
.feed-body {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    margin-block: 20px;
    margin-inline-start: 150px;
    margin-inline-end: 20px;

}

.feed-filters, .feed-posts {
   margin-inline: 20px;
   min-width: 300px;
}

.feed-posts{
    align-content: space-around;
    display: flex;
    flex-flow: column nowrap;
}
</style>