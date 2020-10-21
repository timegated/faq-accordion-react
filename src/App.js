import React, { useState } from 'react'
import styled from 'styled-components';

const FaqContainer = styled.div`
@media (min-width: 768px) {
  background-color: rebeccapurple;
  width: 90rem;
  height: 90vh;
  margin: 10rem auto;
}
`;

const Accordion = styled.div`
@media (min-width: 768px) {
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
    <div>
      <FaqContainer>
        <Accordion>
          {/* Handle accordion state */}
          </Accordion>
      </FaqContainer>
    </div>
  )
}

export default App;
