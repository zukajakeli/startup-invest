import * as S from './components';
import { getAllContacts, updateContact } from 'config/API';
import { useState } from 'react';

import { Input, Upload, Button } from 'antd';
import { useEffect } from 'react';

const EditContactInfo = ({ setAddResponse }) => {
  const [email, setEmail] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [address, setAddress] = useState(null);
  const [id, setId] = useState(null);

  useEffect(() => {
    getAllContacts().then((res) => {
      console.log(res);
      const { email, phoneNumber, address, _id } = res.data[0];
      setEmail(email);
      setPhoneNumber(phoneNumber);
      setAddress(address);
      setId(_id);
    });
  }, []);

  const send = (e) => {
    const formData = {
      email,
      phoneNumber,
      address,
      id,
    };
    e.preventDefault();
    console.log(formData);
    updateContact(formData).then((res) => {
      console.log(res);
      setAddResponse(res);
      setEmail(null);
      setPhoneNumber(null);
      setAddress(null);
    });
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
