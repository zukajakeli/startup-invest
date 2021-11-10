import * as S from './components';
import { addNewStory } from 'config/API';
import { useState } from 'react';

import { Input, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const AddNewStartup = ({ setAddResponse }) => {
  const [mainPhoto, setMainPhoto] = useState(null);
  const [secondaryPhoto, setSecondaryPhoto] = useState(null);
  const [previewPhoto, setPreviewPhoto] = useState(null);
  const [title, setTitle] = useState(null);
  const [previewText, setPreviewText] = useState(null);
  const [mainText, setMainText] = useState(null);
  const [quote, setQuote] = useState(null);

  const send = (e) => {
    const formData = new FormData();
    formData.append('mainPhoto', mainPhoto);
    formData.append('secondaryPhoto', secondaryPhoto);
    formData.append('previewPhoto', previewPhoto);
    formData.append('title', title);
    formData.append('previewText', previewText);
    formData.append('mainText', mainText);
    formData.append('quote', quote);
    e.preventDefault();
    console.log(formData);
    addNewStory(formData).then((res) => console.log(res));
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
        prefix="Quote:"
        value={quote}
        onChange={(e) => {
          setQuote(e.target.value);
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
        name="secondaryPhoto"
        beforeUpload={false}
        multiple={false}
        onChange={(e) => {
          setSecondaryPhoto(e.file.originFileObj);
        }}
      >
        <Button icon={<UploadOutlined />}>Upload Secondary Photo</Button>
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
        Add Blog
      </Button>
    </S.Form>
  );
};

export default AddNewStartup;
