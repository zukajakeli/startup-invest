import LargeStory from "../large-story/LargeStory";
import SmallStory from "../small-story/SmallStory";

import circle from "../../../assets/images/circle-yellow.svg";
import archGreen from "../../../assets/images/arch-green.svg";
import archPink from "../../../assets/images/arch-pink.svg";

import * as S from "./stories-section-components";

const StoriesSection = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <S.CircleImage src={circle} />
        <S.TextsWrapper>
          <S.Heading>ბიზნეს ისტორიები</S.Heading>
          <S.SubHeading>
            ინოვაციებისა და მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე
            მოყვა, ერთ ღონისძიებას მეორე
          </S.SubHeading>
        </S.TextsWrapper>
        <S.AllStoriesButton>ყველა ისტორია</S.AllStoriesButton>
      </S.Header>

      <S.Body>
        <LargeStory
          backgroundImage="https://resilientblog.co/wp-content/uploads/2020/02/quotes-about-mountains-1024x614.jpg"
          readingTime="4 წუთი"
          storyTitle="ბიზნეს ისტორიები"
          storyPreview="ინოვაციებისა და მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე
          მოყვა, ერთ ღონისძიებას მეორე, ერთ ბიზნეს აქსელერატორს მეორე…"
        />
        <S.SmallStoriesWrapper>
          <SmallStory
            image="https://resilientblog.co/wp-content/uploads/2020/02/quotes-about-mountains-1024x614.jpg"
            readingTime="7 წუთი"
            storyTitle="ბიზნეს ისტორიები"
            storyPreview="ინოვაციებისა და მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე
          მოყვა, ერთ ღონისძიებას მეორე, ერთ ბიზნეს "
          />
          <SmallStory
            image="https://resilientblog.co/wp-content/uploads/2020/02/quotes-about-mountains-1024x614.jpg"
            readingTime="7 წუთი"
            storyTitle="ბიზნეს ისტორიები"
            storyPreview="ინოვაციებისა და მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე
          მოყვა, ერთ ღონისძიებას მეორე, ერთ ბიზნეს აქსელერატორს მეორე…"
          />
        </S.SmallStoriesWrapper>
        <S.GreenBackground src={archGreen} />
      </S.Body>

      <S.PinkBackground src={archPink} />
    </S.Wrapper>
  );
};

export default StoriesSection;
