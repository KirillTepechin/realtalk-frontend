<template>
    <PageHeader />
    <div class="feed-body">
        <div class="feed-posts">
            <div class="post" v-for='post in posts' v-bind:key="post.id">
            <PostView :post="post"/>
            </div>
        </div>        
        <FilterNews class="feed-filters"/>
    </div>
</template>

<script>
import FeedService from "@/services/FeedService";

import PageHeader from "@/components/PageHeader";
import PostView from "@/components/PostView";
import FilterNews from "@/components/FilterNews";

export default {
    data(){
        return {
            posts:[]
        }
    },
    components:{
        PageHeader,
        PostView,
        FilterNews
    },
    mounted(){
        FeedService.getFeed().then((response)=> {
          if(response.status == 200) {            
            this.posts = response.data
            console.log(this.posts)
          }          
        })      
    }
}
</script>

<style>
.feed-body {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    margin: 15px 300px 20px 300px;
    padding: 0px 0px 20px 0px;

}

.feed-filters, .feed-posts {
   margin-inline: 20px;
   min-width: 300px;
}

.feed-posts{
    flex: auto;
}

</style>