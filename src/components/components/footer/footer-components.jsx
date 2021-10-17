import styled from 'styled-components';

export const Wrapper = styled.footer`
  height: 34.8rem;
  width: 100%;
  background-color: #13182b;
  display: flex;
  justify-content: space-evenly;
  padding: 10rem 10%;
  gap: 5rem;

  ${({ theme }) => theme.mobile`
    // height: 27.2rem;
    padding: 7rem 3.6rem;
    justify-content: space-between;
  `}
`;

export const Logo = styled.img`
  width: 16.6rem;
  height: 3.4rem;

  ${({ theme }) => theme.mobile`
    display: none;
  `}
`;

export const Pages = styled.div`
  display: flex;
  flex-direction: column;
  color: #fdb8b7;
  user-select: none;
`;

export const Title = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 2.6rem;

  ${({ theme }) => theme.mobile`
    font-size: 1.4rem;
  `}
`;

export const PagesList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SinglePage = styled.h3`
  font-size: 1.6rem;
  font-weight: 400;
  margin-bottom: 1.4rem;
  cursor: pointer;

  ${({ theme }) => theme.mobile`
    font-size: 1.4rem;
  `}
`;

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #9ab7ff;
`;

export const SocialButtonsWrapper = styled.div`
  display: flex;
  gap: 1.6rem;

  svg {
    cursor: pointer;
  }

  ${({ theme }) => theme.mobile`
    & > * {
      margin-right: 0.9rem;
    }
  `}
`;

export const Subscription = styled.div`
  color: #ffca0f;
  margin-left: -2rem;

  ${({ theme }) => theme.mobile`
    display: none;
  `}
`;
