import styled from 'styled-components';

export const Wrapper = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

export const HeaderWrapper = styled.div`
  position: fixed;
  height: 9.8rem;
  background: #fff;
  width: 100%;
  padding: 0rem 10%;
  z-index: 10;
  max-width: 136.6rem;

  ${({ theme }) => theme.mobile`
    background-color: #F2F1F1;
    padding-left: 8%;
  `}
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 9.8rem;
`;
