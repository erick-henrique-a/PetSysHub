import { useParams } from 'react-router-dom';
import { getAnimalPorNome } from '../servicos/animaisService';
import { useState, useEffect } from 'react';
import {popIn} from "../componentes/Animacoes";
import styled from 'styled-components';
import CadastroUsuario from '../componentes/CadastroUsuario';

const Detalhes = styled.div`
  color: black;
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
  border-radius: 1rem;
`
const imagensUrl = "https://ysqzfvxryhxekhgrjkzr.supabase.co/storage/v1/object/public/fotos-animais/"


function Animal() {
  // Obtém o nome do animal da URL usando o hook useParams
  const { animalNome } = useParams();

  // Estados para armazenar os dados do animal, controlar o carregamento e exibir erros
  const [animal, setAnimal] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // UseEffect que busca os dados do animal quando o componente é montado ou o nome do animal muda
  useEffect(() => {
    // Função assíncrona para buscar os dados do animal
    const fetchAnimal = async () => {
      try {
        // Chama a função getAnimalPorNome para obter os dados da API
        const data = await getAnimalPorNome(animalNome);

        // Verifica se a API retornou dados
        if (data.length > 0) {
          // Se sim, define o primeiro elemento do array como o animal
          setAnimal(data[0]);
        } else {
          // Se não, define o estado de erro indicando que o animal não foi encontrado
          setError('Animal não encontrado');
        }
      } catch (err) {
        // Em caso de erro durante a busca, define o estado de erro com a mensagem de erro
        setError(err.message || 'Erro ao buscar animal');
      } finally {
        // Independentemente do resultado, define o estado de carregamento como falso
        setIsLoading(false);
      }
    };

    // Chama a função fetchAnimal para iniciar a busca
    fetchAnimal();
  }, [animalNome]); // Executa novamente se animalNome mudar

  // Renderização condicional com base nos estados
  if (isLoading) return <div>Carregando...</div>; // Exibe "Carregando..." enquanto os dados estão sendo buscados
  if (error) return <div>Erro: {error}</div>; // Exibe a mensagem de erro se houver

  // Renderiza os detalhes do animal quando os dados estiverem disponíveis
  return (
    <div>
      <Card delayAnimacao={0.7}>
        <img src={imagensUrl + animal.nome.toLowerCase() + ".jpeg"} className="card-img-top" alt={animal.nome} />
        
      </Card>
      <Detalhes>
        <h1>Detalhes do Animal</h1>
        <h2>Nome: {animal.nome}</h2>
        <h2>Idade: {animal.idade}</h2>
        <h2>Descrição: {animal.descricao}</h2>
        {/* faca uma verificação se o animal é gato ou não */}
        {animal.especie === "gato" ? animal.fiv ?  <h2>FIV:Positivo</h2> : <h2>FIV:Negativo</h2> : null}
        {animal.especie === "gato" ? animal.felv ?  <h2>FELV:Positivo</h2> : <h2>FELV:Negativo</h2> : null}

        <CadastroUsuario uuid={animal.id}/>

      </Detalhes>
    </div>
  );
}

export default Animal;