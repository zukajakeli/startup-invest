import StartupCard from '../startup-card/StartupCard';

import { ReactComponent as Binocular } from '../../../assets/icons/binocular.svg';
import { ReactComponent as Circle } from '../../../assets/icons/circle.svg';
import { ReactComponent as Arrow } from '../../../assets/icons/arrow-curly-backwards.svg';
import { ReactComponent as ArrowMobile } from 'assets/icons/arrow-yellow-mobile.svg';
import * as S from './blurred-startups-components';
import { useMediaQuery } from 'react-responsive';

export const dummy = [
  {
    title: 'სტარტაპ ინვესტ',
    sharePrice: '$200,000',
    share: '50%',
    previewText: `ინოვაციებისა და მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე
                   მოყვა, ერთ ღონისძიებას მეორე, ერთ ბიზნეს აქსელერატორს მეორე მოყვა, ერთ ღონისძიებას მეორე, ერთ ბიზნეს აქსელერატორს მეორე მოყვა, ერთ ღონისძიებას მეორე, ერთ ბიზნეს აქსელერატორს მეორე`,
    previewPhoto:
      'https://media.architecturaldigest.com/photos/5b9691509cd13621bf9b559b/16:9/w_2991,h_1682,c_limit/JPrice_Lamborghini_MCW18-1755.jpg',
    logoPhoto:
      'https://blh.com.ge/wp-content/uploads/2016/10/Apple-Logo-black.png',
  },
  {
    title: 'სტარტაპ ინვესტ',
    sharePrice: '$200,000',
    share: '50%',
    previewText: `ინოვაციებისა და მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე
                     მოყვა, ერთ ღონისძიებას მეორე, რთ ბიზნეს აქსელერატ რთ ბიზნეს აქსელერატ რთ ბიზნეს აქსელერატ რთ ბიზნეს აქსელერატ რთ ბიზნეს აქსელერატ რთ ბიზნეს აქსელერატ ერთ ბიზნეს აქსელერატორს მეორე…`,
    previewPhoto:
      'https://webunwto.s3.eu-west-1.amazonaws.com/styles/article_main_image/s3/2020-02/unwto-startup-competition.jpg?itok=AGrZIraS',
    logoPhoto:
      'https://blh.com.ge/wp-content/uploads/2016/10/Apple-Logo-black.png',
  },
  {
    title: 'სტარტაპ ინვესტ',
    sharePrice: '$200,000',
    share: '50%',
    previewText: `ინოვაციებისა და მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე
                     მოყვა, ერთ ღონისძიებას მეორე, ერთ ბიზნეს აქსელერატორს მეორე…`,
    previewPhoto:
      'https://www.zambianguardian.com/wp-content/uploads/2021/09/Difference-between-public-administration-and-business-administration.jpg',
    logoPhoto:
      'https://blh.com.ge/wp-content/uploads/2016/10/Apple-Logo-black.png',
  },
];

const BlurredStartups = ({ openAuthModal }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

  return (
    <S.Wrapper>
      {dummy.map(
        (
          {
            title,
            sharePrice,
            share,
            outsideText,
            previewPhoto,
            logoPhoto,
            _id,
            category,
          },
          index,
        ) => {
          return isMobile ? (
            index < 1 && (
              <StartupCard
                key={`blurred${index}`}
                title={title}
                sharePrice={sharePrice}
                share={share}
                previewText={outsideText}
                previewPhoto={previewPhoto}
                logoPhoto={logoPhoto}
                category={category}
                id={_id}
                isBlurred
              />
            )
          ) : (
            <StartupCard
              key={`blurred${index}`}
              title={title}
              sharePrice={sharePrice}
              share={share}
              previewText={outsideText}
              previewPhoto={previewPhoto}
              logoPhoto={logoPhoto}
              category={category}
              id={_id}
              isBlurred
            />
          );
        },
      )}

      <S.Content>
        <S.CircleWrapper>
          <Circle fill="#FFCA0F" />
        </S.CircleWrapper>

        <S.ArrowWrapper>
          {isMobile ? <ArrowMobile /> : <Arrow fill="#FFCA0F" />}
        </S.ArrowWrapper>

        <S.BinocularWrapper>
          <Binocular />
        </S.BinocularWrapper>

        <S.Heading>მეტის სანახავად გაიარე ავტორიზაცია</S.Heading>
        <S.SubHeading>
          და ერთ სივრცეში იხილე სწრაფად მზარდი ბიზნესები საქართველოში
        </S.SubHeading>
        <S.Button onClick={openAuthModal}>ავტორიზაცია</S.Button>
      </S.Content>
    </S.Wrapper>
  );
};

export default BlurredStartups;
