import axios from "axios";
import {UsersResponseType} from "../Components/Users/UsersContainer";

export const usersAPI = {
    getUsers(currentPage = 1,pageSize = 10) {
        return instance.get<UsersResponseType>(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    }
}


const instance = axios.create({
    withCredentials:true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY':"204a06f3-f4cf-44c7-b104-0263b991a423"
}});




