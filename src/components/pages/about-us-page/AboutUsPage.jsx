import SubscribeOffer from 'components/common-components/subscribe-offer/SubscribeOffer';
import Footer from 'components/components/footer/Footer';
import Header from 'components/components/header/Header';

import { ReactComponent as LinkedinIcon } from '../../../assets/icons/linkedin-icon.svg';
import { ReactComponent as InstagramIcon } from '../../../assets/icons/instagram-icon.svg';
import { ReactComponent as FacebookIcon } from '../../../assets/icons/facebook-icon.svg';
import { ReactComponent as TiktokIcon } from '../../../assets/icons/tiktok-icon.svg';

import * as S from './about-us-page-components';

const AboutUsPage = () => {
  return (
    <>
      <S.HeaderWrapper>
        <Header />
      </S.HeaderWrapper>
      <S.Wrapper>
        <S.Body>
          <S.TextsWrapper>
            <S.Heading>ჩვენ შესახებ</S.Heading>
            <S.Text>
              ინოვაციებისა და მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე
              მოყვა, ერთ ღონისძიებას მეორე, ერთ ბიზნეს აქსელერატორს მეორე…
              ინოვაციებისა და მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე
              მოყვა, ერთ ღონისძიებას მეორე, აქსელერატორს მეორეინოვაციებისა და
              მეწარმეობის მიმართულებით{' '}
            </S.Text>
            <S.SubHeading>
              ინოვაციებისა და მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე
            </S.SubHeading>
            <S.Text>
              ინოვაციებისა და მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე
              მოყვა, ერთ ღონისძიებას მეორე, ერთ ბიზნეს აქსელერატორს მეორე…
              ინოვაციებისა და მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე
              მოყვა, ერთ ღონისძიებას მეორე, აქსელერატორს მეორეინოვაციებისა და
              მეწარმეობის მიმართულებით ინოვაციებისა და მეწარმეობის მიმართულებით,
              ერთ ორგანიზაციას მეორე მოყვა, ერთ ღონისძიებას მეორე, ერთ ბიზნეს
              <br />
              <br />
              ინოვაციებისა და მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე
              მოყვა, ერთ ღონისძიებას მეორე, ერთ ბიზნეს აქსელერატორს მეორე…
              ინოვაციებისა და მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე
              მოყვა, ერთ ღონისძიებას მეორე, აქსელერატორს მეორეინოვაციებისა და
              მეწარმეობის მიმართულებით{' '}
            </S.Text>
          </S.TextsWrapper>
          <S.ImagesWrapper>
            <S.Image
              src="https://www.bbva.com/wp-content/uploads/2018/04/equipo-startup-bbva-1-e1524492124593-1024x521.jpg"
              alt="about-us"
            />
            <S.Image
              src="https://www.bbva.com/wp-content/uploads/2018/04/equipo-startup-bbva-1-e1524492124593-1024x521.jpg"
              alt="about-us"
            />
            <S.FollowWrapper>
              <S.FollowText>გამოგვყევი:</S.FollowText>
              <S.FollowIcons>
                <InstagramIcon />
                <FacebookIcon />
                <LinkedinIcon />
                <TiktokIcon />
              </S.FollowIcons>
            </S.FollowWrapper>
          </S.ImagesWrapper>
        </S.Body>
        <S.SubscribeWrapper>
          <SubscribeOffer
            cicrcleColor="#55AA79"
            arrowColor="#55AA79"
            inputColor="#FE7760"
          />
        </S.SubscribeWrapper>
        <Footer />
      </S.Wrapper>
    </>
  );
};

export default AboutUsPage;
