import * as S from './components';
import { addNewContact } from 'config/API';
import { useState } from 'react';

import { Input, Upload, Button } from 'antd';

const EditContactInfo = ({ setAddResponse }) => {
  const [email, setEmail] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [address, setAddress] = useState(null);

  const send = (e) => {
    const formData = new FormData();

    formData.append('email', email);
    formData.append('phoneNumber', phoneNumber);
    formData.append('address', address);
    e.preventDefault();
    console.log(formData);
    addNewContact(formData).then((res) => console.log(res));
  };

  return (
    <S.Form enctype="multipart/form-data">
      <Input
        prefix="Email:"
        value={email}
        required={true}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <Input
        prefix="PhoneNumber:"
        value={phoneNumber}
        required
        onChange={(e) => {
          setPhoneNumber(e.target.value);
        }}
      />

      <Input
        prefix="Address:"
        required
        value={address}
        onChange={(e) => {
          setAddress(e.target.value);
        }}
      />

      <Button type="primary" onClick={send}>
        Edit Contact Info
      </Button>
    </S.Form>
  );
};

export default EditContactInfo;
