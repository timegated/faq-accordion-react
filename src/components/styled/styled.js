import styled from 'styled-components';

// App
export const AccordionContainer = styled.div`
display: flex;
align-items: center;
box-shadow: 1px 1px 5px #000;
@media (min-width: 768px) {
  background: #FFF;
  width: 75rem;
  height: 65vh;
  border-radius: 30px;
  margin: 5rem auto;
}
`;
export const FaqContainer = styled.div`
  flex: 1 0 50%;
`;
export const FaqTitle = styled.h1`
  color: #000;
  padding: 1.5rem 1.5rem 0 1.5rem;
  font-family: 'Kumbh Sans', sans-serif;
  font-weight: var(--font-weight-2);
`;

export const ImgContainer = styled.div`
  flex: 1 0  50%;
`;

// Slider
export const ListParent = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;



export const ListChild = styled.li`
  padding: 0.75rem;
  width: 65%;
  border-bottom: 1px solid var(--divider-color);
`;



export const ListLink = styled.a`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  color: var(--text-color-1);
  cursor: pointer;
  &:hover {
    color: var(--soft-red);
  }
  
`;

export const ListIcon = styled.img`
  width: 15px;
  height: 10px;
  
`

export const ListIconActive = styled.img`
  width: 15px;
  height: 10px;
  transform: rotate(180deg);
`;

export const CopyText = styled.p`
  max-width: 32em;
`;