import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 52rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.6rem;
  background-color: #f2f1f1;

  ${({ theme }) => theme.mobile`
    height: 67rem;
    flex-direction: column;
  
  `}
`;

export const CardWrapper = styled.div`
  position: relative;

  ${({ theme, mobile }) =>
    mobile &&
    theme.mobile`
    margin-bottom: 1.4rem;
  `}
`;

export const BlueImage = styled.img`
  position: absolute;

  ${({ theme }) => theme.mobile`
    width: 34.2rem;
    height: 6rem;
  `}
`;

export const PinkImage = styled.img`
  position: absolute;
  top: -5rem;
  left: -5rem;
  z-index: 1;

  ${({ theme }) => theme.mobile`
    width: 21.6rem;
    height: 19.8rem;
    left: 0rem;
  `}
`;
