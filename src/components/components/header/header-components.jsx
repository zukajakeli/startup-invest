import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 9.8rem;
  box-sizing: border-box;
  position: relative;
  padding-right: 10%;

  ${({ theme }) => theme.mobile`
    height: 8.7rem;
  `}
`;

export const Logo = styled.img`
  width: 16.6rem;
  height: 3.4rem;
  cursor: pointer;
`;

export const ButtonsWrapper = styled.div`
  gap: 1.6rem;
  display: flex;

  ${({ theme }) => theme.mobile`
    flex-direction: column;
    z-index: 12;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-end;

    & > * {
      margin-bottom: 2rem;
    }
  `}
`;

export const BlogsButton = styled.button`
  width: 11.2rem;
  height: 5.2rem;
  outline: none;
  border-radius: 5.2rem;
  border: 0.4rem solid #fe7760;
  color: #fe7760;
  background: linear-gradient(to right, #fe7760 50%, rgba(255, 255, 255, 0) 0%);
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.4s ease-out;

  &:hover {
    background-position: left top;
    color: #13182b;
  }

  ${({ theme }) => theme.mobile`
    width: 10.6rem;
  `}
`;

export const InvestmentsButton = styled.button`
  height: 5.2rem;
  outline: none;
  border-radius: 5.2rem;
  border: 0.4rem solid #55aa79;
  color: #55aa79;
  background: linear-gradient(to right, #55aa79 50%, rgba(255, 255, 255, 0) 0%);
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.4s ease-out;
  padding: 0rem 2.5rem;

  &:hover {
    background-position: left top;
    color: #13182b;
  }

  ${({ theme }) => theme.mobile`
    width: 15.1rem;
  `}
`;

export const LoginButton = styled.button`
  width: 15.4rem;
  height: 5.2rem;
  outline: none;
  border-radius: 5.2rem;
  border: 0.4rem solid #ffca10;
  color: #ffca10;

  background: linear-gradient(to right, #ffca10 50%, #13182b 50%);
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.4s ease-out;
  background-color: #13182b;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  & svg {
    fill: #ffca10;
    stroke: #ffca10;
  }

  &:hover {
    background-position: left top;
    color: #13182b;
    svg {
      fill: #13182b;
      stroke: #13182b;
    }
  }

  ${({ theme }) => theme.mobile`
    width: 13.7rem;
  `}
`;

export const ButtonImage = styled.img``;

export const AuthWrapper = styled.div`
  /* position: absolute;
  z-index: 11;
  right: 0rem;
  top: 10rem; */
`;

export const BurgerMenu = styled.img`
  width: 5rem;
  height: 4rem;
  cursor: pointer;
`;

export const SideMenu = styled.div`
  width: 21.2rem;
  height: 200vh;
  position: absolute;
  right: -4rem;
  z-index: 1;
  background-color: ${({ isMainPage }) => (isMainPage ? '#13182b' : '#FFFFFF')};
  display: flex;
  padding-right: 3.6rem;
  top: 0rem;
  flex-direction: column;
  align-items: flex-end;
  transition: all 0.2s ease-in-out;

  ${({ isSideMenuOpen }) =>
    isSideMenuOpen && 'transform: translate(50%, -100%);'}
`;

export const Exit = styled.img`
  width: 5rem;
  height: 4rem;
  padding: 0.7rem 1rem;
  margin-bottom: 8.4rem;
  margin-top: 3.6rem;
  cursor: pointer;
  border-radius: 5.2rem;
  border: 0.3rem solid #ffca10;
`;

export const LoggedInImg = styled.img`
  cursor: pointer;
`;

export const LogOutWrapper = styled.div``;

export const LogOutBox = styled.div`
  width: 28rem;
  height: 11rem;
  background-color: #ffca0f;
  border-radius: 0.8rem;
  margin-top: 0.5rem;
  position: absolute;
  display: ${({ logoutBoxOpen }) => (logoutBoxOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LogOutButton = styled.button`
  height: 4.5rem;
  outline: none;
  border-radius: 5.2rem;
  border: 0.4rem solid #13182b;
  color: #13182b;
  background: linear-gradient(to right, #13182b 50%, rgba(255, 255, 255, 0) 0%);
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.4s ease-out;
  padding: 0rem 2.5rem;

  ${({ theme }) => theme.mobile`
    width: 15.1rem;
  `}
`;

export const UserMail = styled.p`
  font-size: 1.6rem;
  color: #13182b;
  font-weight: 600;
  margin-bottom: 1rem;
`;
