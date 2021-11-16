import Authorization from 'components/authorization/Authorization';
import Footer from 'components/components/footer/Footer';
import Header from 'components/components/header/Header';
import Registration from 'components/components/registration/Registration';
import ResetPassword from 'components/components/reset-password/ResetPassword';
import { useParams } from 'react-router';

import * as S from './mobile-auth-components';

const MobileAuth = () => {
  const { authType } = useParams();

  const getAuthPage = () => {
    switch (authType) {
      case 'login':
        return <Authorization />;

      case 'register':
        return <Registration />;
      case 'resetpassword':
        return <ResetPassword />;
      default:
        return null;
    }
  };

  return (
    <S.Wrapper>
      yeyee
      <S.HeaderWrapper>
        <Header />
      </S.HeaderWrapper>
      <S.Body>{getAuthPage()}</S.Body>
      <Footer />
    </S.Wrapper>
  );
};

export default MobileAuth;
