import styled from 'styled-components'
import Doacoes from '../componentes/Doacoes';

const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background: linear-gradient(106.5deg, rgba(255, 215, 185, 0.91) 23%, rgba(223, 159, 247, 0.8) 93%);
`

const MainContainer = styled.main`
  padding-bottom: 2.5rem;  
  min-width: 100vw; 
`

function Voluntarie(){
    return(
    <AppContainer>
      
      {/*Contém o container entre o cabeçalho e o rodapé*/}
      <MainContainer>
         <Doacoes/>
      </MainContainer>

      
    </AppContainer>
    )

}

export default Voluntarie;