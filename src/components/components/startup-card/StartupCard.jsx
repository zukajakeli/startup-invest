import * as S from "./startup-card-components";

const StartupCard = () => {
  return (
    <S.Wrapper>
      <S.Logo src="https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg" />
      <S.Image
        src="https://live.staticflickr.com/4859/45540461915_9b0f6d1114_b.jpg"
        alt="startup photo"
      />

      <S.ContentWrapper>
        <S.ContentHeader>
          <S.StartupName>სტარტაპ ინვესტ</S.StartupName>

          <S.StartupFundsWrapper>
            <S.FlexWrapper>
              <S.FundsText>მიზანი:</S.FundsText>
              <S.FundsAmount>$200,000</S.FundsAmount>
            </S.FlexWrapper>
            <S.FlexWrapper>
              <S.FundsText>შეგროვებული:</S.FundsText>
              <S.FundsAmount>50%</S.FundsAmount>
            </S.FlexWrapper>
          </S.StartupFundsWrapper>
        </S.ContentHeader>

        <S.StartupInfo>
          ინოვაციებისა და მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე
          მოყვა, ერთ ღონისძიებას მეორე, ერთ ბიზნეს აქსელერატორს მეორე…
        </S.StartupInfo>
        <S.AboutButton>პროექტის შესახებ</S.AboutButton>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default StartupCard;
