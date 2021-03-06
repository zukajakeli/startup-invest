import { useMediaQuery } from 'react-responsive';

import LargeStory from '../large-story/LargeStory';
import SmallStory from '../small-story/SmallStory';

import circle from '../../../assets/images/circle-yellow.svg';
import archGreen from '../../../assets/images/arch-green.svg';
import archPink from '../../../assets/images/arch-pink.svg';
import { ReactComponent as Arrow } from '../../../assets/images/arrow.svg';

import * as S from './stories-section-components';
import { useHistory } from 'react-router';
import { useEffect } from 'react';
import { useState } from 'react';
import { getMainStory, getSecondaryStories } from 'config/API';

const StoriesSection = () => {
  const history = useHistory();
  const goToBlogs = () => {
    history.push('/blogs');
  };

  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

  const [mainStory, setMainStory] = useState([]);
  const [secondaryStories, setSecondaryStories] = useState([]);
  useEffect(() => {
    getMainStory().then((res) => {
      console.log(res.data.story);
      setMainStory(res.data.story);
    });
  }, []);

  useEffect(() => {
    getSecondaryStories().then((res) => {
      console.log(res.data.stories);
      setSecondaryStories(res.data.stories);
    });
  }, []);

  return (
    <S.Wrapper>
      <S.Header>
        <S.CircleImage src={circle} />
        <S.TextsWrapper>
          <S.Heading>ბიზნეს ისტორიები</S.Heading>
        </S.TextsWrapper>
        {!isMobile && (
          <S.AllStoriesButton onClick={goToBlogs}>
            ყველა ისტორია
            <Arrow />
          </S.AllStoriesButton>
        )}
      </S.Header>

      <S.Body>
        {mainStory && (
          <LargeStory
            forMainPage
            backgroundImage={mainStory.previewPhoto}
            readingTime="4 წუთი"
            storyTitle={mainStory.title}
            storyPreview={mainStory.outsideText}
            id={mainStory._id}
          />
        )}
        {secondaryStories && (
          <S.SmallStoriesWrapper>
            {secondaryStories.map(
              (
                { _id, readingTime, title, outsideText, previewPhoto },
                index,
              ) => {
                if (index < 2) {
                  return (
                    <SmallStory
                      key={_id}
                      image={previewPhoto}
                      readingTime={readingTime}
                      storyTitle={title}
                      storyPreview={outsideText}
                    />
                  );
                }
              },
            )}

            {isMobile && <S.PinkBackground src={archPink} />}
          </S.SmallStoriesWrapper>
        )}

        <S.GreenBackground src={archGreen} />
      </S.Body>

      {isMobile && (
        <S.AllStoriesButton onClick={goToBlogs}>
          ყველა ისტორია
          <Arrow />
        </S.AllStoriesButton>
      )}
      {!isMobile && <S.PinkBackground src={archPink} />}
    </S.Wrapper>
  );
};

export default StoriesSection;
