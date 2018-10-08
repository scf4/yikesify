import styled from 'react-emotion';
import styledMap from 'styled-map';

export default styled.textarea<{ lomg?: boolean }>`
  border: 3px solid black;
  padding: .5rem;
  background: white;
  font-size: 1rem;
  width: 30rem;
  max-height: 30rem;
  max-width: 80vw;
  min-height: ${styledMap`
    lomg: 12rem;
    default: 7rem;
  `}
`;
