<template>
    <PageHeader />
    <div class="feed-body">
        <div class="feed-posts">
            <div class="post" v-for='post in posts' v-bind:key="post.id">
            <PostView :post="post"/>
            </div>
        </div>     
        <FilterNews class="feed-filters" @chooseNews="onChooseNews"/>
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
            posts:[],
            recommendations:[]
        }
    },
    components:{
        PageHeader,
        PostView,
        FilterNews
    },
    methods:{
        onChooseNews(data){
            // localStorage.setItem('feedType', data.feedType)
            // console.log(localStorage.getItem('feedType'))

            if(data.feedType == 'feed'){
            FeedService.getFeed().then((response)=> {
                if(response.status == 200) {            
                    this.posts = response.data
                    console.log('feed' + this.posts)
                }          
            })
            }
            if(data.feedType == 'recommend'){
                FeedService.getFeedRec().then((response)=> {
                    if(response.status == 200) {        
                    this.posts = response.data
                    console.log('rec' + this.posts)
                    }          
                })
            }
        },
        getFeedType(){
            if(localStorage.getItem('feedType') == 'recommend') return true
            else return false
        }
    },
    mounted(){
        // if(localStorage.getItem('feedType') == 'feed'){
            FeedService.getFeed().then((response)=> {
                if(response.status == 200) {            
                    this.posts = response.data
                    console.log('feed' + this.posts)
                }          
            })
        // }
        // if(localStorage.getItem('feedType') == 'recommend'){
        //     FeedService.getFeedRec().then((response)=> {
        //         if(response.status == 200) {        
        //         this.recommendations = response.data
        //         console.log('rec' + this.recommendations)
        //         }          
        //     })
        // }
        
    },
    // updated(){
    //     if(localStorage.getItem('feedType') == 'feed'){
    //         FeedService.getFeed().then((response)=> {
    //             if(response.status == 200) {            
    //                 this.posts = response.data
    //                 console.log('feed' + this.posts)
    //             }          
    //         })
    //     }
    //     if(localStorage.getItem('feedType') == 'recommend'){
    //         FeedService.getFeedRec().then((response)=> {
    //             if(response.status == 200) {        
    //             this.recommendations = response.data
    //             console.log('rec' + this.recommendations)
    //             }          
    //         })
    //     }
    // }
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