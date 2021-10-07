import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 91.4rem;
  display: flex;
  flex-direction: column;
  padding: 0rem 10%;
  box-sizing: border-box;
  position: relative;
  background-color: #ffffff;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  left: 30%;
  top: 10rem;
  z-index: 0;
`;

export const Header = styled.div`
  margin-top: 5rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
  z-index: 1;
  margin-bottom: 5.5rem;
`;

export const Body = styled.div`
  position: relative;
  z-index: 1;
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
`;

export const SubHeading = styled.h3`
  color: #767c8b;
  font-size: 1.6rem;
  font-weight: 400;
  max-width: 44rem;
  margin-top: 2.4rem;
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
  }
`;

export const ButtonImage = styled.img``;

export const CardsWrapper = styled.div``;
