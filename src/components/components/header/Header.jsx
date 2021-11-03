import { useMediaQuery } from 'react-responsive';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthDropdownContext } from 'contexts/AuthDropdownContext';
import { MeContext } from 'contexts/MeContext';

import logo from '../../../assets/images/main-logo.png';
import { ReactComponent as UserIcon } from '../../../assets/icons/user-icon.svg';
import burgerMenu from 'assets/icons/burger-menu.svg';
import exitIcon from 'assets/icons/exit-yellow.svg';
import loggedInIcon from 'assets/icons/logged-in.svg';

import * as S from './header-components';
import Authorization from 'components/authorization/Authorization';
import { useState } from 'react';
import Registration from '../registration/Registration';
import ResetPassword from '../reset-password/ResetPassword';
import MuiModal from 'components/modal/MuiModal';

const Header = () => {
  const [isAuthDropdownOpen, setIsAuthDropdownOpen] =
    useContext(AuthDropdownContext);
  const [logoutBoxOpen, setLogoutBoxOpen] = useState(false);

  const AuthDropdownToggler = () => {
    setIsAuthDropdownOpen((prev) => !prev);
    setLogoutBoxOpen(false);
  };

  const history = useHistory();
  const goToMain = () => {
    history.push('/');
  };

  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

  const [isAuthorizationOpen, setIsAuthorizationOpen] = useState(true);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isResetPasswordOpen, setIsResetPasswordOpen] = useState(false);

  const [isSideMenuOpen, setIsSideMenuOpen] = useState(true);
  const openSideMenu = () => {
    setIsSideMenuOpen(false);
  };
  const closeSideMenu = () => {
    setIsSideMenuOpen(true);
  };

  const isMainPage = history.location.pathname === '/';

  const [meInfo, setMeInfo] = useContext(MeContext);
  console.log('meINfo', meInfo);

  return (
    <>
      <S.Wrapper isMainPage={isMainPage}>
        <S.Logo src={logo} onClick={goToMain} />
        {!isMobile ? (
          <S.ButtonsWrapper>
            <Link to="/startups">
              <S.InvestmentsButton>სტარტაპები</S.InvestmentsButton>
            </Link>
            <Link to="/blogs">
              <S.BlogsButton>ბლოგი</S.BlogsButton>
            </Link>
            {!meInfo ? (
              <S.LoginButton onClick={AuthDropdownToggler}>
                <UserIcon />
                შესვლა
              </S.LoginButton>
            ) : (
              <S.LogOutWrapper>
                <S.LoggedInImg
                  src={loggedInIcon}
                  alt="login"
                  onClick={() => {
                    setLogoutBoxOpen((prev) => !prev);
                  }}
                />
                <S.LogOutBox logoutBoxOpen={logoutBoxOpen}>
                  <S.UserMail>{meInfo.email}</S.UserMail>
                  <S.LogOutButton
                    onClick={() => {
                      setMeInfo(null);
                      localStorage.clear();
                    }}
                  >
                    გამოსვლა
                  </S.LogOutButton>
                </S.LogOutBox>
              </S.LogOutWrapper>
            )}
          </S.ButtonsWrapper>
        ) : (
          <S.BurgerMenu onClick={openSideMenu} src={burgerMenu} alt="menu" />
        )}

        {isMobile && (
          <S.SideMenu isSideMenuOpen={isSideMenuOpen} isMainPage={isMainPage}>
            <S.Exit onClick={closeSideMenu} src={exitIcon} alt="exit" />
            <S.ButtonsWrapper>
              <Link to="/startups">
                <S.InvestmentsButton>სტარტაპები</S.InvestmentsButton>
              </Link>
              <Link to="/blogs">
                <S.BlogsButton>ბლოგი</S.BlogsButton>
              </Link>
              <S.LoginButton onClick={AuthDropdownToggler}>
                <UserIcon />
                შესვლა
              </S.LoginButton>
            </S.ButtonsWrapper>
          </S.SideMenu>
        )}
      </S.Wrapper>
      {isAuthDropdownOpen && (
        <MuiModal
          body={
            <S.AuthWrapper>
              {isAuthorizationOpen && (
                <Authorization
                  setIsAuthDropdownOpen={setIsAuthDropdownOpen}
                  setIsAuthorizationOpen={setIsAuthorizationOpen}
                  setIsRegistrationOpen={setIsRegistrationOpen}
                  setIsResetPasswordOpen={setIsResetPasswordOpen}
                />
              )}

              {isRegistrationOpen && (
                <Registration
                  setIsAuthDropdownOpen={setIsAuthDropdownOpen}
                  setIsAuthorizationOpen={setIsAuthorizationOpen}
                  setIsRegistrationOpen={setIsRegistrationOpen}
                  setIsResetPasswordOpen={setIsResetPasswordOpen}
                />
              )}
              {isResetPasswordOpen && (
                <ResetPassword
                  setIsAuthDropdownOpen={setIsAuthDropdownOpen}
                  setIsAuthorizationOpen={setIsAuthorizationOpen}
                  setIsResetPasswordOpen={setIsResetPasswordOpen}
                  setIsRegistrationOpen={setIsRegistrationOpen}
                />
              )}
            </S.AuthWrapper>
          }
        />
      )}
    </>
  );
};

export default Header;
