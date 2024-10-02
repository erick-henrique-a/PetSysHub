const fs = require("fs")

const {getTodosOsAnimais, getAnimalPorNome} = require("../servicos/animal")

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
    getAnimais,
    getAnimal
}
