import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '9d03aa1a-06f6-4c73-82af-a4fc37af8ec1'
    }
})
