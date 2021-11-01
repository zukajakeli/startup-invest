import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useContext } from 'react';
import { MeContext } from 'contexts/MeContext';
import TextInput from 'components/components/text-input/TextInput';
import { register } from 'config/API';

import exitIcon from 'assets/icons/exit-icon.svg';
import backIcon from 'assets/icons/back-icon.svg';

import * as S from './registration-components';
import { useEffect } from 'react';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  repeatPassword: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const Registration = ({
  setIsAuthDropdownOpen,
  setIsResetPasswordOpen,
  setIsAuthorizationOpen,
  setIsRegistrationOpen,
}) => {
  const [meInfo, setMeInfo] = useContext(MeContext);

  useEffect(() => {
    console.log('meInfo', meInfo);
  }, [meInfo]);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      repeatPassword: '',
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
      register(values).then((res) => {
        setMeInfo(res.data);
        localStorage.setItem('token', res.data.token);
        setIsAuthDropdownOpen(false);
      });
    },
  });

  const goToAuthorization = () => {
    setIsResetPasswordOpen(false);
    setIsRegistrationOpen(false);
    setIsAuthorizationOpen(true);
  };

  const exitHandler = () => {
    setIsResetPasswordOpen(false);
    setIsRegistrationOpen(false);
    setIsAuthDropdownOpen(false);
    setIsAuthorizationOpen(true);
  };

  return (
    <S.Wrapper onSubmit={formik.handleSubmit}>
      <S.ExitButton src={exitIcon} alt="exit" onClick={exitHandler} />
      <S.BackButton src={backIcon} alt="back" onClick={goToAuthorization} />

      <S.Heading>რეგისტრაცია</S.Heading>
      <S.Text style={{ marginBottom: 20 }}>შეავსე პირადი მონაცემები</S.Text>
      <S.FlexWrapper>
        <S.InputWrapper>
          <TextInput
            required
            fullWidth
            placeholder="სახელი"
            inputName="firstName"
            handleChange={formik.handleChange}
            value={formik.values.firstName}
          />
        </S.InputWrapper>
        <S.InputWrapper isPasswordInput>
          <TextInput
            required
            fullWidth
            placeholder="გვარი"
            inputName="lastName"
            handleChange={formik.handleChange}
            value={formik.values.lastName}
          />
        </S.InputWrapper>
      </S.FlexWrapper>

      <S.InputWrapper isPasswordInput>
        <TextInput
          required
          fullWidth
          placeholder="ელ-ფოსტა"
          inputName="email"
          handleChange={formik.handleChange}
          value={formik.values.email}
        />
      </S.InputWrapper>
      <S.InputWrapper isPasswordInput>
        <TextInput
          required
          fullWidth
          placeholder="ტელეფონი"
          inputName="phone"
          handleChange={formik.handleChange}
          value={formik.values.phone}
        />
      </S.InputWrapper>
      <S.InputWrapper isPasswordInput>
        <TextInput
          required
          fullWidth
          placeholder="პაროლი"
          inputName="password"
          handleChange={formik.handleChange}
          value={formik.values.password}
          isPasswordInput
        />
      </S.InputWrapper>
      <S.InputWrapper isPasswordInput>
        <TextInput
          required
          fullWidth
          placeholder="გაიმეორე პაროლი"
          inputName="repeatPassword"
          handleChange={formik.handleChange}
          value={formik.values.repeatPassword}
          isPasswordInput
        />
      </S.InputWrapper>

      <S.Button type="submit">რეგისტრაცია</S.Button>
    </S.Wrapper>
  );
};

export default Registration;
