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

  const [isAuthorizationOpen, setIsAuthorizationOpen] = useState(true);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isResetPasswordOpen, setIsResetPasswordOpen] = useState(false);
  return (
    <>
      <S.Wrapper>
        <S.Logo src={logo} onClick={goToMain} />
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
