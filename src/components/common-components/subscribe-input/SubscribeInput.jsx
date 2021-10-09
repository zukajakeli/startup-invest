import * as S from './subscribe-input-components';

const SubscribeInput = ({ color }) => {
  return (
    <S.SubscribeInputWrapper>
      <S.Input type="text" placeholder="ელ.ფოსტა" color={color}></S.Input>
      <S.Button type="submit" color={color}>
        გაგზავნა
      </S.Button>
    </S.SubscribeInputWrapper>
  );
};

export default SubscribeInput;
