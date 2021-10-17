import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 1.6rem;
  position: relative;
`;

export const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  left: 31%;
  top: 13.2rem;
`;

export const Heading = styled.p`
  font-weight: 500;
  font-size: 2.6rem;
  color: #13182b;
  margin-bottom: 1.7rem;

  ${({ theme }) => theme.mobile`
    font-size: 1.6rem;
    
  `}
`;

export const SubHeading = styled.p`
  color: #767c8b;
  font-size: 1.6rem;
  font-weight: 400;
  text-align: center;
  margin-bottom: 4.2rem;

  ${({ theme }) => theme.mobile`
    font-size: 1.2rem;
    
  `}
`;

export const CircleWrapper = styled.div`
  position: absolute;
  z-index: 0;
  right: 17rem;
  top: -3rem;
`;

export const BinocularWrapper = styled.div`
  z-index: 1;
  margin-bottom: 3rem;
`;

export const ArrowWrapper = styled.div`
  position: absolute;
  bottom: -2.5rem;
  left: 1rem;

  ${({ theme }) => theme.mobile`
    left: -11rem;
  `}
`;

export const Button = styled.button`
  height: 6rem;
  width: 16.8rem;
  outline: none;
  border-radius: 3rem;
  border: 0.4rem solid #ffca0f;
  color: #ffca0f;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  background: linear-gradient(to right, #ffca0f 50%, rgba(255, 255, 255, 0) 0%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.3s ease-out;

  &:hover {
    background-position: left bottom;
    color: #13182b;
  }

  ${({ theme }) => theme.mobile`
    height: 5.2rem;
    width: 15.2rem;
    font-size: 1.4rem;
  `}
`;
