import React, { useState } from 'react'
import styled from 'styled-components';

const FaqContainer = styled.div`
 background: var(--bg-gradient);
@media (min-width: 768px) {
  width: 90vw;
  height: 90vh;
  margin: 10rem auto;
}
`;

const AccordionContainer = styled.div`
display: grid;
grid-template-columns: 1fr;
@media (min-width: 768px) {
  grid-template-columns: 1fr 1fr;
  position: relative;
  top: 10%;
  bottom: 0;
  background: #FFF;
  width: 75%;
  height: 80%;
  border-radius: 30px;
  margin: 0 auto;
}
`;

const FaqTitle = styled.h1`
  color: #000;
  padding: 1.5em;
  font-family: 'Kumbh Sans', sans-serif;
  font-weight: var(--font-weight-2);
`;

const ImgContainer = styled.div`
  background: orange;
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
    <FaqContainer>
      <AccordionContainer>
      <ImgContainer></ImgContainer>
        <FaqTitle>FAQ</FaqTitle>
          {/* Handle accordion state */}
          </AccordionContainer>
    </FaqContainer>
  )
}

export default App;
