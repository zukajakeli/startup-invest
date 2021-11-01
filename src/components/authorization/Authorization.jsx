import { useFormik } from 'formik';
import { GoogleLogin } from 'react-google-login';
import * as Yup from 'yup';
import { useContext } from 'react';
import { MeContext } from 'contexts/MeContext';

import TextInput from 'components/components/text-input/TextInput';
import { signUpRequest } from 'config/API';

import googleIcon from 'assets/icons/google-icon.svg';
import fbIcon from 'assets/icons/fb-icon.svg';
import exitIcon from 'assets/icons/exit-icon.svg';

import * as S from './authorization-components';

const ValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const Authorization = ({
  setIsAuthDropdownOpen,
  setIsRegistrationOpen,
  setIsResetPasswordOpen,
  setIsAuthorizationOpen,
}) => {
  const [meInfo, setMeInfo] = useContext(MeContext);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: ValidationSchema,
    onSubmit: (values) => {
      signUpRequest(values).then((res) => {
        setMeInfo(res.data);
        localStorage.setItem('token', res.data.token);
        setIsAuthDropdownOpen(false);
        console.log(res.data);
      });
    },
  });

  const openResetPassword = () => {
    setIsResetPasswordOpen(true);
    setIsAuthorizationOpen(false);
    setIsRegistrationOpen(false);
  };

  const openRegistration = () => {
    setIsRegistrationOpen(true);
    setIsResetPasswordOpen(false);
    setIsAuthorizationOpen(false);
  };
  return (
    <S.Wrapper onSubmit={formik.handleSubmit}>
      <S.ExitButton
        src={exitIcon}
        alt="exit"
        onClick={() => {
          setIsAuthDropdownOpen(false);
        }}
      />

      <S.Heading>ავტორიზაცია</S.Heading>
      <S.Text style={{ marginBottom: 20 }}>შეიყვანე მონაცემები</S.Text>
      <S.InputWrapper>
        <TextInput
          fullWidth
          required
          placeholder="ელ-ფოსტა"
          inputName="email"
          handleChange={formik.handleChange}
          value={formik.values.email}
        />
      </S.InputWrapper>
      <S.InputWrapper isPasswordInput>
        <TextInput
          fullWidth
          required
          placeholder="პაროლი"
          inputName="password"
          isPasswordInput
          handleChange={formik.handleChange}
          value={formik.values.password}
        />
      </S.InputWrapper>
      <S.Text style={{ marginBottom: 6 }}>
        დაგავიწყდა პაროლი?
        <S.Hyperlink onClick={openResetPassword}> აღადგინე აქ </S.Hyperlink>
      </S.Text>
      <S.Text style={{ marginBottom: 30 }}>
        არ ხარ რეგისტრირებული?{' '}
        <S.Hyperlink onClick={openRegistration}> დააჭირე აქ </S.Hyperlink>
      </S.Text>
      <S.Button type="submit">შესვლა</S.Button>
      <S.HorizontalLine />
      <S.Text style={{ alignSelf: 'center', marginTop: 16 }}>ან</S.Text>
      <S.SocialAuthWrapper>
        <S.SocialButton type="button">
          <S.SocialIcon src={fbIcon} alt="fb" /> Facebook-ით
        </S.SocialButton>
        <GoogleLogin
          clientId="GOOGLE ID"
          render={(renderProps) => (
            <S.SocialButton type="button" google>
              <S.SocialIcon src={googleIcon} alt="fb" /> Google-ით
            </S.SocialButton>
          )}
        />
      </S.SocialAuthWrapper>
    </S.Wrapper>
  );
};

export default Authorization;
