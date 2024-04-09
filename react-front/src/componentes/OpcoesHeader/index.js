import styled from 'styled-components'
import { Link } from 'react-router-dom'

const OpcoesContainer = styled.ul`
  display: flex;
`
const Opcao = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  padding-top: 2.8vh;
  cursor: pointer;
  min-width: 120px;
  
  a:link:not(#exclude), a:visited:not(#exclude) {
    text-decoration: none;
    color: black;
    cursor: pointer;
}
`
const textoOpcoes = ['ADOTE', 'VOLUNTARIE']


function OpcoesHeader(){
    return(
      <OpcoesContainer className='d-flex opcoes'>
        {textoOpcoes.map((texto) => (
          <Link to={`/${texto.toLowerCase()}`}> 
            <Opcao>{texto}</Opcao>
          </Link>
        ) ) }
      </OpcoesContainer>
  )
}
export default OpcoesHeader