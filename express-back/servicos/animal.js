const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = 'https://ysqzfvxryhxekhgrjkzr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlzcXpmdnhyeWh4ZWtoZ3Jqa3pyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxMTQ1OTEsImV4cCI6MjAzMDY5MDU5MX0.TnRSA9aR99HHWffExwfHZpLfIenJWz2YDVnn1wX4QDM'
const supabase = createClient(supabaseUrl, supabaseKey)

const fs = require("fs")

async function getTodosOsAnimais(){
    const{data, error} = await supabase.from("animais").select("*").eq("adotado", false);
    if (error) {
        console.error("Erro buscando os animais:", error.message);
        return [];
      }
    
      const jsonData = JSON.parse(JSON.stringify(data));
      return jsonData
}

async function getAnimalPorNome(nome){
    const{data, error} = await supabase.from("animais").select("*").eq("nome", nome.toLowerCase())
    const jsonData = JSON.parse(JSON.stringify(data));
    return jsonData
}

module.exports = {
    getTodosOsAnimais,
    getAnimalPorNome
}