import styled from 'styled-components';

export const FirstPage = styled.a`
    height: 100vh;
    width: 50vw;
    background-color: rosybrown;
    filter: grayscale(80%);
    :hover{
      filter: contrast(1);
    }
`;

export const SecondPage = styled.a`
    height: 100vh;
    width: 50vw;
    background-color: teal;
    filter: grayscale(80%);
    :hover{
    filter: contrast(1);
    }
`;

export const Pages = styled.div`
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

export const HomepageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;