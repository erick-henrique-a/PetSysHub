import logoSvg from '../../imagens/logo.svg';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import { TextoLogo } from '../Textos';

const LogoContainer = styled.div`
    display: flex;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    
`
const LogoImagem = styled.img`
    height: 55px;
    
`

function Logo(){
    return (
        <LogoContainer>
            <Link to="/">
                <LogoImagem src={logoSvg} alt='alura logo'></LogoImagem>
            </Link>
            <TextoLogo className="my-0 ms-3"><strong>Pet</strong>Hub</TextoLogo>
            
      </LogoContainer>
    )
}

export default Logo