import * as S from './components';
import {
  getAllSocials,
  getSingleFaq,
  updateFaq,
  updateSocials,
} from 'config/API';
import { useState } from 'react';

import { Input, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useEffect } from 'react';

const { TextArea } = Input;

const EditSocials = ({ setResponse, id }) => {
  const [fb, setFb] = useState(null);
  const [insta, setInsta] = useState(null);
  const [linked, setLinked] = useState(null);

  useEffect(() => {
    getAllSocials(id).then((res) => {
      console.log(res.data.social);
      setFb(res.data.social.fbLink);
      setInsta(res.data.social.igLink);
      setLinked(res.data.social.linkedinLink);
    });
  }, []);

  const send = (e) => {
    e.preventDefault();
    updateSocials({ fbLink: fb, igLink: insta, linkedinLink: linked }, id).then(
      (res) => {
        console.log(res);
        setResponse(res);
      },
    );
  };

  return (
    <S.Form>
      <Input
        prefix="Facebook:"
        value={fb}
        onChange={(e) => {
          setFb(e.target.value);
        }}
      />
      <Input
        prefix="Instagram:"
        value={insta}
        onChange={(e) => {
          setInsta(e.target.value);
        }}
      />
      <Input
        prefix="Linkedin:"
        value={linked}
        onChange={(e) => {
          setLinked(e.target.value);
        }}
      />

      <Button type="primary" onClick={send}>
        Edit Socials
      </Button>
    </S.Form>
  );
};

export default EditSocials;
