import { useFormik } from 'formik';
import { useMediaQuery } from 'react-responsive';
import emailjs from 'emailjs-com';
import { useRef } from 'react';
import { keys } from 'keys/keys';

import TextInput from 'components/components/text-input/TextInput';

import exitIcon from 'assets/icons/exit-icon.svg';
import backIcon from 'assets/icons/back-icon.svg';
import { ReactComponent as Success } from 'assets/icons/success.svg';

import * as S from './reset-password-components';
import { resetPassword } from 'config/API';
import { useState } from 'react';
import { useHistory } from 'react-router';

const ResetPassword = ({
  setIsAuthDropdownOpen,
  setIsAuthorizationOpen,
  setIsResetPasswordOpen,
  setIsRegistrationOpen,
}) => {
  const history = useHistory();
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
  const [isSuccessMessageOpen, setIsSuccessMessageOpen] = useState(false);
  const [email, setEmail] = useState('');

  const catchEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    resetPassword({ email }).then((res) => {
      console.log(res.data);
      emailjs
        .send(
          keys.emailJsServiceId,
          'template_6g0qy23',
          {
            email: res.data.email,
            message: `https://startupinvest.ge/reset-password/{res.data.id}`,
          },
          keys.emailJsId,
        )
        .then(
          (result) => {
            console.log(result.text);
            setIsSuccessMessageOpen(true);
          },
          (error) => {
            console.log(error.text);
            setIsSuccessMessageOpen(true);
          },
        );
    });
  };

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

  console.log(isSuccessMessageOpen);

  return (
    <S.Wrapper onSubmit={sendEmail}>
      <S.ExitButton src={exitIcon} alt="exit" onClick={exitHandler} />
      <S.BackButton
        src={backIcon}
        alt="back"
        onClick={() => {
          isMobile ? history.goBack() : goToAuthorization();
        }}
      />

      <S.Heading>პაროლის აღდგენა</S.Heading>

      {isSuccessMessageOpen ? (
        <S.Message>
          <div style={{ marginBottom: '1.5rem' }}>
            პაროლის აღდგენისთვის გადადით მეილზე გამოგზავნილ ბმულზე
          </div>
          <Success />
        </S.Message>
      ) : (
        <>
          <TextInput
            fullWidth
            required
            placeholder="ელ-ფოსტა"
            inputName="email"
            handleChange={catchEmail}
            value={email}
          />
          <S.Button type="submit">გაგრძელება</S.Button>{' '}
        </>
      )}
    </S.Wrapper>
  );
};

export default ResetPassword;
