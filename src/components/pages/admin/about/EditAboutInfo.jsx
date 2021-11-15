import { Input, Upload, Button } from 'antd';
import { editAbout, getAllAbouts } from 'config/API';
import { useEffect } from 'react';
import { useState } from 'react';
import WYSIWYGEditor from 'components/editor/editor';
import { UploadOutlined } from '@ant-design/icons';
import '../../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import * as S from './components';
import BASE_URL from 'config/BaseUrl';

const EditAboutInfo = ({ setResponse }) => {
  const [text, setText] = useState('');
  const [photoOne, setPhotoOne] = useState(null);
  const [photoTwo, setPhotoTwo] = useState(null);
  const [id, setId] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const send = (e) => {
    const formData = new FormData();
    formData.append('text', text);
    formData.append('photoOne', photoOne);
    formData.append('photoTwo', photoTwo);

    e.preventDefault();
    console.log('formData', formData);
    editAbout(id, formData).then((res) => {
      console.log(res);
      // setResponse(res);
      setText('');
      setPhotoOne(null);
      setPhotoTwo(null);
    });
  };

  useEffect(() => {
    getAllAbouts().then((res) => {
      const { text, photoOne, photoTwo, _id } = res?.data[0];
      setPhotoOne(photoOne);
      setPhotoTwo(photoTwo);
      setText(text);
      setId(_id);
      setIsLoading(false);
    });
  }, []);

  console.log('text', text);
  console.log('photoONe', photoOne);
  console.log('photoTwo', photoTwo);

  const photoOnePreview = [
    {
      uid: '-1',
      status: 'done',
      url: `${BASE_URL}/${photoOne}`,
      thumbUrl: `${BASE_URL}/${photoOne}`,
    },
  ];

  const photoTwoPreview = [
    {
      uid: '-1',
      status: 'done',
      url: `${BASE_URL}/${photoTwo}`,
      thumbUrl: `${BASE_URL}/${photoTwo}`,
    },
  ];

  return (
    <>
      <S.Header>
        <S.UserTitle>About Info</S.UserTitle>
        <p>
          use <i>Shift + Enter </i> <br /> for line break{' '}
        </p>
      </S.Header>
      {!isLoading && (
        <S.Form enctype="multipart/form-data">
          <WYSIWYGEditor onChange={setText} value={text} />
          <Upload
            name="photoOne"
            beforeUpload={false}
            defaultFileList={[...photoOnePreview]}
            listType="picture"
            multiple={false}
            onRemove={() => {
              setPhotoOne(null);
            }}
            onChange={(e) => {
              setPhotoOne(e.file.originFileObj);
              console.log(e.file.originFileObj);
            }}
          >
            <Button icon={<UploadOutlined />}>Upload Photo 1</Button>
          </Upload>
          <Upload
            name="photoTwo"
            defaultFileList={[...photoTwoPreview]}
            listType="picture"
            onRemove={() => {
              setPhotoTwo(null);
            }}
            beforeUpload={false}
            multiple={false}
            onChange={(e) => {
              setPhotoTwo(e.file.originFileObj);
            }}
          >
            <Button icon={<UploadOutlined />}>Upload Photo 2</Button>
          </Upload>

          <Button type="primary" onClick={send}>
            Update About Info
          </Button>
        </S.Form>
      )}
    </>
  );
};

export default EditAboutInfo;
