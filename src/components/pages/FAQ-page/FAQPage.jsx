import { useFormik } from 'formik';

import TextInput from 'components/components/text-input/TextInput';
import TextareaInput from 'components/components/text-area/TextareaInput';
import Footer from 'components/components/footer/Footer';
import Header from 'components/components/header/Header';

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

  const FAQs = [
    {
      question: 'როგორ ვიყიდო წილი?',
      answer:
        'თქვენთვის სასურველი სტარტაპ შეთავაზების გვერდიდან შეგიძლიათ მოითხოვოთ კონფიდენციალური ინფორმაცია სტარტაპის  შესახებ.  ჩვენი გუნდი დაგიკავშირდებათ და დაგეხმარებათ  არსებულ სტარტაპთან მოლაპარაკების წარმოებაში.',
    },
    {
      question: 'რაში გჭირდებათ პირადი ინფორმაცია?',
      answer:
        ' პლატფორმა ექსკლუზიურად აერთიანებს  საქართველოში არსებულ სტარტაპებს და წვდომას გიხსნით მათი შესახებ. ჩვენთვის მნიშვნელოვანია დავიცვათ კონფიდენციალურობა.',
    },
    {
      question: 'როგორ გავიარო რეგისტრაცია?',
      answer:
        'რეგისტრაცია შეგიძლია გაიაროთ ელექტრონული ფოსტით, ან ავტორიზირდეთ  facebook ან google ანგარიშებით.',
    },
    {
      question: 'დაცული იქნება თუ არა ჩემი მონაცემები?',
      answer:
        'საიტზე არსებული პირადი ინფორმაცია  გამოყენებული იქნება მხოლოდ საიდენტიფიკაციო დანიშნულებით. კონფიდენციალურობა  სრულად დაცულია.',
    },
    {
      question: 'რა არის Startupinvest?',
      answer:
        'StartupInvest  სტარტაპ შეთავაზებების ყველაზე დიდი პლატფორმაა საქართველოში, რომელიც ერთის მხრივ ეხმარება სტარტაპებს ინვესტიციის მოზიდვაში ხოლო დაინტერესებულ პირებს წილის შეძენაში.',
    },
  ];

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
              {FAQs?.map(({ question, answer }, index) => {
                return (
                  <SingleFaq
                    key={`faq${index}`}
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
