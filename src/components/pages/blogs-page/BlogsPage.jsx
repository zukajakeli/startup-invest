import MainStory from '../../components/main-story/MainStory';
import Header from '../../components/header/Header';
import * as S from './blogs-page-components';
import Footer from '../../components/footer/Footer';
import SubscribeOffer from '../../common-components/subscribe-offer/SubscribeOffer';

const BlogsPage = () => {
  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <Header />
      </S.HeaderWrapper>

      <S.Body>
        <MainStory
          image="https://resilientblog.co/wp-content/uploads/2020/02/quotes-about-mountains-1024x614.jpg"
          readingTime="7 წუთი"
          storyTitle="ბიზნეს ისტორიები"
          storyPreview="ინოვაციებისა და მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე
          მოყვა, ერთ ღონისძიებას მეორე, ერთ ბიზნეს "
        />
        <SubscribeOffer
          inputColor="#55AA79"
          arrowColor="#FDB8B7"
          cicrcleColor="#FDB8B7"
        />
      </S.Body>
      <Footer />
    </S.Wrapper>
  );
};

export default BlogsPage;
