import React, { useState } from 'react';
import styled from 'styled-components';

const BarraDePesquisa = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
`;

function Pesquisa({ gatos }) {
  const [termoDePesquisa, setTermoDePesquisa] = useState('');
  const [resultadosDaPesquisa, setResultadosDaPesquisa] = useState([]);

  const handleSearch = (event) => {
    const termo = event.target.value;
    setTermoDePesquisa(termo);
    const results = gatos.filter(animal =>
      animal.nome.toLowerCase().includes(termo.toLowerCase())
    );
    setResultadosDaPesquisa(results);
  };

  return (
    <div>
      <BarraDePesquisa
        type="text"
        placeholder="Pesquisar um gato..."
        value={termoDePesquisa}
        onChange={handleSearch}
      />
      <ul>
        {resultadosDaPesquisa.map(animal => (
          <li key={animal.id}>{animal.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default Pesquisa;
