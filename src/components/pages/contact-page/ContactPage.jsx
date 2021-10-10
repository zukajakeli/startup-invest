import Footer from 'components/components/footer/Footer';
import Header from 'components/components/header/Header';

import backgroundImage from 'assets/images/contact-page-background.svg';

import * as S from './contact-page-components';

const ContactPage = () => {
  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <Header />
      </S.HeaderWrapper>

      <S.Body>
        <S.FormWrapper>form</S.FormWrapper>
        <S.RightWrapper>
          <S.BackgroundImage src={backgroundImage} alt="background" />
        </S.RightWrapper>
      </S.Body>
      <Footer />
    </S.Wrapper>
  );
};

export default ContactPage;
