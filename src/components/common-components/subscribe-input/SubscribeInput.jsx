import { useFormik } from 'formik';
import emailjs from 'emailjs-com';
import { useRef } from 'react';

import { keys } from 'keys/keys';

import * as S from './subscribe-input-components';
import { useState } from 'react';

const SubscribeInput = ({ color }) => {
  const [toSend, setToSend] = useState('');
  const changeValue = (e) => {
    console.log(e.target.value);
    setToSend(e.target.value);
  };

  const form = useRef();

  const sendEmail = (e) => {
    // e.preventDefault();

    emailjs
      .send(keys.emailJsServiceId, keys.templateId, toSend, keys.emailJsId)
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  const [clickCount, setClickCount] = useState(0);

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values, { resetForm }) => {
      console.log(JSON.stringify(values, null, 2));
      setToSend(values);
      sendEmail();
      setClickCount((prev) => prev + 1);
      {
        clickCount > 0 && resetForm({});
      }
    },
    handleChange: (values) => {
      console.log(values);
    },
  });
  return (
    <S.SubscribeInputWrapper onSubmit={formik.handleSubmit} ref={form}>
      <label htmlFor="email"> </label>
      <S.Input
        type="text"
        placeholder="ელ-ფოსტა"
        color={color}
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      ></S.Input>
      <S.Button type="submit" color={color}>
        გაგზავნა
      </S.Button>
    </S.SubscribeInputWrapper>
  );
};

export default SubscribeInput;
