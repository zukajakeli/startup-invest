import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 76.6rem;
  background-color: #ffffff;
  padding: 0rem 10%;
  position: relative;
`;

export const Header = styled.div`
  margin-top: 5rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
  z-index: 1;
  margin-bottom: 10.5rem;
  position: relative;
`;

export const CircleImage = styled.img`
  width: 16.8rem;
  height: 16.8rem;
  position: absolute;
  z-index: -1;
  top: -8rem;
  left: 9rem;
`;

export const Heading = styled.h2`
  color: #13182b;
  font-size: 2.4rem;
  font-weight: 600;
`;

export const TextsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

export const SubHeading = styled.h3`
  color: #767c8b;
  font-size: 1.6rem;
  font-weight: 400;
  max-width: 44rem;
  margin-top: 2.4rem;
`;

export const AllStoriesButton = styled.button`
  height: 5.2rem;
  width: 22.4rem;
  outline: none;
  border-radius: 3rem;
  border: 0.4rem solid #55aa79;
  color: #55aa79;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  background: linear-gradient(to right, #55aa79 50%, rgba(255, 255, 255, 0) 0%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.3s ease-out;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  & svg {
    stroke: #55aa79;
  }

  &:hover {
    background-position: left bottom;
    color: #13182b;
    & svg {
      stroke: #13182b;
    }
  }
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.6rem;
  position: relative;
  z-index: 1;
`;

export const SmallStoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex: 1 35rem;
  max-width: 53.6rem;
`;

export const PinkBackground = styled.img`
  position: absolute;
  bottom: 4rem;
  z-index: 0;
  left: 36.3%;
`;

export const GreenBackground = styled.img`
  position: absolute;
  z-index: -1;
  right: -10%;
  transform: rotate(-84deg);
`;
