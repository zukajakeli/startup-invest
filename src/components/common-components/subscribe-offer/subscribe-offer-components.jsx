import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 19.6rem;
  position: relative;
  max-width: 90.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  gap: 1.5rem;
  padding: 5.5rem 0rem;
`;

export const CircleWrapper = styled.div`
  position: absolute;
  z-index: 0;
  top: 9rem;
  left: 15rem;

  & svg {
    fill: ${({ cicrcleColor }) => cicrcleColor};
  }
`;

export const ArrowWrapper = styled.div`
  position: absolute;
  top: -2rem;
  z-index: 0;
  left: 40rem;
  & svg {
    fill: ${({ arrowColor }) => arrowColor};
  }
`;

export const SubscribeText = styled.p`
  font-size: 2rem;
  color: #13182b;
  max-width: 44.4rem;
  font-weight: 400;
  z-index: 1;
`;
