import { createClient } from '@supabase/supabase-js';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import styled from 'styled-components';

const supabaseUrl = 'https://ysqzfvxryhxekhgrjkzr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlzcXpmdnhyeWh4ZWtoZ3Jqa3pyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxMTQ1OTEsImV4cCI6MjAzMDY5MDU5MX0.TnRSA9aR99HHWffExwfHZpLfIenJWz2YDVnn1wX4QDM';
const supabase = createClient(supabaseUrl, supabaseKey);

const ModalContainer = styled.div`
  .modal-content {
    background-color: #fff;
    border-radius: 5px;
  }

  .modal-header {
    border-bottom: 1px solid #ddd;
  }

  .modal-title {
    font-weight: bold;
  }
`;

async function cadastrarUsuario(nomeUsuario, nomeEstado, nomeCidade) {
  const { data, error } = await supabase
    .from('usuarios')
    .insert([
      { nome: nomeUsuario.toLowerCase(), estado: nomeEstado, cidade: nomeCidade},
    ])
    .select();
  if (error) {
    console.error(error);
  } else {
    console.log('Usuário cadastrado com sucesso!');
  }
}

async function criarSolicitacao(nomeUsuario, nomeEstado, nomeCidade, uuidAnimal) {
  // Consulta à tabela de usuários para obter o ID
  let { data: usuarios, error } = await supabase
    .from('usuarios')
    .select('id')
    .eq('nome', nomeUsuario)
    .eq('estado', nomeEstado)
    .eq('cidade', nomeCidade)
    .single(); // Retorna apenas um resultado

  if (error) {
    console.error('Erro ao buscar usuário:', error);
    return;
  }

  const uuidUsuario = usuarios.id; // Extrai o ID do usuário

  
  // Insere a nova solicitação
  const { data, errorInsert } = await supabase
    .from('solicitacoes')
    .insert([
      { solicitante: uuidUsuario, animal_solicitado: uuidAnimal },
    ]);

  if (errorInsert) {
    console.error('Erro ao criar solicitação:', errorInsert);
  } else {
    console.log('Solicitação criada com sucesso!');
      // Manda o usuario para o formulário de inscrição
      window.open('https://docs.google.com/forms/d/1d0pxfQPkO7DEAMxXgtTngB9MjU2BfNfPmoUE53TbnCo/viewform', '_blank');
  }
}

function CadastroUsuario({uuid}) {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [nomeEstado, setNomeEstado] = useState('');
  const [nomeCidade, setNomeCidade] = useState('');
  const [showCadastroModal, setShowCadastroModal] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await cadastrarUsuario(nomeUsuario.toLowerCase(), nomeEstado, nomeCidade);
    await criarSolicitacao(nomeUsuario.toLowerCase(), nomeEstado, nomeCidade, uuid);

    setShowCadastroModal(false);
    
  
  };

  return (
    <div>
      <Button variant="primary" onClick={() => setShowCadastroModal(true)} class="btn-primary botao-rosa">
        Adote-Me
      </Button>

      <ModalContainer>
        <Modal show={showCadastroModal} onHide={() => setShowCadastroModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Cadastro de Usuário</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleSubmit}>
              <label>
                Nome:
                <input
                  type="text"
                  value={nomeUsuario}
                  onChange={(event) => setNomeUsuario(event.target.value)}
                  required
                />
              </label>

              <label>
                Estado:
                <input
                  type="text"
                  value={nomeEstado}
                  onChange={(event) => setNomeEstado(event.target.value)}
                  required
                />
              </label>

              <label>
                Cidade:
                <input
                  type="text"
                  value={nomeCidade}
                  onChange={(event) => setNomeCidade(event.target.value)}
                  required
                />
              </label>

              <Button variant="primary" type="submit">
                Cadastrar
              </Button>
            </form>
          </Modal.Body>
        </Modal>
      </ModalContainer>
    </div>);
}

export default CadastroUsuario;