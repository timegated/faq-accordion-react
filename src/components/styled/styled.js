import styled from 'styled-components';

// App
export const AccordionContainer = styled.div`
display: flex;
align-items: center;
@media (min-width: 768px) {
  background: #FFF;
  width: 90rem;
  border-radius: 30px;
  margin: 5rem auto;
}
`;
export const FaqContainer = styled.div`
  flex: 1;
`;
export const FaqTitle = styled.h1`
  color: #000;
  padding: 1.5rem 1.5rem 0 1.5rem;
  font-family: 'Kumbh Sans', sans-serif;
  font-weight: var(--font-weight-2);
`;

export const ImgContainer = styled.div`
  border-radius: 30px 0 0 30px;
  flex: 1;
`;

// Slider
export const ListParent = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;



export const ListChild = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  padding: 1.5rem;
  width: 75%;
  border-bottom: 1px solid var(--divider-color);
`;

export const ListIcon = styled.span`
`;

export const ListButton = styled.a`
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
`;