import { ReactComponent as MailIcon } from 'assets/icons/mail-icon.svg';
import { ReactComponent as PhoneIcon } from 'assets/icons/phone-icon.svg';
import { ReactComponent as LocationIcon } from 'assets/icons/location-icon.svg';

import * as S from './contact-card-components';

const ContactCard = () => {
  return (
    <S.Wrapper>
      <S.Heading>კონტაქტი</S.Heading>
      <S.SingleContact>
        <MailIcon />
        <S.ContactText>Example@gmail.com</S.ContactText>
      </S.SingleContact>

      <S.SingleContact>
        <PhoneIcon />
        <S.ContactText>+995 555 111 222</S.ContactText>
      </S.SingleContact>

      <S.SingleContact>
        <LocationIcon />
        <S.ContactText>The Biltmore hotel Tbilisi</S.ContactText>
      </S.SingleContact>
    </S.Wrapper>
  );
};

export default ContactCard;
