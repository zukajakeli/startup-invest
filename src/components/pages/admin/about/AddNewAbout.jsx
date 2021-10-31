import TextareaInput from 'components/components/text-area/TextareaInput';
import TextInput from 'components/components/text-input/TextInput';
import { useFormik } from 'formik';
import * as S from './components';
import { addNewAbout } from 'config/API';

const AddNewAbout = ({ setAddResponse }) => {
  const formik = useFormik({
    initialValues: {
      text: '',
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
      addNewAbout(values).then((res) => setAddResponse(res));
    },
  });
  return (
    <S.Form onSubmit={formik.handleSubmit}>
      <TextareaInput
        fullWidth
        placeholder="About Text"
        inputName="text"
        handleChange={formik.handleChange}
        value={formik.values.text}
      />
      <S.SubmitButton type="submit">Add</S.SubmitButton>
    </S.Form>
  );
};

export default AddNewAbout;
