import styled from 'styled-components'
import { TituloPrincipal } from '../Textos'
import QrCodeComponent from '../QrCodeComponent'


const DoacoesContainer = styled.div`
`
const Titulo = styled.h4`
    text-align: center;
    border-width: 100px;
    margin: 0 auto;
    max-width: 1280px;
    color: #40679E;
`
const TextoDoacao = styled.div`
    text-align: center;
    border-width: 100px;
    margin-right: auto;
    margin-left: auto;
    width: 800px;
`
const valorDoUsuario = "gustavoMilane43442434efskfjsfK44443433434343kkkkgggggggggggggggggggggggggggggggggggg";

function Doacoes() {
    return (
        <DoacoesContainer>
            <TituloPrincipal>Como ajudar</TituloPrincipal>
            <TextoDoacao>
                <p>Para continuarmos ajudando cachorros e gatinhos precisamos de sua ajuda!
                    As doações são utilizadas para alimentar e manter todos os nossos bichinhos confortáveis e saudáveis, sendo feita a compra tanto de ração quanto de brinquedos e caminhas
                </p>
            </TextoDoacao>

            <br />

            <Titulo>Doações em dinheiro</Titulo>
            <br />

            <TextoDoacao>
                <p>O dinheiro que recebemos é usado para pagarmos por cirurgias (inclusive as de castração), tratamentos, internações, compra de vacinas e de tudo o que os gatinhos precisam. Consideramos o tipo de doação mais importante!</p>
            </TextoDoacao>

            <br />
            <QrCodeComponent valorQrCode={valorDoUsuario}/>
            <br />

            <div class="produtos">
                <Titulo>Doações em produtos</Titulo>
                <br />
                <TextoDoacao>
                    <p>Aceitamos doações de ração, areia, remédios, caminhas, arranhadores, caixas de transporte e cobertores.
                        Após a compra, envie um e-mail para informacoes@petsyshub.org.br. Assim podemos conferir a entrega e colocar o seu nome na prestação de contas do site.
                    </p>
                </TextoDoacao>
            </div>


        </DoacoesContainer>
    )
}
export default Doacoes