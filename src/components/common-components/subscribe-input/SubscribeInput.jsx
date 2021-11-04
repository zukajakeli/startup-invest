import { useFormik } from 'formik';
import emailjs from 'emailjs-com';
import { useRef } from 'react';

import { keys } from 'keys/keys';
import successIcon from 'assets/icons/success.svg';
import * as S from './subscribe-input-components';
import { useState } from 'react';

import { useContext } from 'react';
import { AuthDropdownContext } from 'contexts/AuthDropdownContext';
import { MeContext } from 'contexts/MeContext';

const SubscribeInput = ({ color }) => {
  const [targetEmail, setTargetEmail] = useState('');
  const [messageSent, setMessageSent] = useState(false);
  const [isAuthDropdownOpen, setIsAuthDropdownOpen] =
    useContext(AuthDropdownContext);
  const [meInfo, setMeInfo] = useContext(MeContext);

  const catchEmail = (e) => {
    console.log(e.target.value);
    setTargetEmail(e.target.value);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    {
      if (!meInfo) {
        setIsAuthDropdownOpen(true);
      } else {
        emailjs
          .sendForm(
            keys.emailJsServiceId,
            keys.templateId,
            e.target,
            keys.emailJsId,
          )
          .then(
            (result) => {
              console.log(result.text);
              setMessageSent(true);
            },
            (error) => {
              console.log(error.text);
              setMessageSent(true);
            },
          );
      }
    }
  };

  return (
    <>
      {!messageSent ? (
        <S.SubscribeInputWrapper onSubmit={sendEmail} ref={form}>
          <label htmlFor="email"> </label>
          <S.Input
            type="text"
            placeholder="ელ-ფოსტა"
            color={color}
            name="email"
            onChange={catchEmail}
          ></S.Input>
          <S.Button type="submit" color={color}>
            გაგზავნა
          </S.Button>
        </S.SubscribeInputWrapper>
      ) : (
        <S.MailSentBox color={color}>
          {' '}
          თქვენი მოთხოვნა წარმატებით გაიგზავნა
          <S.SuccessImg src={successIcon} alt="success" />
        </S.MailSentBox>
      )}
    </>
  );
};

export default SubscribeInput;
