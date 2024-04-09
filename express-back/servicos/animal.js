const fs = require("fs")

function getTodosOsAnimais(){
    return JSON.parse(fs.readFileSync("animais.json"))
}

function getAnimalPorId(id){
    animais = JSON.parse(fs.readFileSync("animais.json"));
    return animais.filter(animal => animal.id === id)
}

module.exports = {
    getTodosOsAnimais,
    getAnimalPorId
}