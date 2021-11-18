import { Input, Upload, Button, message } from 'antd';
import { editAbout, getAllAbouts, uploadImage } from 'config/API';
import { useEffect } from 'react';
import { useState } from 'react';
import { VideoCameraTwoTone, CameraTwoTone } from '@ant-design/icons';
import WYSIWYGEditor from 'components/editor/editor';
import { UploadOutlined } from '@ant-design/icons';
import '../../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import * as S from './components';
import BASE_URL from 'config/BaseUrl';
import TinyEditor from 'components/editor/TinyEditor';

const EditAboutInfo = ({ setResponse }) => {
  const [responseText, setResponseText] = useState('');
  const [text, setText] = useState('');
  const [photoOne, setPhotoOne] = useState('');
  const [photoTwo, setPhotoTwo] = useState('');
  const [image, setImage] = useState(null);
  const [id, setId] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [imageArray, setImageArray] = useState([]);
  const key = 'updatable';

  useEffect(() => {
    getAllAbouts().then((res) => {
      const { text, photoOne, photoTwo, _id } = res?.data[0];
      setResponseText(text);
      setPhotoOne(photoOne);
      setPhotoTwo(photoTwo);
      setId(_id);
      setIsLoading(false);
    });
  }, []);

  console.log('teeeeext', text);
  const upload = () => {
    const formData = new FormData();
    formData.append('image', image);
    uploadImage(formData).then((res) => {
      console.log(res.data.url);
      setImageArray((prev) => {
        return [res.data.url, ...prev];
      });
      setImage(null);
    });
  };

  const send = (e) => {
    const formData = { text, photoOne, photoTwo };

    e.preventDefault();
    if (text === '' || photoOne === '') {
      alert('Complete all fields');
    } else {
      message.loading({ content: 'Loading...', key });
      editAbout(id, formData).then((res) => {
        console.log(res);
        message.success({ content: 'Info Updated!', key, duration: 2 });
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      });
    }
  };

  useEffect(() => {
    setText(responseText);
  }, [responseText]);

  return (
    <>
      <S.Header>
        <S.UserTitle>About Info</S.UserTitle>
      </S.Header>
      {!isLoading && (
        <S.Form enctype="multipart/form-data">
          <Input
            prefix="First Side Photo URL :"
            suffix={<CameraTwoTone />}
            value={photoOne}
            onChange={(e) => {
              setPhotoOne(e.target.value);
            }}
          />
          <Input
            prefix="Second Side Photo URL:"
            suffix={<CameraTwoTone />}
            value={photoTwo}
            onChange={(e) => {
              setPhotoTwo(e.target.value);
            }}
          />

          <TinyEditor contentEditor={text} setContentEditor={setText} />

          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: 16,
              borderRadius: 8,
              border: '1px solid black',
              padding: 10,
            }}
          >
            <input
              type="file"
              // value={image}
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
            />
            <Button type="primary" onClick={upload}>
              Upload Image
            </Button>
          </div>
          {imageArray &&
            imageArray.map((url) => {
              return (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 16,
                    borderRadius: 8,
                    border: '1px solid black',
                    padding: 10,
                  }}
                >
                  <img
                    style={{ width: 120, height: 80, borderRadius: 8 }}
                    src={`${BASE_URL}/${url}`}
                    alt="server image"
                  />
                  <Input value={`${BASE_URL}/${url}`} />
                </div>
              );
            })}

          <Button type="primary" onClick={send}>
            Update About Info
          </Button>
        </S.Form>
      )}
    </>
  );
};

export default EditAboutInfo;
