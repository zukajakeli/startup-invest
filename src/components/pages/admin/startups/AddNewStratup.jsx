import * as S from './components';
import { addNewStartup } from 'config/API';
import { useState } from 'react';

import { Input, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const AddNewStartup = ({ setAddResponse }) => {
  const [mainPhoto, setMainPhoto] = useState(null);
  const [logoPhoto, setLogoPhoto] = useState(null);
  const [previewPhoto, setPreviewPhoto] = useState(null);
  const [title, setTitle] = useState(null);
  const [previewText, setPreviewText] = useState(null);
  const [mainText, setMainText] = useState(null);
  const [share, setShare] = useState(null);
  const [sharePrice, setSharePrice] = useState(null);

  const send = (e) => {
    const formData = new FormData();
    formData.append('mainPhoto', mainPhoto);
    formData.append('logoPhoto', logoPhoto);
    formData.append('previewPhoto', previewPhoto);
    formData.append('title', title);
    formData.append('previewText', previewText);
    formData.append('mainText', mainText);
    formData.append('share', share);
    formData.append('sharePrice', sharePrice);
    e.preventDefault();
    console.log(formData);
    addNewStartup(formData).then((res) => console.log(res));
  };

  return (
    <S.Form enctype="multipart/form-data">
      <Input
        prefix="Title:"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <Input
        prefix="PreviewText:"
        value={previewText}
        onChange={(e) => {
          setPreviewText(e.target.value);
        }}
      />
      <Input
        prefix="SharePrice:"
        value={sharePrice}
        onChange={(e) => {
          setSharePrice(e.target.value);
        }}
      />
      <Input
        prefix="Share:"
        value={share}
        onChange={(e) => {
          setShare(e.target.value);
        }}
      />
      <TextArea
        placeholder="Main Text"
        value={mainText}
        onChange={(e) => {
          setMainText(e.target.value);
        }}
      />
      <Upload
        name="mainPhoto"
        beforeUpload={false}
        multiple={false}
        onChange={(e) => {
          setMainPhoto(e.file.originFileObj);
        }}
      >
        <Button icon={<UploadOutlined />}>Upload Main Photo</Button>
      </Upload>
      <Upload
        name="logoPhoto"
        beforeUpload={false}
        multiple={false}
        onChange={(e) => {
          setLogoPhoto(e.file.originFileObj);
        }}
      >
        <Button icon={<UploadOutlined />}>Upload Logo Photo</Button>
      </Upload>
      <Upload
        name="previewPhoto"
        beforeUpload={false}
        multiple={false}
        onChange={(e) => {
          console.log(e.file.originFileObj);
          setPreviewPhoto(e.file.originFileObj);
        }}
      >
        <Button icon={<UploadOutlined />}>Upload Preview Photo</Button>
      </Upload>

      <Button type="primary" onClick={send}>
        Add Startup
      </Button>
    </S.Form>
  );
};

export default AddNewStartup;
