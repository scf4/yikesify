import styled from 'styled-components';

export const Layout = styled.div`
  padding: 1.5rem;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;
  & > * + * {
    margin-top: 2rem;
  }
`;