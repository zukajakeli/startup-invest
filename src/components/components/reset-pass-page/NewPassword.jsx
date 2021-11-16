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
import { newPassword } from 'config/API';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router';

const NewPassword = ({
  setIsAuthDropdownOpen,
  setIsAuthorizationOpen,
  setIsResetPasswordOpen,
  setIsRegistrationOpen,
}) => {
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
  const [isSuccessMessageOpen, setIsSuccessMessageOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const { id } = useParams();
  const history = useHistory();

  const sendEmail = (e) => {
    e.preventDefault();
    const data = { password, repeatPassword };
    if (password === repeatPassword) {
      newPassword(id, data).then((res) => {
        console.log(res.data);
        setIsSuccessMessageOpen(true);
        setTimeout(() => {
          history.push('/');
        }, 2000);
      });
    }
  };

  return (
    <S.Wrapper onSubmit={sendEmail}>
      {!isSuccessMessageOpen && <S.Heading>შეიყვანეთ ახალი პაროლი</S.Heading>}

      {isSuccessMessageOpen ? (
        <S.Message>
          <div style={{ marginBottom: '1.5rem' }}>
            თქვენი ანგარიშის პაროლი შეცვლილია
          </div>
          <Success />
        </S.Message>
      ) : (
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '1.6rem' }}
        >
          <TextInput
            fullWidth
            required
            inputName="password"
            isPasswordInput
            handleChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="ახალი პაროლი"
            value={password}
          />
          <TextInput
            fullWidth
            required
            placeholder="გაიმეორეთ პაროლი"
            inputName="repeatPassword"
            isPasswordInput
            handleChange={(e) => {
              setRepeatPassword(e.target.value);
            }}
            value={repeatPassword}
          />
          <S.Button type="submit">გაგრძელება</S.Button>{' '}
        </div>
      )}
    </S.Wrapper>
  );
};

export default NewPassword;
