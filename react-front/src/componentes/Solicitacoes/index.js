import { createClient } from '@supabase/supabase-js';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getSolicitacoes, patchAceitarSolicitacao, patchRecusarSolicitacao} from "../../servicos/animaisService";

import styled from 'styled-components';
const supabaseUrl = 'https://ysqzfvxryhxekhgrjkzr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlzcXpmdnhyeWh4ZWtoZ3Jqa3pyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxMTQ1OTEsImV4cCI6MjAzMDY5MDU5MX0.TnRSA9aR99HHWffExwfHZpLfIenJWz2YDVnn1wX4QDM';
const supabase = createClient(supabaseUrl, supabaseKey);
let solicitacoes = await getSolicitacoes();



async function aceitarSolicitacao(id, navigate) {
    patchAceitarSolicitacao(id)
    navigate(0);
}

async function recusarSolicitacao(id, navigate) {
    patchRecusarSolicitacao(id)
    navigate(0);
}

async function deletarSolicitacao(id, navigate) {
    
    const { error } = await supabase
        .from('solicitacoes')
        .delete()
        .eq('id', id)
        if (error) {
            console.error(error);
            return;
        }
        console.log("Solicitação deletada com sucesso!")
        navigate(0);
}

const ModalContainer = styled.div`
    max-width: 600px; 
    margin: 0 auto;
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

function Solicitacoes() {
    const [showCadastroModal, setShowCadastroModal] = useState(false);
    const navigate = useNavigate()
    return (
        <div>
            <h1>Solicitações</h1>
            <Button variant="primary" onClick={() => setShowCadastroModal(true)}>
                Ver Solicitações
            </Button>

            <ModalContainer>
                <Modal show={showCadastroModal} onHide={() => setShowCadastroModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Solicitações</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div class="container-fluid">

                            {solicitacoes.length > 0 ? <div>
                                <table class="table table-hover">
                                    <thead class="thead-light">
                                        <tr>
                                            <th scope="col">Solicitante</th>
                                            <th scope="col">Animal Solicitado</th>
                                            <th scope="col">Estado Da Solicitação</th>
                                            <th scope="col">Ações</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {solicitacoes.map(solicitacao => (
                                            <tr>
                                                <td>{solicitacao.solicitante}</td>
                                                <td> {solicitacao.animal_solicitado}</td>
                                                <td>{solicitacao.estado_solicitacao}</td>
                                                {solicitacao.estado_solicitacao === "Deferida" || solicitacao.estado_solicitacao === "Recusada" ? <td> <Button onClick={() => deletarSolicitacao(solicitacao.id, navigate)}> Deletar</Button></td> : <td> <Button variant="success" onClick={() => aceitarSolicitacao(solicitacao.id, navigate)}>
                                                    Aceitar
                                                </Button>
                                                    <Button onClick={() => recusarSolicitacao(solicitacao.id, navigate)} variant="danger">
                                                        Recusar
                                                    </Button></td>}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div> :
                                <div>
                                    <span>Nenhuma Solicitação Pendente</span>
                                </div>}

                        </div>



                    </Modal.Body>
                </Modal>
            </ModalContainer>

        </div>
    );
}

export default Solicitacoes;