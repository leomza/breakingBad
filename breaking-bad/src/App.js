import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled'
import Frase from './components/Frase';

const Contenedor = styled.div`
display: flex;
align-items: center;
padding-top: 5rem;
flex-direction: column;
`

const Boton = styled.button`
background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
background-size: 300px;
font-family: Arial, Helvetica, sans-serif;
color: #fff;
margin-top: 3rem;
padding: 1rem 3rem;
font-size: 2rem;
border: 2px solid black;
transition: background-size .8s ease;

&:hover{
  cursor: pointer;
  background-size: 400;
}
`


function App() {

  // state de frases
  const [frase, guardarFrase] = useState({});

  const consultarAPI = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json()
    guardarFrase(frase[0]);
  }

  // UseEffect es como el Ready o el OnLoad, es decir, cuando carga el componente se ejecuta autimaticamente la funcion que tiene dentro
  //Cargar una frase
  useEffect(() => {
    consultarAPI()
  }, []);

  return (
    <Contenedor>
      <Frase frase={frase}/>
      {/* La funcion que llama onClick si la llego a escribir onClick={consultarAPI()} con esos parentesis, llamaré a la funcion sin que el usuario haga nada, ningun click ni nada */}
      <Boton onClick={consultarAPI}>Obtener frase</Boton>
    </Contenedor>
  );
}

export default App;
