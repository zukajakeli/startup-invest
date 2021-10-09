import SubscribeInput from '../subscribe-input/SubscribeInput';

import { ReactComponent as CircleIcon } from '../../../assets/icons/circle.svg';
import { ReactComponent as ArrowIcon } from '../../../assets/icons/arrow-curly.svg';

import * as S from './subscribe-offer-components';

const SubscribeOffer = ({ cicrcleColor, arrowColor, inputColor }) => {
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
        <ArrowIcon />
      </S.ArrowWrapper>
    </S.Wrapper>
  );
};

export default SubscribeOffer;
