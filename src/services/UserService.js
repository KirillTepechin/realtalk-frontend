import axios from 'axios'

const USER_API_BASE_URL='http://localhost:9000/'
class UserService{

    //PUT
    subscribe(id){
        let URL = USER_API_BASE_URL+'subscribe/'+id
        return axios.put(URL)
    
    }
    editProfile(user){
        let URL = USER_API_BASE_URL+'edit-profile/'
        return axios.putForm(URL, user)
    }
    editPreferences(user){
        let URL = USER_API_BASE_URL+'edit-preferences/'
        return axios.putForm(URL, user)
    }

    //POST
    login(user){
        let URL = USER_API_BASE_URL+'auth'
        return axios.post(URL, user)
    }
    register(user){
        let URL = USER_API_BASE_URL+'register'
        return axios.postForm(URL, user)
    }

    //GET
    me(){
        let URL = USER_API_BASE_URL+'me'
        return axios.get(URL)
    }
    
    findUsers(query){
        let URL = USER_API_BASE_URL+'find'
        return axios.get(URL, query)
    }
    getUserProfile(login){
        let URL = USER_API_BASE_URL+login
        return axios.get(URL)
    }
    getUserPosts(login){
        let URL = USER_API_BASE_URL+'user-posts/'+login
        return axios.get(URL)
    }
}
export default new UserService()