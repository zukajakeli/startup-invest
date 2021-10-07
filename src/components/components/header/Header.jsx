import logo from '../../../assets/images/main-logo.png';
import { ReactComponent as UserIcon } from '../../../assets/icons/user-icon.svg';

import * as S from './header-components';

const Header = () => {
  return (
    <S.Wrapper>
      <S.Logo src={logo} />
      <S.ButtonsWrapper>
        <S.InvestmentsButton>საინვესტიციო შესაძლებლობები</S.InvestmentsButton>
        <S.BlogsButton>ბლოგი</S.BlogsButton>
        <S.LoginButton>
          <UserIcon />
          შესვლა
        </S.LoginButton>
      </S.ButtonsWrapper>
    </S.Wrapper>
  );
};

export default Header;
