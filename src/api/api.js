import axios from "axios";
const instance = axios.create(
    {
        baseURL:'https://social-network.samuraijs.com/api/1.0/',
        withCredentials:true,
        headers:{
            'API-KEY':'0d7b6380-eefc-48a9-b9a7-1c642af2cf08'
        }
    }
)


export const getUsersObj = {
    getUsersFunc (currentPage, usersOnPageCount){
        return instance.get(`users?page=${currentPage}&count=${usersOnPageCount}`)
            .then(response=>{
                return response.data
            })
        }
}