import axios from "axios";

const KEY = import.meta.env.VITE_KEY;
const HEADER = {
    'X-API-KEY': KEY,
    'Content-Type': 'application/json'
}
const MAIN = 'https://kinopoiskapiunofficial.tech';
const API = '/api/v2.2/'

export default class Service{
    static async getAll(pageNumber){
        try {
            const response = await axios.get(MAIN + API + 'films' + `/top?page=${pageNumber}`,{
                method: 'GET',
                headers: HEADER
            })
            return response.data
        }
        catch (e) {
            console.log(e)
        }
    }
    static async getCurrentInfo(id){
        try {
            const response = await axios.get(MAIN + API + 'films' + `/${id}`,{
                method: 'GET',
                headers: HEADER
            })
            return response.data
        }
        catch (e) {
            console.log(e)
        }
    }
    static async getBudget(id){
        try {
            const response = await axios.get(MAIN + API + 'films' + `/${id}/box_office`,{
                method: 'GET',
                headers: HEADER
            })
            return response.data
        }
        catch (e) {
            console.log(e)
        }
    }
    static async getImages(id, imgType){
        try {
            const response = await axios.get(MAIN + API + 'films' + `/${id}/images?type=${imgType}&page=1`,{
                method: 'GET',
                headers: HEADER
            })
            return response.data
        }
        catch (e) {
            console.log(e)
        }
    }
    static async getSimilar(id){
        try {
            const response = await axios.get(MAIN + API + 'films' + `/${id}/similars`,{
                method: 'GET',
                headers: HEADER
            })
            return response.data
        }
        catch (e) {
            console.log(e)
        }
    }
    static async getReviews(id, pageNumber){
        try {
            const response = await axios.get(MAIN + API + 'films' + `/${id}/reviews?page=${pageNumber}`,{
                method: 'GET',
                headers: HEADER
            })
            return response.data
        }
        catch (e) {
            console.log(e)
        }
    }
}