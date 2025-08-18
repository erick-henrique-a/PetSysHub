import axios from "axios";

const animaisApi = axios.create({baseURL: "http://localhost:8000/animais"})

async function getAnimaisDisponiveis(){
    const response = await animaisApi.get('/disponiveis');

    return response.data
}

async function getAnimais(){
    const response = await animaisApi.get('/');

    return response.data
}

async function getAnimalPorNome(nome){
    const response = await animaisApi.get(`/${nome}`)
    return response.data
}

async function getSolicitacoes(){
    const response = await animaisApi.get('/solicitacoes');
    return response.data
}
async function patchAceitarSolicitacao(id){
    const response = await animaisApi.patch(`/solicitacoes/aceitar/${id}`);
    return response.data
}
async function patchRecusarSolicitacao(id){
    const response = await animaisApi.patch(`/solicitacoes/recusar/${id}`);
    return response.data
}



export{
    getAnimais,
    getAnimalPorNome,
    getAnimaisDisponiveis,
    getSolicitacoes,
    patchAceitarSolicitacao,
    patchRecusarSolicitacao
}