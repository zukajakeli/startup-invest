import { useFormik } from 'formik';

import TextInput from 'components/components/text-input/TextInput';

import exitIcon from 'assets/icons/exit-icon.svg';
import backIcon from 'assets/icons/back-icon.svg';

import * as S from './reset-password-components';
import { resetPassword } from 'config/API';
import { useState } from 'react';

const ResetPassword = ({
  setIsAuthDropdownOpen,
  setIsAuthorizationOpen,
  setIsResetPasswordOpen,
  setIsRegistrationOpen,
}) => {
  const [isSuccessMessageOpen, setIsSuccessMessageOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
      resetPassword(values);
      setIsSuccessMessageOpen(true);
    },
  });

  const goToAuthorization = () => {
    setIsResetPasswordOpen(false);
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

      <S.Heading>პაროლის აღდგენა</S.Heading>

      <TextInput
        fullWidth
        required
        placeholder="ელ-ფოსტა"
        inputName="email"
        handleChange={formik.handleChange}
        value={formik.values.email}
      />

      <S.Button type="submit">გაგრძელება</S.Button>
    </S.Wrapper>
  );
};

export default ResetPassword;
