import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import SubscribeInput from '../../common-components/subscribe-input/SubscribeInput';
import logo from '../../../assets/images/main-logo-white.svg';
import { ReactComponent as LinkedinIcon } from '../../../assets/icons/linkedin-icon.svg';
import { ReactComponent as InstagramIcon } from '../../../assets/icons/instagram-icon.svg';
import { ReactComponent as FacebookIcon } from '../../../assets/icons/facebook-icon.svg';

import * as S from './footer-components';
import { useState } from 'react';
import { useEffect } from 'react';
import { getAllSocials } from 'config/API';

const Footer = () => {
  const location = useLocation();
  const isMainPage = location.pathname === '/';

  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

  const history = useHistory();
  const goToMain = () => {
    history.push('/');
  };

  const [socialLinks, setSocialLinks] = useState({});
  useEffect(() => {
    getAllSocials().then((res) => {
      console.log(res.data.social);
      setSocialLinks(res.data.social);
    });
  }, []);

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
      {socialLinks && (
        <S.SocialWrapper>
          <S.Title>გამოგვყევი</S.Title>
          <S.SocialButtonsWrapper>
            <a href={`${socialLinks.igLink}`} target="_blank">
              <InstagramIcon />
            </a>
            <a href={`${socialLinks.fbLink}`} target="_blank">
              <FacebookIcon />
            </a>
            <a href={`${socialLinks.linkedinLink}`} target="blank">
              <LinkedinIcon />
            </a>
          </S.SocialButtonsWrapper>
        </S.SocialWrapper>
      )}

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
