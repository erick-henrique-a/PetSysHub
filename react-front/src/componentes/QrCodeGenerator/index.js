import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
`;

const Input = styled.input`
  width: 50%;
  padding: 1em;
  font-size: 1.5em;
  border: none;
  border-radius: 0.25em;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

const QrCodeGenerator = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <Container>
      <Input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Insira o PIX para gerar o código de barras"
      />
    </Container>
  );
};



export default QrCodeGenerator;