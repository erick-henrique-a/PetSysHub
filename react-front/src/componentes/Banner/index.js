import styled from "styled-components"
import { TituloPrincipal } from "../Textos"
import { fadeIn } from "../Animacoes"

const ContainerHome = styled.div`
animation: ${fadeIn} 1.5s ease-out;
`

function Banner(){
    return(
        <ContainerHome>
            <TituloPrincipal>Seja bem vindo</TituloPrincipal>
        </ContainerHome>
    )
}
export default Banner