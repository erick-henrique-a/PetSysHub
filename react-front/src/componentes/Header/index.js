import Icones from '../Icones';
import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader';
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
` 


function Header(){
    return(
      <HeaderContainer>    
          <Logo/>
          <OpcoesHeader/>
          <Icones/>
      </HeaderContainer>
    )
}
export default Header