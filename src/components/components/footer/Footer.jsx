import { useLocation } from 'react-router';

import logo from '../../../assets/images/main-logo-white.svg';
import { ReactComponent as LinkedinIcon } from '../../../assets/icons/linkedin-icon.svg';
import { ReactComponent as InstagramIcon } from '../../../assets/icons/instagram-icon.svg';
import { ReactComponent as FacebookIcon } from '../../../assets/icons/facebook-icon.svg';
import { ReactComponent as TiktokIcon } from '../../../assets/icons/tiktok-icon.svg';

import * as S from './footer-components';

const Footer = () => {
  const location = useLocation();
  const isMainPage = location.pathname === '/';
  console.log(isMainPage);

  return (
    <S.Wrapper>
      <S.Logo src={logo} alt="logo" />
      <S.Pages>
        <S.Title>გვერდები</S.Title>
        <S.SinglePage>
          საინვესტიციო <br /> შესაძლებლობები
        </S.SinglePage>
        <S.SinglePage>ბლოგი</S.SinglePage>
        <S.SinglePage>ჩვენს შესახებ</S.SinglePage>
        <S.SinglePage>კონტაქტი</S.SinglePage>
        <S.SinglePage>FAQ</S.SinglePage>
      </S.Pages>
      <S.SocialWrapper>
        <S.Title>გამოგვყევი</S.Title>
        <S.SocialButtonsWrapper>
          <InstagramIcon />
          <FacebookIcon />
          <LinkedinIcon />
          <TiktokIcon />
        </S.SocialButtonsWrapper>
      </S.SocialWrapper>
      {isMainPage && (
        <S.Subscription>
          <S.Title>გამოიწერე სიახლეები</S.Title>
          <S.InputWrapper>
            <S.Input type="text" placeholder="ელ.ფოსტა"></S.Input>
            <S.Button>გაგზავნა</S.Button>
          </S.InputWrapper>
        </S.Subscription>
      )}
    </S.Wrapper>
  );
};

export default Footer;
