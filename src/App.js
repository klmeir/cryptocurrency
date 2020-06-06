import React from 'react';
import styled from '@emotion/styled';
import img from './cryptomonedas.png';

const Container = styled.div`
  margin: 0 auto;
  max-width: 900px;
  @media (min-width:992px) {
    column-gap: 2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Image = styled.img`
  margin-top: 5rem;
  max-width: 100%;
`;

const Heading = styled.h1`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;
  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

function App() {
  return (
    <Container>
      <div>
        <Image 
          src={img}
          alt="image crypto"
        />
      </div>
      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>
      </div>
    </Container>    
  );
}

export default App;
