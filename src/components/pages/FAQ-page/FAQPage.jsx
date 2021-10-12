import { useFormik } from 'formik';

import TextInput from 'components/components/text-input/TextInput';
import TextareaInput from 'components/components/text-area/TextareaInput';
import Footer from 'components/components/footer/Footer';
import Header from 'components/components/header/Header';

import backgroundImage from 'assets/images/faq-background.svg';

import * as S from './FAQ-page-components';
import SingleFaq from 'components/components/single-faq/SingleFaq';

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
          <S.FaqBox>
            <SingleFaq
              question=" მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე მოყვა, ერთ
          ღონისძიებას მეორე, აქსელერატორს მეორეინოვაციებისა და მეწარმეობის
          მიმართულებით"
              answer="მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე მოყვა, ერთ
          ღონისძიებას მეორე, აქსელერატორს მეორეინოვაციებისა და მეწარმეობის
          მიმართულებით"
            />
            <SingleFaq
              question=" მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე მოყვა, ერთ
          ღონისძიებას მეორე, აქსელერატორს მეორეინოვაციებისა და მეწარმეობის
          მიმართულებით"
              answer="მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე მოყვა, ერთ
          ღონისძიებას მეორე, აქსელერატორს მეორეინოვაციებისა და მეწარმეობის
          მიმართულებით"
            />
            <SingleFaq
              question=" მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე მოყვა, ერთ
          ღონისძიებას "
              answer="მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე მოყვა, ერთ
          ღონისძიებას მეორე, აქსელერატორს მეორეინოვაციებისა და მეწარმეობის
          მიმართულებით"
            />
            <SingleFaq
              question=" მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე მოყვა, ერთ
          ღონისძიებას "
              answer="მეწარმეობის მიმართულებით, ერთ ორგანიზაციას მეორე მოყვა, ერთ
          ღონისძიებას მეორე, აქსელერატორს მეორეინოვაციებისა და მეწარმეობის
          მიმართულებით"
            />
          </S.FaqBox>

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
