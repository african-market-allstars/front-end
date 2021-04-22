import axios from 'axios'; //


export const axiosWithAuth = () => {
    const token = localStorage.getItem('token')
    return axios.create({
        baseURL: 'https://swapi.dev/api/', 
        headers: {
            Authorization: token 
        }
    })
}