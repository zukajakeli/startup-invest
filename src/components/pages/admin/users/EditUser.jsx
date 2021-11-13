import * as S from '../FAQs/components';
import { getSingleUser, updateUser } from 'config/API';
import { useState } from 'react';

import { Input, Select, Button } from 'antd';
import { useEffect } from 'react';

const { Option } = Select;

const EditUser = ({ setResponse, id }) => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [role, setRole] = useState(null);
  // const [id, setId] = useState(null);

  useEffect(() => {
    getSingleUser(id).then((res) => {
      console.log(res.data.user);
      const { firstName, lastName, email, phone, role } = res.data.user;
      setFirstName(firstName);
      setLastName(lastName);
      setEmail(email);
      setPhone(phone);
      setRole(role);
      // setId(_id);
    });
  }, []);

  const handleSelect = (value) => {
    setRole(value);
  };

  const send = (e) => {
    const formData = {
      firstName,
      lastName,
      role,
      email,
      phone,
    };
    e.preventDefault();
    updateUser(id, formData).then((res) => {
      console.log(res);
      // setAddResponse(res);
      setFirstName(null);
      setLastName(null);
      setEmail(null);
      setPhone(null);
      setRole(null);
      setResponse(res);
    });
  };

  return (
    <S.Form enctype="multipart/form-data">
      <Input
        prefix="First Name:"
        value={firstName}
        required={true}
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <Input
        prefix="Last Name:"
        value={lastName}
        required={true}
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
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
        value={phone}
        required
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />

      <Select
        style={{ width: '100%' }}
        placeholder={'User Role'}
        onChange={handleSelect}
      >
        <Option value="admin">Admin</Option>
        <Option value="user">User</Option>
      </Select>

      <Button type="primary" onClick={send}>
        Update User
      </Button>
    </S.Form>
  );
};

export default EditUser;
