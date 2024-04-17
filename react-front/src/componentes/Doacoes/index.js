import styled from 'styled-components'
import img from '../../imagens/qrcode.jpeg'


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
const PixContainer = styled.div`
    width: 600px!important;
    display: block;
    margin-left: auto;
    margin-right: auto;
`
const QrCode = styled.img`
    width: 500px!important;
    height: 500px!important;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
`



function Doacoes() {
    return (
        <DoacoesContainer>

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

            <PixContainer class="card">

                <div class="card-body">

                    <Titulo>Picpay</Titulo>

                </div>

                <QrCode class="card-img-bottom" src={img} alt="pix QrCode"/>
            </PixContainer>
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