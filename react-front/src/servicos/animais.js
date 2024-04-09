import axios from "axios";

const animaisApi = axios.create({baseURL: "http://localhost:8000/animais"})
const catApi = axios.create({baseURL: "https://api.thecatapi.com/v1/images/search?limit=10&mime_types=jpg&size=med&api_key=live_dZKzMmEM3Uej88qsiSdvejI8TDzJtcXzM2zzDihvJQEVoH4Smdba9k7erDrk17lN"})

async function getAnimais(){
    const response = await animaisApi.get('/');

    return response.data
}

async function getAnimalPorId(id){
    const response = await animaisApi.get(`/${id}`)
    return response.data
}

async function getGatos(){
    const response = await catApi.get(`/`)
    return response.data
}



export{
    getAnimais,
    getAnimalPorId,
    getGatos
}