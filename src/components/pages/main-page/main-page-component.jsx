import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const HeaderWrapper = styled.div`
  display: none;
  position: fixed;
  z-index: 10;
  padding: 0rem 8%;
  width: 100%;

  ${({ theme }) => theme.mobile`
    display: block;
  `}
`;
