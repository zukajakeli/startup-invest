import TextareaInput from 'components/components/text-area/TextareaInput';
import TextInput from 'components/components/text-input/TextInput';
import { useFormik } from 'formik';
import * as S from './components';
import { addNewStartup } from 'config/API';

const AddNewStartup = ({ setAddResponse }) => {
  const formik = useFormik({
    initialValues: {
      mainPhoto: '',
      previewPhoto: '',
      logoPhoto: '',
      video: '',
      price: '',
      share: '',
      title: '',
      previewText: '',
      mainText: '',
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
      addNewStartup(values).then((res) => setAddResponse(res));
    },
  });
  return (
    <S.Form onSubmit={formik.handleSubmit}>
      Main Photo
      <TextInput
        fullWidth
        required
        placeholder="Main Photo"
        inputName="mainPhoto"
        handleChange={formik.handleChange}
        value={formik.values.mainPhoto}
        isUploadInput
      />
      Preview Photo
      <TextInput
        fullWidth
        required
        placeholder="Preview Photo"
        inputName="previewPhoto"
        handleChange={formik.handleChange}
        value={formik.values.previewPhoto}
        isUploadInput
      />
      Logo
      <TextInput
        fullWidth
        required
        placeholder="Logo Photo"
        inputName="logoPhoto"
        handleChange={formik.handleChange}
        value={formik.values.logoPhoto}
        isUploadInput
      />
      Video
      <TextInput
        fullWidth
        required
        placeholder="Video"
        inputName="video"
        handleChange={formik.handleChange}
        value={formik.values.video}
        isUploadInput
      />
      <TextInput
        fullWidth
        required
        placeholder="Share"
        inputName="share"
        handleChange={formik.handleChange}
        value={formik.values.share}
      />
      <TextInput
        fullWidth
        required
        placeholder="Price"
        inputName="price"
        handleChange={formik.handleChange}
        value={formik.values.price}
      />
      <TextInput
        fullWidth
        required
        placeholder="Title"
        inputName="title"
        handleChange={formik.handleChange}
        value={formik.values.title}
      />
      <TextareaInput
        placeholder="Preview Text"
        inputName="previewText"
        handleChange={formik.handleChange}
        value={formik.values.previewText}
      />
      <TextareaInput
        placeholder="Main Text"
        inputName="mainText"
        handleChange={formik.handleChange}
        value={formik.values.mainText}
      />
      <S.SubmitButton type="submit">Add</S.SubmitButton>
    </S.Form>
  );
};

export default AddNewStartup;
