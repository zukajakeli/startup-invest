import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import SubscribeInput from '../../common-components/subscribe-input/SubscribeInput';
import logo from '../../../assets/images/main-logo-white.svg';
import { ReactComponent as LinkedinIcon } from '../../../assets/icons/linkedin-icon.svg';
import { ReactComponent as InstagramIcon } from '../../../assets/icons/instagram-icon.svg';
import { ReactComponent as FacebookIcon } from '../../../assets/icons/facebook-icon.svg';
import { ReactComponent as TiktokIcon } from '../../../assets/icons/tiktok-icon.svg';

import * as S from './footer-components';

const Footer = () => {
  const location = useLocation();
  const isMainPage = location.pathname === '/';

  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

  const history = useHistory();
  const goToMain = () => {
    history.push('/');
  };

  return (
    <S.Wrapper>
      {!isMobile && <S.Logo src={logo} alt="logo" onClick={goToMain} />}

      <S.Pages>
        <S.Title>გვერდები</S.Title>
        <Link to="/startups">
          <S.SinglePage>სტარტაპები</S.SinglePage>
        </Link>
        <Link to="/blogs">
          <S.SinglePage>ბლოგი</S.SinglePage>{' '}
        </Link>
        <Link to="/about-us">
          <S.SinglePage>ჩვენს შესახებ</S.SinglePage>
        </Link>
        <Link to="/contact-us">
          <S.SinglePage>კონტაქტი</S.SinglePage>
        </Link>
        <Link to="faq">
          <S.SinglePage>FAQ</S.SinglePage>
        </Link>
      </S.Pages>

      <S.SocialWrapper>
        <S.Title>გამოგვყევი</S.Title>
        <S.SocialButtonsWrapper>
          <InstagramIcon />
          <FacebookIcon />
          <LinkedinIcon />
          {!isMobile && <TiktokIcon />}
        </S.SocialButtonsWrapper>
      </S.SocialWrapper>

      {isMainPage && !isMobile && (
        <S.Subscription>
          <S.Title>გამოიწერე სიახლეები</S.Title>
          <SubscribeInput color="#ffca0f" />
        </S.Subscription>
      )}
    </S.Wrapper>
  );
};

export default Footer;
