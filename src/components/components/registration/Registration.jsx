import { useFormik } from 'formik';

import TextInput from 'components/components/text-input/TextInput';

import exitIcon from 'assets/icons/exit-icon.svg';
import backIcon from 'assets/icons/back-icon.svg';

import * as S from './registration-components';

const Registration = ({
  setIsAuthDropdownOpen,
  setIsResetPasswordOpen,
  setIsAuthorizationOpen,
  setIsRegistrationOpen,
}) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      repeatPassword: '',
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
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
            inputName="name"
            handleChange={formik.handleChange}
            value={formik.values.name}
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
