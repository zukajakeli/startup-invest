import Authorization from 'components/authorization/Authorization';
import Footer from 'components/components/footer/Footer';
import Header from 'components/components/header/Header';
import Registration from 'components/components/registration/Registration';
import ResetPassword from 'components/components/reset-password/ResetPassword';
import { useParams } from 'react-router';

import * as S from './components';
import NewPassword from './NewPassword';

const ResetPasswordPage = () => {
  return (
    <>
      <S.Wrapper>
        <S.HeaderWrapper>
          <Header />
        </S.HeaderWrapper>
        <S.Body>{<NewPassword />}</S.Body>
        <Footer />
      </S.Wrapper>{' '}
    </>
  );
};

export default ResetPasswordPage;
