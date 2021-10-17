import { useMediaQuery } from 'react-responsive';
import { Link, useHistory } from 'react-router-dom';

import logo from '../../../assets/images/main-logo.png';
import { ReactComponent as UserIcon } from '../../../assets/icons/user-icon.svg';

import * as S from './header-components';
import Authorization from 'components/authorization/Authorization';
import { useState } from 'react';
import Registration from '../registration/Registration';
import ResetPassword from '../reset-password/ResetPassword';

const Header = () => {
  const [isAuthDropdownOpen, setIsAuthDropdownOpen] = useState(false);
  const AuthDropdownToggler = () => {
    setIsAuthDropdownOpen((prev) => !prev);
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

  return (
    <>
      <S.Wrapper>
        <S.Logo src={logo} onClick={goToMain} />
        {!isMobile ? (
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
        ) : (
          <S.BurgerMenu
            onClick={openSideMenu}
            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/burger-1855836-1574002.png"
            alt="menu"
          />
        )}

        {isMobile && (
          <S.SideMenu isSideMenuOpen={isSideMenuOpen}>
            <S.Exit
              onClick={closeSideMenu}
              src="https://www.nicepng.com/png/full/291-2912053_big-image-clip-art-railroad-sign.png"
              alt="exit"
            />
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

        {isAuthDropdownOpen && (
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
        )}
      </S.Wrapper>
    </>
  );
};

export default Header;
