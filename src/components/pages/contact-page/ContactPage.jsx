import { useFormik } from 'formik';

import Footer from 'components/components/footer/Footer';
import Header from 'components/components/header/Header';
import ContactCard from 'components/components/contact-card/ContactCard';
import TextInput from 'components/components/text-input/TextInput';
import TextareaInput from 'components/components/text-area/TextareaInput';

import backgroundImage from 'assets/images/contact-page-background.svg';
import * as S from './contact-page-components';

const ContactPage = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      comment: '',
      uploadFile: '',
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <Header />
      </S.HeaderWrapper>

      <S.Body>
        <S.LeftWrapper>
          <S.TitleAndFormWrapper>
            <S.Heading>დაგვიტოვე მონაცემები</S.Heading>
            <S.FormWrapper onSubmit={formik.handleSubmit}>
              <TextInput
                required
                placeholder="სახელი"
                inputName="firstName"
                handleChange={formik.handleChange}
                value={formik.values.firstName}
              />
              <TextInput
                required
                placeholder="გვარი"
                inputName="lastName"
                handleChange={formik.handleChange}
                value={formik.values.lastName}
              />
              <TextInput
                required
                fullWidth
                placeholder="ელ.ფოსტა"
                inputName="email"
                handleChange={formik.handleChange}
                value={formik.values.email}
              />
              <TextInput
                required
                fullWidth
                placeholder="ტელ.ნომერი"
                inputName="phoneNumber"
                handleChange={formik.handleChange}
                value={formik.values.phoneNumber}
              />
              <TextareaInput
                placeholder="დაგვიტოვე კომენტარი"
                inputName="comment"
                handleChange={formik.handleChange}
                value={formik.values.comment}
              />
              <S.ShareText>გაგვიზიარე პრეზენტაცია (არასავალდებულო)</S.ShareText>
              <TextInput
                fullWidth
                placeholder="ატვირთე ფაილი"
                isUploadInput
                inputName="uploadFile"
                handleChange={formik.handleChange}
                value={formik.values.uploadFile}
              />
              <S.SubmitButton type="submit">გაგზავნა</S.SubmitButton>
            </S.FormWrapper>
          </S.TitleAndFormWrapper>
        </S.LeftWrapper>

        <S.RightWrapper>
          <S.BackgroundImage src={backgroundImage} alt="background" />
          <ContactCard />
        </S.RightWrapper>
      </S.Body>
      <Footer />
    </S.Wrapper>
  );
};

export default ContactPage;
