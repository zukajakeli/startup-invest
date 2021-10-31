import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0rem 10%;
  box-sizing: border-box;
  position: relative;
  background-color: #ffffff;

  ${({ theme }) => theme.mobile`
    height: 185.5rem;
    padding: 0rem ;
  `}
`;

export const BackgroundImage = styled.img`
  position: absolute;
  left: 30%;
  top: 10rem;
  z-index: 0;

  ${({ theme }) => theme.mobile`
    display: none;
    
  `}
`;

export const Header = styled.div`
  margin-top: 5rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
  z-index: 1;
  margin-bottom: 5.5rem;

  ${({ theme }) => theme.mobile`
      margin-bottom: 2.4rem;
      margin-top: 1.4rem;
      padding-left: 8%;
  `}
`;

export const Body = styled.div`
  position: relative;
  z-index: 1;

  ${({ theme }) => theme.mobile`
    & > * {
    margin-bottom: 1.4rem;
  }
  `}
`;

export const TextsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.h2`
  color: #13182b;
  font-size: 2.4rem;
  font-weight: 600;
  max-width: 40.3rem;
  white-space: nowrap;

  ${({ theme }) => theme.mobile`
   font-size: 1.8rem;
   width: 23.1rem;
  
   `}
`;

export const SubHeading = styled.h3`
  color: #767c8b;
  font-size: 1.6rem;
  font-weight: 400;
  max-width: 37rem;
  margin-top: 2.4rem;
  line-height: 2.2rem;

  ${({ theme }) => theme.mobile`
   font-size: 1.4rem;
   margin-top: 1.8rem;
   `}
`;

export const AllCompanyButton = styled.button`
  height: 5.2rem;
  width: 22.4rem;
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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  &:hover {
    background-position: left bottom;
    color: #13182b;
    svg {
      stroke: #13182b;
    }
  }

  & svg {
    stroke: #ffca0f;

    ${({ theme }) => theme.mobile`
      margin-left: 0.8rem;
    `}
  }

  ${({ theme }) => theme.mobile`
      width: 20rem;
      font-size: 1.4rem;
      align-self: flex-end;
      margin-top: 1rem;
      margin-right: 7%;
      
  `}
`;

export const Flex = styled.div`
  display: flex;
  gap: 1.6rem;
`;

export const ButtonImage = styled.img``;

export const CardsWrapper = styled.div``;

export const OvalMobile = styled.img`
  width: 21.3rem;
  height: 11rem;
  position: absolute;
  bottom: 0rem;
  display: none;

  ${({ theme }) => theme.mobile`
    display: block;
  `}
`;
