import styled from "styled-components";
import { getAnimais} from "../../servicos/animaisService";
import { popIn } from "../Animacoes";
import Pesquisa from "../Pesquisa";
import { Link } from "react-router-dom";

const animais = await getAnimais();

const imagensUrl = "https://ysqzfvxryhxekhgrjkzr.supabase.co/storage/v1/object/public/fotos-animais/"

const Lista = styled.div`
  display: flex;
`
const Card = styled.div`
  animation: ${popIn} ${props => props.delayAnimacao + "s" || '1.5s'} ease-out;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 10px solid pink!important;
  width: 18rem;
  border-radius: 0.25rem;
`
const Botao = styled.a`
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  color: white;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  background-color: #FF407D!important;
  border: 1px solid #FF407D!important;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
`



function Animais(){
    return(
      <Lista>

        <Pesquisa gatos={animais}/>

        {animais.map((animal, i) => (
          
        
            <Card delayAnimacao={Math.min(i*0.5, 5)}>
             
             <img src={imagensUrl + animal.nome.toLowerCase() + ".jpeg"} className="card-img-top" alt={animal.nome}/>
             <div className="card-body">
              <h5 className="card-title">{animal.nome}</h5>
              <Botao>
                <Link to={`/adote/${animal.nome.toLowerCase()}`} href="#" class="btn-primary botao-rosa">Adote-me</Link>
              </Botao>
           </div>
         </Card>
            
        ))}
      </Lista>
    )
}

export default Animais