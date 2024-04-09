const fs = require("fs")

const {getTodosOsAnimais, getAnimalPorId} = require("../servicos/animal")

function getAnimais(req,res){
    try{
        const animais = getTodosOsAnimais();
        res.status(200);
        res.send(animais);
        
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function getAnimal(req, res){
    try{
        const id = req.params.id
        if (id && Number(id)){
            const animal = getAnimalPorId(id)
            res.send(animal)
            return
        }
        res.status(422)
        res.send("Id inválido")

    } catch(error){
        res.status(500)
        res.send(error.message)
    }

}

module.exports ={
    getAnimais,
    getAnimal
}