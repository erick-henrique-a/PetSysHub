//TODO: Se não usar mais de um icone retirar a função MAP
import { Link } from 'react-router-dom';
import perfil from '../../imagens/perfil.svg'

import styled  from 'styled-components';

const IconesContainer = styled.ul`
    display: flex;
    padding-right: 3%;
    justify-content: end;
    width: 100%;
    `
const Icone = styled.li`
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      padding-top: 2.8vh;
      cursor: pointer;
      padding-left: 3%;
    `


const icones = [perfil];

function Icones(){
    return(
        <IconesContainer>
            <Link to={`/login`} >
            {icones.map((icone) => (
                <Icone  > <img src={icone} alt="icones"></img></Icone>
            ))}
            </Link>
        </IconesContainer>
    )
}
export default Icones