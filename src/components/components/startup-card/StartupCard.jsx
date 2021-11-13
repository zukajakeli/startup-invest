import { useHistory } from 'react-router';
import BASE_URL from 'config/BaseUrl';
import * as S from './startup-card-components';

const StartupCard = ({
  previewPhoto,
  logoPhoto,
  sharePrice,
  share,
  title,
  previewText,
  category,
  _id,
  isBlurred,
}) => {
  const history = useHistory();
  const openStartup = () => {
    history.push(`/single-startup/${_id}`);
  };

  return (
    <S.Wrapper isBlurred={isBlurred}>
      <S.Logo src={`${BASE_URL}/${logoPhoto}`} />
      <S.Image src={`${BASE_URL}/${previewPhoto}`} alt="startup photo" />

      <S.ContentWrapper>
        <S.ContentHeader>
          <S.StartupName>{title}</S.StartupName>

          <S.StartupFundsWrapper>
            <S.FlexWrapper>
              <S.FundsText>წილის ღირებულება:</S.FundsText>
              <S.FundsAmount>{sharePrice}</S.FundsAmount>
            </S.FlexWrapper>
            <S.FlexWrapper>
              <S.FundsText>წილი:</S.FundsText>
              <S.FundsAmount>{share}</S.FundsAmount>
            </S.FlexWrapper>
          </S.StartupFundsWrapper>
        </S.ContentHeader>

        <S.StartupInfo>{previewText}</S.StartupInfo>
        <S.AboutButton onClick={openStartup}>დეტალურად</S.AboutButton>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default StartupCard;
