import React from 'react'
import Slide from './components/Slide';
import styled from 'styled-components';
import womanDesktop from './images/illustration-woman-online-desktop.svg';


const AccordionContainer = styled.div`
display: flex;
align-items: center;
@media (min-width: 768px) {
  background: #FFF;
  width: 90rem;
  border-radius: 30px;
  margin: 5rem auto;
}
`;
const FaqContainer = styled.div`
  flex: 1;
`;
const FaqTitle = styled.h1`
  color: #000;
  padding: 1.5rem 1.5rem 0 1.5rem;
  font-family: 'Kumbh Sans', sans-serif;
  font-weight: var(--font-weight-2);
`;

const ImgContainer = styled.div`
  border-radius: 30px 0 0 30px;
  flex: 1;
`;

const App = () => {
  return (
      <AccordionContainer>
        <ImgContainer>
        <img src={womanDesktop} alt="Woman using a desktop"/>
      </ImgContainer>
      <FaqContainer>
        <FaqTitle>FAQ</FaqTitle>
        <Slide />
      </FaqContainer>
    </AccordionContainer>
  
  )
}

export default App;
