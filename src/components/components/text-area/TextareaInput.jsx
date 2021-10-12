import requiredIcon from 'assets/icons/required-icon.svg';

import * as S from './textarea-input-components';

const TextareaInput = ({
  required = true,
  placeholder,
  inputName,
  handleChange,
  value,
}) => {
  return (
    <S.Wrapper>
      <label htmlFor={inputName}> </label>
      <S.Textarea
        placeholder={placeholder}
        name={inputName}
        onChange={handleChange}
        value={value}
      />
      {required && <S.RequiredIcon src={requiredIcon} alt="required" />}
    </S.Wrapper>
  );
};

export default TextareaInput;
