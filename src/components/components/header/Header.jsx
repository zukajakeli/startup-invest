import { Link } from 'react-router-dom';

import logo from '../../../assets/images/main-logo.png';
import { ReactComponent as UserIcon } from '../../../assets/icons/user-icon.svg';

import * as S from './header-components';
import Authorization from 'components/authorization/Authorization';
import { useState } from 'react';

const Header = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const AuthDropdownToggler = () => {
    setIsAuthOpen((prev) => !prev);
  };
  return (
    <>
      <S.Wrapper>
        <S.Logo src={logo} />
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
        {isAuthOpen && (
          <S.AuthWrapper>
            <Authorization setIsAuthOpen={setIsAuthOpen} />
          </S.AuthWrapper>
        )}
      </S.Wrapper>
    </>
  );
};

export default Header;
