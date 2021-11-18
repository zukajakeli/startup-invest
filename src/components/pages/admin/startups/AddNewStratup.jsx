import * as S from './components';
import {
  addNewStartup,
  getSingleStartup,
  updateStartup,
  uploadImage,
} from 'config/API';
import { useState } from 'react';

import { Input, Upload, Button, Checkbox, message } from 'antd';
import { VideoCameraTwoTone, CameraTwoTone } from '@ant-design/icons';
import '../../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import WYSIWYGEditor from 'components/editor/editor';
import BASE_URL from 'config/BaseUrl';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import TinyEditor from 'components/editor/TinyEditor';
import EditStartup from './EditStartup';

const { TextArea } = Input;

const AddNewStartup = ({ setAddResponse }) => {
  const [mainPhoto, setMainPhoto] = useState('');
  const [logoPhoto, setLogoPhoto] = useState('');
  const [previewPhoto, setPreviewPhoto] = useState('');
  const [title, setTitle] = useState('');
  const [previewText, setPreviewText] = useState('');
  const [mainText, setMainText] = useState('');
  const [share, setShare] = useState('');
  const [sharePrice, setSharePrice] = useState('');
  const [category, setCategory] = useState('');
  const [video, setVideo] = useState('');
  const [videoDescription, setVideoDescription] = useState('');
  const [isMainPage, setIsMainPage] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [outsideText, setOutsideText] = useState('');
  const [image, setImage] = useState(null);
  const [imageArray, setImageArray] = useState([]);
  const key = 'updatable';
  const { id } = useParams();

  const formData = new FormData();

  useEffect(() => {
    if (id) {
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
          isMainPage,
          isVisible,
          video,
          videoDescription,
          outsideText,
          category,
        } = res.data.startup;

        setTitle(title);
        setMainText(mainText);
        setPreviewText(previewText);
        setShare(share);
        setSharePrice(sharePrice);
        setMainPhoto(mainPhoto);
        setLogoPhoto(logoPhoto);
        setPreviewPhoto(previewPhoto);
        setIsMainPage(isMainPage);
        setIsVisible(isVisible);
        setVideo(video);
        setVideoDescription(videoDescription);
        setOutsideText(outsideText);
        setCategory(category);
      });
    }
  }, []);

  const upload = () => {
    const formData = new FormData();
    formData.append('image', image);
    // e.preventDefault();
    uploadImage(formData).then((res) => {
      console.log(res.data.url);
      setImageArray((prev) => {
        return [res.data.url, ...prev];
      });
      setImage(null);
    });
  };

  const send = (e) => {
    const formData = {
      title,
      previewText,
      mainText,
      share,
      video,
      videoDescription,
      sharePrice,
      isMainPage,
      isVisible,
      outsideText,
      category,
      mainPhoto,
      logoPhoto,
      previewPhoto,
    };
    e.preventDefault();
    console.log('formdata', formData);
    if (
      mainPhoto === '' ||
      logoPhoto === '' ||
      previewPhoto === '' ||
      title === '' ||
      outsideText === '' ||
      previewText === '' ||
      mainText === '' ||
      share === '' ||
      video === '' ||
      videoDescription === '' ||
      category === '' ||
      sharePrice === ''
    ) {
      alert('Complete all fields');
    } else {
      id
        ? updateStartup(id, formData).then((res) => {
            message.success({ content: 'Blog Updated!', key, duration: 2 });
            setTimeout(() => {
              window.location.reload(false);
            }, 1500);
          })
        : addNewStartup(formData).then((res) => {
            message.success({ content: 'Blog Added!', key, duration: 2 });
            setTimeout(() => {
              window.location.reload(false);
            }, 1500);
          });
    }
  };

  const mainCheckboxChange = (e) => {
    setIsMainPage(e.target.checked);
  };

  const visibleCheckboxChange = (e) => {
    setIsVisible(e.target.checked);
  };
  console.log('isVisible', isVisible);

  return (
    <S.Form enctype="multipart/form-data" id="startup-form">
      <p style={{ fontSize: 24, marginBottom: 20 }}>
        {id ? 'Edit Startup' : 'Add Startup'}{' '}
      </p>
      <Input
        prefix="Title:"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <TextArea
        placeholder="Outside Text"
        value={outsideText}
        onChange={(e) => {
          setOutsideText(e.target.value);
        }}
      />
      <Input
        required
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
        prefix="Video URL:"
        suffix={<VideoCameraTwoTone />}
        value={video}
        onChange={(e) => {
          setVideo(e.target.value);
        }}
      />
      <TextArea
        placeholder="Video Description"
        value={videoDescription}
        onChange={(e) => {
          setVideoDescription(e.target.value);
        }}
      />
      <Input
        prefix="Main Photo URL:"
        suffix={<CameraTwoTone />}
        value={mainPhoto}
        onChange={(e) => {
          setMainPhoto(e.target.value);
        }}
      />
      <Input
        prefix="Preview Photo URL:"
        suffix={<CameraTwoTone />}
        value={previewPhoto}
        onChange={(e) => {
          setPreviewPhoto(e.target.value);
        }}
      />
      <Input
        prefix="Logo Photo URL:"
        suffix={<CameraTwoTone />}
        value={logoPhoto}
        onChange={(e) => {
          setLogoPhoto(e.target.value);
        }}
      />
      <Input
        prefix="Category:"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      />
      <div style={{ display: 'flex', gap: '2rem', marginBottom: '3rem' }}>
        <Checkbox checked={isMainPage} onChange={mainCheckboxChange}>
          {' '}
          Main Page Startup{' '}
        </Checkbox>
        <Checkbox checked={isVisible} onChange={visibleCheckboxChange}>
          {' '}
          Visible for Everyone{' '}
        </Checkbox>
      </div>
      Preview Text
      <TinyEditor
        contentEditor={previewText}
        setContentEditor={setPreviewText}
      />
      Main Text
      <TinyEditor contentEditor={mainText} setContentEditor={setMainText} />
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
        {id ? 'Update Startup' : 'Add Startup'}
      </Button>
    </S.Form>
  );
};

export default AddNewStartup;
