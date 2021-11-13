import { useFormik } from 'formik';

import TextInput from 'components/components/text-input/TextInput';
import TextareaInput from 'components/components/text-area/TextareaInput';
import Footer from 'components/components/footer/Footer';
import Header from 'components/components/header/Header';
import SingleFaq from 'components/components/single-faq/SingleFaq';

import { getAllFaqs } from 'config/API';

import * as S from './FAQ-page-components';
import { useEffect } from 'react';
import { useState } from 'react';

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

  const [faqsData, setFaqsData] = useState([]);

  useEffect(() => {
    getAllFaqs().then((res) => setFaqsData(res.data));
  }, []);

  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <Header />
      </S.HeaderWrapper>
      <S.Body>
        <S.Heading>ხშირად დასმული კითხვები</S.Heading>
        <S.ContainersWrapper>
          <S.FaqBoxWrapper>
            <S.FaqBox>
              {faqsData?.map(({ question, answer, _id }, index) => {
                return (
                  <SingleFaq
                    key={`faq${_id}`}
                    question={question}
                    answer={answer}
                  />
                );
              })}
            </S.FaqBox>
          </S.FaqBoxWrapper>

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
      <Footer />
    </S.Wrapper>
  );
};

export default FAQPage;
