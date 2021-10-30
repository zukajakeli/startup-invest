import TextareaInput from 'components/components/text-area/TextareaInput';
import TextInput from 'components/components/text-input/TextInput';
import { useFormik } from 'formik';
import { Button } from 'antd';
import * as S from './components';
import { addNewStory } from 'config/API';

const AddNewBlog = () => {
  const formik = useFormik({
    initialValues: {
      mainPhoto: '',
      secondaryPhoto: '',
      previewPhoto: '',
      title: '',
      content: '',
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
      addNewStory(values);
    },
  });
  return (
    <S.Form onSubmit={formik.handleSubmit}>
      <TextInput
        fullWidth
        required
        placeholder="Title"
        inputName="title"
        handleChange={formik.handleChange}
        value={formik.values.title}
      />
      <TextareaInput
        placeholder="ბლოგის ტექსტი"
        inputName="content"
        handleChange={formik.handleChange}
        value={formik.values.content}
      />
      <S.SubmitButton type="submit">Add</S.SubmitButton>
    </S.Form>
  );
};

export default AddNewBlog;
