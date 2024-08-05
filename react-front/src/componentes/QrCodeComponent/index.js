import styled from 'styled-components'
import { QRCode } from 'react-qr-code';

const PixContainer = styled.div`
    width: 600px!important;
    display: block;
    margin-left: auto;
    margin-right: auto;
`
const QrCodeStyle = styled.div`
    width: 500px!important;
    height: 500px!important;
    display: block;
    margin-left: 16%;
    margin-right: auto;
    margin-top:5%;
`
const Titulo = styled.h4`
    text-align: center;
    border-width: 100px;
    margin: 0 auto;
    max-width: 1280px;
    color: #40679E;
`

function QrCodeComponent({valorQrCode}){
    
        return (
            <PixContainer class="card">

                <div class="card-body">

                    <Titulo>Picpay</Titulo>

                </div>

                <QrCodeStyle>

                    <QRCode
                        value={valorQrCode}
                        size={400}
                        viewBox={`0 0 ${400} ${400}`}
                        errorCorrectLevel="L"
                        /> 
                </QrCodeStyle>
               
            </PixContainer>
    )
} 
    

export default QrCodeComponent