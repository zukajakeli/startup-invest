import { useFormik } from 'formik';

import * as S from './subscribe-input-components';

const SubscribeInput = ({ color }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  return (
    <S.SubscribeInputWrapper onSubmit={formik.handleSubmit}>
      <label htmlFor="email"> </label>
      <S.Input
        type="text"
        placeholder="ელ.ფოსტა"
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
