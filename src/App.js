import React, { useState } from 'react'
import Slide from './components/Slide';
import styled from 'styled-components';
import womanDesktop from './images/illustration-woman-online-desktop.svg';


const AccordionContainer = styled.div`
display: grid;
grid-template-columns: 1fr;
@media (min-width: 768px) {
  grid-template-columns: 1fr 1fr;
  background: #FFF;
  width: 90rem;
  height: 80vh;
  border-radius: 30px;
  margin: 10rem auto;
}
`;
const FaqTitle = styled.h1`
  color: #000;
  padding: 1.5em;
  font-family: 'Kumbh Sans', sans-serif;
  font-weight: var(--font-weight-2);
`;

const ImgContainer = styled.div`
  border-radius: 30px 0 0 30px;
  height: 100%;
  width: 100%;
`;

const App = () => {
  const [clicked, setClicked] = useState(false);
  
  const handleClick = () => {
    if (clicked === false) {
      setClicked(true)
    } else {
      setClicked(false);
    }
  };

  return (
      <AccordionContainer>
        <ImgContainer>
        <img src={womanDesktop} alt="Woman using a desktop"/>
      </ImgContainer>
      <div>
        <FaqTitle>FAQ</FaqTitle>
        <Slide />
      </div>
    </AccordionContainer>
  
  )
}

export default App;
