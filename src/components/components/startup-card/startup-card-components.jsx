import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 44rem;
  width: 32rem;
  background-color: #ffffff;
  border-radius: 2.2rem;
  padding-bottom: 2.4rem;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0.3rem 0.3rem 0.8rem #00000029;
  margin: 0 auto;

  ${({ isBlurred }) =>
    isBlurred &&
    `-webkit-filter: blur(9px);
  -moz-filter: blur(8px);
  -o-filter: blur(8px);
  -ms-filter: blur(8px);
  filter: blur(9px);
  pointer-events: none;]`}

  ${({ theme }) => theme.mobile`
    width: 34rem;
    height: 53.7rem;
  `}
`;

export const Image = styled.img`
  height: 50%;
  border-radius: 2.2rem;
  object-fit: cover;
  user-select: none;
`;

export const Logo = styled.img`
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50%;
  position: absolute;
  top: 42%;
  left: 1.4rem;
  box-shadow: 0.3rem 0.3rem 0.8rem #00000029;
  object-fit: cover;
  background: #ffffff;
`;

export const ContentHeader = styled.div`
  padding-left: 3rem;
  padding-top: 1rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StartupName = styled.p`
  color: #13182b;
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
`;

export const StartupFundsWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FundsText = styled.p`
  color: #767c8b;
  font-size: 1.4rem;
  font-weight: 300;
  margin-bottom: 0.6rem;
`;

export const FundsAmount = styled.p`
  color: #13182b;
  font-size: 1.6rem;
  font-weight: 600;
`;

export const StartupInfo = styled.p`
  color: #767c8b;
  font-size: 1.6rem;
  font-weight: 400;
  min-height: 5.5rem;
  padding: 0rem 2rem;
  margin-top: 2rem;
  overflow-y: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;

  ${({ theme }) => theme.mobile`
    // height: 5rem
  `}
`;

export const AboutButton = styled.button`
  height: 4rem;
  width: 21rem;
  outline: none;
  border-radius: 3rem;
  border: 0.4rem solid #1d346e;
  color: #13182b;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  background: linear-gradient(to right, #1d346e 50%, rgba(255, 255, 255, 0) 0%);
  background-size: 200% 200%;
  background-position: right bottom;
  transition: all 0.3s ease-out;
  margin-top: 2rem;

  &:hover {
    background-position: left top;
    color: #ffffff;
  }
`;
