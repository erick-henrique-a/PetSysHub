import styled from 'styled-components';
import 'typeface-roboto';
import { TextoFooter } from '../Textos';

// Estilizando o footer
const FooterWrapper = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: #f0f0f0;
    height: 2.5rem;
    text-align: center;
`;

// Componente do Footer
const Footer = () => {
    return (
        <FooterWrapper>
            <TextoFooter>Desenvolvido Por Erick Henrique & Fernanda Egawa</TextoFooter>
        </FooterWrapper>
    );
};

export default Footer;