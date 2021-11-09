import TextareaInput from 'components/components/text-area/TextareaInput';
import TextInput from 'components/components/text-input/TextInput';
import { useFormik } from 'formik';
import * as S from './components';
import { addNewStartup } from 'config/API';
import { useState } from 'react';

const AddNewStartup = ({ setAddResponse }) => {
  const [mainPhoto, setMainPhoto] = useState(null);
  const [secondaryPhoto, setSecondaryPhoto] = useState(null);

  const formData = new FormData();
  formData.append('image', mainPhoto);
  

  const send = (event) => {
    event.preventDefault();

    addNewStartup(formData).then((res) => console.log(res));
  };

  return (
    <S.Form enctype="multipart/form-data">
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="mainPhoto">Main Photo</label>
        <input
          type="file"
          name="mainPhoto"
          onChange={(e) => {
            setMainPhoto(e.target.files[0]);
          }}
        />
        <label htmlFor="secondaryPhoto">Secondary Photo</label>
        <input
          type="file"
          name="secondaryPhoto"
          onChange={(e) => {
            setSecondaryPhoto(e.target.files[0]);
          }}
        />
      </div>

      <S.SubmitButton onClick={send}>Add</S.SubmitButton>
    </S.Form>
  );
};

export default AddNewStartup;
