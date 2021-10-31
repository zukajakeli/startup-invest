import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0.3rem 1rem 8rem #0000001f;
  border-radius: 9rem;
  height: 24.6rem;
  width: 44.4rem;
  padding: 4rem 4.4rem 2.6rem 3.5rem;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  position: relative;

  ${({ theme }) => theme.mobile`
    width: 34.2rem;
    height: 22rem;
    padding: 2.4rem 2.1rem 2.4rem 3rem;
  `}
`;

export const Title = styled.h4`
  font-size: 2.2rem;
  font-weight: 600;
  color: ${({ forInvestors }) => (forInvestors ? '#55AA79' : '#FE7760')};

  ${({ theme }) => theme.mobile`
    font-size: 1.6rem
  `}
`;

export const Info = styled.p`
  color: #767c8b;
  font-size: 1.6rem;
  font-weight: 400;
  text-align: center;
  line-height: 2.2rem;

  ${({ theme }) => theme.mobile`
    font-size: 1.4rem;
    max-width: 27rem;
  `}
`;

export const Button = styled.button`
  height: 4.6rem;
  width: 23rem;
  outline: none;
  border-radius: 3rem;
  border: 0.4rem solid #1d346e;
  color: #13182b;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  background: linear-gradient(to right, #1d346e 50%, rgba(255, 255, 255, 0) 0%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.3s ease-out;

  &:hover {
    background-position: left top;
    color: #ffffff;
  }

  ${({ theme }) => theme.mobile`
    width: 20.4rem;
  `}
`;
