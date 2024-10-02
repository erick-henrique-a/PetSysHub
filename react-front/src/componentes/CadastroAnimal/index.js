import { createClient } from '@supabase/supabase-js';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import styled from 'styled-components';

const supabaseUrl = 'https://ysqzfvxryhxekhgrjkzr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlzcXpmdnhyeWh4ZWtoZ3Jqa3pyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxMTQ1OTEsImV4cCI6MjAzMDY5MDU5MX0.TnRSA9aR99HHWffExwfHZpLfIenJWz2YDVnn1wX4QDM';
const supabase = createClient(supabaseUrl, supabaseKey);

async function cadastrarAnimal(nomeAnimal, nomeEspecie, descricao, idade, sexo, haveFelv, haveFiv) {
    const { data, error } = await supabase
        .from('animais')
        .insert([
            { nome: nomeAnimal, especie: nomeEspecie, descricao: descricao, idade:idade, sexo: sexo, felv: haveFelv, fiv: haveFiv },
        ])
        .select();

    console.log(haveFelv);
    if (error) {
        console.error(error);
    } else {
        console.log('Animal cadastrado com sucesso!');
    }
}

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

function CadastroAnimal() {
    const [nomeAnimal, setNomeAnimal] = useState('');
    const [nomeEspecie, setNomeEspecie] = useState('');
    const [descricao, setDescricao] = useState('');
    const [idade, setIdade] = useState('');
    const [sexo, setSexo] = useState('');
    const [haveFelv, setHaveFelv] = useState(false);
    const [haveFiv, setHaveFiv] = useState(false);
    const [showCadastroModal, setShowCadastroModal] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        await cadastrarAnimal(nomeAnimal.toLowerCase(), nomeEspecie, descricao, idade, sexo, haveFelv, haveFiv);
        setShowCadastroModal(false);
        setShowAlert(true);
    };

    return (
        <div>
            <h1>Cadastro de Animal</h1>
            <Button variant="primary" onClick={() => setShowCadastroModal(true)}>
                Cadastrar Animal
            </Button>

            <ModalContainer>
                <Modal show={showCadastroModal} onHide={() => setShowCadastroModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Cadastro de Animal</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={handleSubmit}>
                            <label>
                                Nome do Animal:
                                <input
                                    type="text"
                                    value={nomeAnimal}
                                    onChange={(event) => setNomeAnimal(event.target.value)}
                                    required
                                />
                            </label>

                            <label>
                                Espécie:
                                <input
                                    type="text"
                                    value={nomeEspecie}
                                    onChange={(event) => setNomeEspecie(event.target.value)}
                                    required
                                />
                            </label>

                            <label>
                                Idade:
                                <input type="number" value={idade} onChange={(event) => setIdade(event.target.valueAsNumber)} />
                            </label>

                            <label>
                                Sexo:
                                <label for="macho">Macho</label>
                                <input type="radio" value="macho" id="macho" name='qualSexo' onChange={(event) => setSexo(event.target.value)} />
                                <label for="femea">Fêmea</label>
                                <input type="radio" value="femea" id="femea" name='qualSexo' onChange={(event) => setSexo(event.target.value)} />
                                <label for="desconhecido">Desconhecido</label>
                                <input type="radio" value="desconhecido" id="desconhecido" name='qualSexo' onChange={(event) => setSexo(event.target.value)} />
                            </label>
                            <label>
                                Tem Felv?
                                <input type="checkbox" value={haveFelv} onChange={(event) => setHaveFelv(event.target.checked)} />
                            </label>

                            <label>
                                Tem Fiv?
                                <input type="checkbox" value={haveFiv} onChange={(event) => setHaveFiv(event.target.checked)} />
                            </label>

                            <label>
                                Descrição:
                                <textarea value={descricao} onChange={(event) => setDescricao(event.target.value)} />
                            </label>

                            <Button variant="primary" type="submit">Cadastrar</Button>
                        </form>
                    </Modal.Body>
                </Modal>
            </ModalContainer>

            {showAlert && (
                <div style={{ backgroundColor: 'green', color: 'white', padding: '10px' }}>
                    Animal cadastrado com sucesso!
                </div>
            )}
        </div>
    );
}

export default CadastroAnimal;