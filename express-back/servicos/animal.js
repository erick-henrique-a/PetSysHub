const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = 'https://ysqzfvxryhxekhgrjkzr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlzcXpmdnhyeWh4ZWtoZ3Jqa3pyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxMTQ1OTEsImV4cCI6MjAzMDY5MDU5MX0.TnRSA9aR99HHWffExwfHZpLfIenJWz2YDVnn1wX4QDM'
const supabase = createClient(supabaseUrl, supabaseKey)

const fs = require("fs")

async function getTodosOsAnimais() {
    const { data, error } = await supabase.from("animais").select("*");
    if (error) {
        console.error("Erro buscando os animais:", error.message);
        return [];
    }

    const jsonData = JSON.parse(JSON.stringify(data));
    return jsonData
}

async function patchSolicitacaoAceitacao(id) {
    let { data: solicitacoesAnimais, errorSolicitacaoAnimais } = await supabase
        .from('solicitacoes')
        .select('animal_solicitado')
        .eq('id', id)
        .single()

    if (errorSolicitacaoAnimais) {
        console.error(errorSolicitacaoAnimais);
        return;
    }

    let { data: solicitacoesUsuario, errorSolicitacaoUsuario } = await supabase
        .from('solicitacoes')
        .select('solicitante')
        .eq('id', id)
        .single()

    if (errorSolicitacaoUsuario) {
        console.error(errorSolicitacaoUsuario);
        return;
    }

    const idAnimal = solicitacoesAnimais.animal_solicitado
    const idUsuario = solicitacoesUsuario.solicitante

    console.log("esse é o id da requisição: " + id)
    console.log("esse é o id do animal: " + solicitacoesAnimais.animal_solicitado)

    let { data, error } = await supabase
        .from('solicitacoes')
        .update({ estado_solicitacao: 'Deferida' })
        .eq('id', id)
        .select()

    if (error) {
        console.error(error);
        return;
    }

    let { dataAnimal, errorAnimal } = await supabase
        .from('animais')
        .update({ tutor: idUsuario, adotado: 1 })
        .eq('id', idAnimal)
        .select()

    if (errorAnimal) {
        console.error(errorAnimal);
        console.log("Erro ao atualizar o animal")
        return;
    }
}

async function patchSolicitacaoRecusa(id) {
    let { data, error } = await supabase
        .from('solicitacoes')
        .update({ estado_solicitacao: 'Recusada' })
        .eq('id', id)
        .select()

    if (error) {
        console.error(error);
        return;
    }
}


async function getTodasAsSolicitacoes() {
    let { data: solicitacoes, error } = await supabase
        .from('solicitacoes')
        .select('*');

    if (error) {
        console.error(error);
        return;
    }

    // Criar um array de promises para cada consulta de animal
    const promisesAnimais = solicitacoes.map(solicitacao => {
        return supabase
            .from('animais')
            .select('nome')
            .eq('id', solicitacao.animal_solicitado)
            .then(response => {
                if (response.error) {
                    console.error(response.error);
                    return solicitacao; // Mantém a solicitação original caso ocorra um erro
                }
                return { ...solicitacao, animal_solicitado: response.data[0].nome };
            });
    });
    // Aguardar todas as promises e atualizar o array de solicitações
    const solicitacoesComNomeAnimal = await Promise.all(promisesAnimais);

    // Agora você pode usar o updatedSolicitacoes com os dados atualizados
    const promisesUsuarios = solicitacoesComNomeAnimal.map(solicitacao => {
        return supabase
            .from('usuarios')
            .select('nome')
            .eq('id', solicitacao.solicitante)
            .then(response => {
                if (response.error) {
                    console.error(response.error);
                    return solicitacao;
                }
                return { ...solicitacao, solicitante: response.data[0].nome };
            });
    });

    const solicitacoesCompleta = await Promise.all(promisesUsuarios);

    const jsonData = JSON.parse(JSON.stringify(solicitacoesCompleta));
    return jsonData;
}

async function getTodosOsAnimaisNaoAdotados() {
    const { data, error } = await supabase.from("animais").select("*").eq("adotado", false);
    if (error) {
        console.error("Erro buscando os animais:", error.message);
        return [];
    }

    const jsonData = JSON.parse(JSON.stringify(data));
    return jsonData
}

async function getAnimalPorNome(nome) {
    const { data, error } = await supabase.from("animais").select("*").eq("nome", nome.toLowerCase())
    const jsonData = JSON.parse(JSON.stringify(data));
    return jsonData
}

module.exports = {
    getTodasAsSolicitacoes,
    getTodosOsAnimais,
    getTodosOsAnimaisNaoAdotados,
    getAnimalPorNome,
    patchSolicitacaoAceitacao,
    patchSolicitacaoRecusa
}