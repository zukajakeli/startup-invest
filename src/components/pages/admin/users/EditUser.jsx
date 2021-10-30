import { addNewUser } from 'config/API';
import { useFormik } from 'formik';
import TextareaInput from 'components/components/text-area/TextareaInput';
import * as S from './components';

const EditUser = () => {
  const formik = useFormik({
    initialValues: {
      mainPhoto: '',
      secondaryPhoto: '',
      previewPhoto: '',
      content: '',
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
      addNewUser(values);
    },
  });
  return (
    <S.Form onSubmit={formik.handleSubmit}>
      <S.SubmitButton type="submit">Save</S.SubmitButton>
    </S.Form>
  );
};

export default EditUser;
