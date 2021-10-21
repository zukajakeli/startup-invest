import { useMediaQuery } from 'react-responsive';

import SubscribeOffer from 'components/common-components/subscribe-offer/SubscribeOffer';
import Footer from 'components/components/footer/Footer';
import Header from 'components/components/header/Header';

import { ReactComponent as LinkedinIcon } from '../../../assets/icons/linkedin-icon.svg';
import { ReactComponent as InstagramIcon } from '../../../assets/icons/instagram-icon.svg';
import { ReactComponent as FacebookIcon } from '../../../assets/icons/facebook-icon.svg';
import { ReactComponent as TiktokIcon } from '../../../assets/icons/tiktok-icon.svg';

import * as S from './about-us-page-components';

const AboutUsPage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
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
              StartupInvest სტარტაპ შეთავაზებების ყველაზე დიდი პლატფორმაა
              საქართველოში, რომელიც ერთის მხრივ ეხმარება სტარტაპებს ინვესტიციის
              მოზიდვაში ხოლო დაინტერესებულ პირებს წილის შეძენაში.
            </S.Text>
            <S.SubHeading>
              პლატფორმა ერთ სივრცეში აერთიანებს სხვადასხვა სფეროს წარმომადგენელ
              სწრაფად მზარდ ბიზნესებს, რომლებიც გარკვეული სარგებლის მიღების
              მიზნით, ექსკლუზიურად სთავაზობენ ჩვენს მომხმარებლებს წილს საკუთარ
              ბიზნესში.
            </S.SubHeading>
            {isMobile && (
              <S.Image
                src="https://www.bbva.com/wp-content/uploads/2018/04/equipo-startup-bbva-1-e1524492124593-1024x521.jpg"
                alt="about-us"
              />
            )}

            <S.Text>
              <strong>
                სტარტაპ ეკოსისტემა საქართველოში დღითიდღე უფრო ვითარდება, არაერთი
                კომპანია წარმატებით ოპერირებს არა მხოლოდ ლოკალურ, არამედ
                საერთაშორისო ბაზარზე. ამ პროცესს ამარტივებს სახელმწიფოსა თუ
                კერძო სექტორის მხრიდან წამოსული ხელშემწყობი ფაქტორები, რაც
                დღითიდღე უფრო სარფიანს ხდის სწრაფად მზარდ ბიზნესში ფულის
                ჩადებასა და სტარტაპების წილის შეძენას.
              </strong>
              <br />
              <br />
              ჩვენთვის მნიშვნელოვანია ხელმისაწვდომი გავხადოთ სტარტაპებში
              ინვესტირება, ისე რომ გარიგება ორმხრივად საინტერესო აღმოჩნდეს.
            </S.Text>
          </S.TextsWrapper>
          <S.ImagesWrapper>
            {!isMobile && (
              <S.Image
                src="https://www.bbva.com/wp-content/uploads/2018/04/equipo-startup-bbva-1-e1524492124593-1024x521.jpg"
                alt="about-us"
              />
            )}

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
