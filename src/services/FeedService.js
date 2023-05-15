import axios from 'axios'

const FEED_API_BASE_URL='http://localhost:9000/feed/'

class FeedService{

    //GET
    getFeed(){
        let URL = FEED_API_BASE_URL
        return axios.get(URL)
    }
}

export default new FeedService