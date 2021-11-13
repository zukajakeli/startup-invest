import * as S from './components';
import { addNewStartup, getSingleStartup } from 'config/API';
import { useState } from 'react';

import { Input, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useEffect } from 'react';

import '../../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import WYSIWYGEditor from 'components/editor/editor';

const { TextArea } = Input;

const EditStartup = ({ setResponse, id }) => {
  const [mainPhoto, setMainPhoto] = useState(null);
  const [logoPhoto, setLogoPhoto] = useState(null);
  const [previewPhoto, setPreviewPhoto] = useState(null);
  const [title, setTitle] = useState(null);
  const [previewText, setPreviewText] = useState(null);
  const [mainText, setMainText] = useState(null);
  const [share, setShare] = useState(null);
  const [sharePrice, setSharePrice] = useState(null);
  const [category, setCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const send = (e) => {
    const formData = new FormData();
    formData.append('mainPhoto', mainPhoto);
    formData.append('logoPhoto', logoPhoto);
    formData.append('previewPhoto', previewPhoto);
    formData.append('title', title);
    formData.append('previewText', previewText);
    formData.append('mainText', mainText);
    formData.append('category', category);
    formData.append('share', share);
    formData.append('sharePrice', sharePrice);
    e.preventDefault();
    console.log(formData);
    addNewStartup(formData).then((res) => {
      console.log(res);
      setResponse(res);
      setMainPhoto(null);
      setLogoPhoto(null);
      setPreviewPhoto(null);
      setTitle(null);
      setPreviewText(null);
      setMainText(null);
      setShare(null);
      setSharePrice(null);
      setCategory(null);
    });
  };

  useEffect(() => {
    getSingleStartup(id).then((res) => {
      const {
        title,
        mainText,
        previewText,
        share,
        sharePrice,
        mainPhoto,
        logoPhoto,
        previewPhoto,
      } = res.data.startup;

      setTitle(title);
      setMainText(mainText);
      setPreviewText(previewText);
      setShare(share);
      setSharePrice(sharePrice);
      setMainPhoto(mainPhoto);
      setLogoPhoto(logoPhoto);
      setPreviewPhoto(previewPhoto);
      setIsLoading(false);
    });
  }, []);

  console.log(mainText, isLoading);
  return (
    <>
      {!isLoading && (
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
          <Input
            prefix="Category:"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />

          <WYSIWYGEditor onChange={setMainText} value={mainText} />

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
      )}
    </>
  );
};

export default EditStartup;
