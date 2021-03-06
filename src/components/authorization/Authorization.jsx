import { useFormik } from 'formik';
// import { GoogleLogin } from 'react-google-login';
import * as Yup from 'yup';
import { useContext } from 'react';
import { MeContext } from 'contexts/MeContext';

import TextInput from 'components/components/text-input/TextInput';
import { signUpRequest, googleAuth } from 'config/API';

import { useMediaQuery } from 'react-responsive';

import exitIcon from 'assets/icons/exit-icon.svg';

import * as S from './authorization-components';
import GoogleLoginButton from './google-login/GoogleLoginButton';
import FBLoginButton from './google-login/FBLoginButton';
import { useHistory } from 'react-router';

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
  const history = useHistory();
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

  const [meInfo, setMeInfo] = useContext(MeContext);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: ValidationSchema,
    onSubmit: (values) => {
      signUpRequest(values).then((res) => {
        console.log(res.data);
        setMeInfo(res.data.user);
        localStorage.setItem('token', res.data.token);
        isMobile ? history.push('/') : setIsAuthDropdownOpen(false);
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

      <S.Heading>?????????????????????????????????</S.Heading>
      <S.Text style={{ marginBottom: 20 }}>?????????????????? ?????????????????? ??????????????????????????????</S.Text>
      <S.InputWrapper>
        <TextInput
          fullWidth
          required
          placeholder="??????-???????????????"
          inputName="email"
          handleChange={formik.handleChange}
          value={formik.values.email}
        />
      </S.InputWrapper>
      <S.InputWrapper isPasswordInput>
        <TextInput
          fullWidth
          required
          placeholder="??????????????????"
          inputName="password"
          isPasswordInput
          handleChange={formik.handleChange}
          value={formik.values.password}
        />
      </S.InputWrapper>
      <S.Text style={{ marginBottom: 6 }}>
        ?????????????????????????????? ???????????????????
        <S.Hyperlink
          onClick={
            isMobile
              ? () => {
                  history.push('/auth/resetpassword');
                }
              : openResetPassword
          }
        >
          {' '}
          ???????????????????????? ??????{' '}
        </S.Hyperlink>
      </S.Text>
      <S.Text style={{ marginBottom: 30 }}>
        ?????? ????????? ???????????????????????????????????????????{' '}
        <S.Hyperlink
          onClick={
            isMobile
              ? () => {
                  history.push('/auth/register');
                }
              : openRegistration
          }
        >
          {' '}
          ????????????????????? ??????{' '}
        </S.Hyperlink>
      </S.Text>
      <S.Button type="submit">??????????????????</S.Button>
      <S.HorizontalLine />
      <S.Text style={{ alignSelf: 'center', marginTop: 16 }}>??????</S.Text>
      <S.SocialAuthWrapper>
        <FBLoginButton />
        <GoogleLoginButton />
      </S.SocialAuthWrapper>
    </S.Wrapper>
  );
};

export default Authorization;
