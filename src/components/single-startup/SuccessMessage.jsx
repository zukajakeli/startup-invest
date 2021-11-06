import { ReactComponent as Success } from 'assets/icons/success.svg';
import * as S from './single-startup-components';

const SuccessMessage = () => {
  return (
    <S.SuccessMessage>
      <Success />
      <p
        style={{
          fontSize: 18,
          fontWeight: 500,
          color: '#13182B',
          textAlign: 'center',
          marginBottom: 12,
          marginTop: 20,
        }}
      >
        მოთხოვნა წარმატებით გაიგზავნა
      </p>
      <p
        style={{
          fontSize: 16,
          fontWeight: 400,
          color: '#13182B',
          textAlign: 'center',
        }}
      >
        დეტალურ ინფორმაციას მიიღებთ თქვენ მიერ მითითებულ ელ-ფოსტაზე
      </p>
    </S.SuccessMessage>
  );
};

export default SuccessMessage;
