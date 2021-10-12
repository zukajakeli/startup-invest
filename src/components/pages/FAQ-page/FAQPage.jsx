import Header from 'components/components/header/Header';
import { useFormik } from 'formik';

import backgroundImage from 'assets/images/faq-background.svg';

import * as S from './FAQ-page-components';
import TextInput from 'components/components/text-input/TextInput';
import TextareaInput from 'components/components/text-area/TextareaInput';

const FAQPage = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      question: '',
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <S.Wrapper>
      <S.BackgroundImage src={backgroundImage} alt="background" />

      <S.HeaderWrapper>
        <Header />
      </S.HeaderWrapper>
      <S.Body>
        <S.Heading>ხშირად დასმული კითხვები</S.Heading>
        <S.ContainersWrapper>
          <S.FaqBox> </S.FaqBox>
          <S.GetInfoBox>
            <S.GetInfoHeading>
              ვერ მიიღე შენთვის <br /> საინტერესო ინფორმაცია?
            </S.GetInfoHeading>
            <S.Form onSubmit={formik.handleSubmit}>
              <TextInput
                fullWidth
                required
                placeholder="ელ-ფოსტა"
                inputName="email"
                handleChange={formik.handleChange}
                value={formik.values.email}
              />
              <TextareaInput
                placeholder="მოგვწერე შეკითხვა"
                inputName="question"
                handleChange={formik.handleChange}
                value={formik.values.question}
              />
              <S.Button type="submit">გაგზავნა</S.Button>
            </S.Form>
          </S.GetInfoBox>
        </S.ContainersWrapper>
      </S.Body>
    </S.Wrapper>
  );
};

export default FAQPage;
