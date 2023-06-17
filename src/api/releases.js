import axios from "axios";

const KEY = import.meta.env.VITE_KEY;
const HEADER = {
    'X-API-KEY': KEY,
    'Content-Type': 'application/json'
}
const MAIN = 'https://kinopoiskapiunofficial.tech';
const API = '/api/v2.2/'

export default class releasesService{
    static async getReleases(year, month){
        try {
            const response = await axios.get(MAIN + API + 'films/premieres?' + `year=${year}&month=${month}`, {
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