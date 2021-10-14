import { useFormik } from 'formik';

import TextInput from 'components/components/text-input/TextInput';

import googleIcon from 'assets/icons/google-icon.svg';
import fbIcon from 'assets/icons/fb-icon.svg';
import exitIcon from 'assets/icons/exit-icon.svg';

import * as S from './authorization-components';

const Authorization = () => {
  const formik = useFormik({
    initialValues: {
      authEmail: '',
      authPassword: '',
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
    },
  });
  return (
    <S.Wrapper onSubmit={formik.handleSubmit}>
      <S.ExitButton src={exitIcon} alt="exit" />

      <S.Heading>ავტორიზაცია</S.Heading>
      <S.Text style={{ marginBottom: 20 }}>შეიყვანე მონაცემები</S.Text>
      <S.InputWrapper>
        <TextInput
          fullWidth
          required
          placeholder="ელ-ფოსტა"
          inputName="authEmail"
          handleChange={formik.handleChange}
          value={formik.values.authEmail}
        />
      </S.InputWrapper>
      <S.InputWrapper isPasswordInput>
        <TextInput
          fullWidth
          required
          placeholder="პაროლი"
          inputName="authPassword"
          isPasswordInput
          handleChange={formik.handleChange}
          value={formik.values.authPassword}
        />
      </S.InputWrapper>
      <S.Text style={{ marginBottom: 6 }}>
        დაგავიწყდა პაროლი?<S.Hyperlink> აღადგინე აქ </S.Hyperlink>
      </S.Text>
      <S.Text style={{ marginBottom: 30 }}>
        არ ხარ რეგისტრირებული? <S.Hyperlink> დააჭირე აქ </S.Hyperlink>
      </S.Text>
      <S.Button type="submit">შესვლა</S.Button>
      <S.HorizontalLine />
      <S.Text style={{ alignSelf: 'center', marginTop: 16 }}>ან</S.Text>
      <S.SocialAuthWrapper>
        <S.SocialButton type="button">
          <S.SocialIcon src={fbIcon} alt="fb" /> Facebook-ით
        </S.SocialButton>
        <S.SocialButton type="button" google>
          <S.SocialIcon src={googleIcon} alt="fb" /> Google-ით
        </S.SocialButton>
      </S.SocialAuthWrapper>
    </S.Wrapper>
  );
};

export default Authorization;
