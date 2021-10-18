import { useMediaQuery } from 'react-responsive';

import SubscribeInput from '../subscribe-input/SubscribeInput';

import { ReactComponent as CircleIcon } from '../../../assets/icons/circle.svg';
import { ReactComponent as ArrowIcon } from '../../../assets/icons/arrow-curly.svg';
import { ReactComponent as ArrowMobile } from 'assets/icons/arrow-red-mobile.svg';

import * as S from './subscribe-offer-components';

const SubscribeOffer = ({ cicrcleColor, arrowColor, inputColor }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

  return (
    <S.Wrapper>
      <S.SubscribeText>
        არ ჩამორჩე სიახლეებს, გამოიწერე გვერდი ახალი შეთავაზებების მისაღებად{' '}
      </S.SubscribeText>
      <SubscribeInput color={inputColor} />

      {/* Position Absolute Elements */}
      <S.CircleWrapper cicrcleColor={cicrcleColor}>
        <CircleIcon />
      </S.CircleWrapper>
      <S.ArrowWrapper arrowColor={arrowColor}>
        {isMobile ? <ArrowMobile /> : <ArrowIcon />}
      </S.ArrowWrapper>
    </S.Wrapper>
  );
};

export default SubscribeOffer;
