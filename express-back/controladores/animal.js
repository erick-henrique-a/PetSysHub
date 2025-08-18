const fs = require("fs")

const {getTodosOsAnimaisNaoAdotados, getAnimalPorNome, getTodosOsAnimais,getTodasAsSolicitacoes, patchSolicitacaoAceitacao, patchSolicitacaoRecusa} = require("../servicos/animal");
const { get } = require("http");

async function getSolicitacoes(req,res){
    try{
        const solicitacoes = await getTodasAsSolicitacoes();
        console.log(solicitacoes)
        res.status(200);
        res.send(solicitacoes);
        
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}
async function getAnimais(req,res){
    try{
        const animais = await getTodosOsAnimais();
        console.log(animais)
        res.status(200);
        res.send(animais);
        
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}
async function getAnimaisNaoAdotados(req,res){
    try{
        const animais = await getTodosOsAnimaisNaoAdotados();
        console.log(animais)
        res.status(200);
        res.send(animais);
        
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

async function patchSolicitacaoAceitar(req, res){
    try{
        const id = req.params.id
        if (id){
            const animal = await patchSolicitacaoAceitacao(id)
            res.send(animal)
            return
        }
        res.status(422)
        res.send("nenhum id fornecido")

    } catch(error){
        res.status(500)
        res.send(error.message)
    }
}
async function patchSolicitacaoRecusar(req, res){
    try{
        const id = req.params.id
        if (id){
            const animal = await patchSolicitacaoRecusa(id)
            res.send(animal)
            return
        }
        res.status(422)
        res.send("nenhum id fornecido")

    } catch(error){
        res.status(500)
        res.send(error.message)
    }
}
async function getAnimal(req, res){
    try{
        const nome = req.params.nome
        if (nome){
            const animal = await getAnimalPorNome(nome)
            res.send(animal)
            return
        }
        res.status(422)
        res.send("Nome inválido")

    } catch(error){
        res.status(500)
        res.send(error.message)
    }

}



module.exports ={
    getSolicitacoes,
    getAnimais,
    getAnimaisNaoAdotados,
    getAnimal,
    patchSolicitacaoAceitar,
    patchSolicitacaoRecusar
}
