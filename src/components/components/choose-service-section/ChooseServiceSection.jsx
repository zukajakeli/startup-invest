import ChooseServiceCard from "../choose-service-card/ChooseServiceCard";
import * as S from "./choose-service-sec-components";

const ChooseServiceSection = () => {
  return (
    <S.Wrapper>
      <ChooseServiceCard
        title="სტარტაპებისთვის"
        info="ინოვაციებისა და მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე მოყვა, ღონისძიებას"
        buttonText="განათავსე სტარტაპი"
      />
      <ChooseServiceCard
        title="ინვესტორებისთვის"
        info="ინოვაციებისა და მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე მოყვა, ღონისძიებას"
        buttonText="აღმოაჩინე სტარტაპი"
        forInvestors
      />
    </S.Wrapper>
  );
};

export default ChooseServiceSection;
