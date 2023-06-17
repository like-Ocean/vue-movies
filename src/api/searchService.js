import axios from "axios";

const KEY = import.meta.env.VITE_KEY;
const HEADER = {
    'X-API-KEY': KEY,
    'Content-Type': 'application/json'
}
const MAIN = 'https://kinopoiskapiunofficial.tech';
const API = '/api/v2.1/'

export default class searchService{
    static async search(line){
        try {
            const response = await axios.get(MAIN + API + 'films/search-by-keyword?' + `keyword=${line}`, {
                method: 'GET',
                headers: HEADER
            })
            console.log(response.data)
            return response.data
        }
        catch (e) {
            console.log(e)
        }
    }
}