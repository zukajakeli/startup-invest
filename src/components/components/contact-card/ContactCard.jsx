import { getAllContacts } from 'config/API';

import { ReactComponent as MailIcon } from 'assets/icons/mail-icon.svg';
import { ReactComponent as PhoneIcon } from 'assets/icons/phone-icon.svg';
import { ReactComponent as LocationIcon } from 'assets/icons/location-icon.svg';

import * as S from './contact-card-components';
import { useEffect } from 'react';
import { useState } from 'react';

const ContactCard = () => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    getAllContacts().then((res) => {
      console.log(res.data[0]);
      const { email, address, phoneNumber } = res.data[0];
      setEmail(email);
      setPhoneNumber(phoneNumber);
      setAddress(address);
    });
  }, []);

  return (
    <S.Wrapper>
      <S.Heading>კონტაქტი</S.Heading>
      <S.SingleContact>
        <MailIcon />
        <S.ContactText>{email}</S.ContactText>
      </S.SingleContact>

      <S.SingleContact>
        <PhoneIcon />
        <S.ContactText>{phoneNumber}</S.ContactText>
      </S.SingleContact>

      <S.SingleContact>
        <LocationIcon />
        <S.ContactText>{address}</S.ContactText>
      </S.SingleContact>
    </S.Wrapper>
  );
};

export default ContactCard;
