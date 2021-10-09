import * as S from './startup-card-components';

const StartupCard = ({
  startupName,
  goal,
  raised,
  startupInfo,
  image,
  logo,
  isBlurred,
}) => {
  return (
    <S.Wrapper isBlurred={isBlurred}>
      <S.Logo src={logo} />
      <S.Image src={image} alt="startup photo" />

      <S.ContentWrapper>
        <S.ContentHeader>
          <S.StartupName>{startupName}</S.StartupName>

          <S.StartupFundsWrapper>
            <S.FlexWrapper>
              <S.FundsText>მიზანი:</S.FundsText>
              <S.FundsAmount>{goal}</S.FundsAmount>
            </S.FlexWrapper>
            <S.FlexWrapper>
              <S.FundsText>შეგროვებული:</S.FundsText>
              <S.FundsAmount>{raised}</S.FundsAmount>
            </S.FlexWrapper>
          </S.StartupFundsWrapper>
        </S.ContentHeader>

        <S.StartupInfo>{startupInfo}</S.StartupInfo>
        <S.AboutButton>პროექტის შესახებ</S.AboutButton>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default StartupCard;
