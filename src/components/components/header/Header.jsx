import { Link } from 'react-router-dom';

import logo from '../../../assets/images/main-logo.png';
import { ReactComponent as UserIcon } from '../../../assets/icons/user-icon.svg';

import * as S from './header-components';
import Authorization from 'components/authorization/Authorization';

const Header = () => {
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
          <S.LoginButton>
            <UserIcon />
            შესვლა
          </S.LoginButton>
        </S.ButtonsWrapper>
        <S.AuthWrapper>
          <Authorization />
        </S.AuthWrapper>
      </S.Wrapper>
    </>
  );
};

export default Header;
