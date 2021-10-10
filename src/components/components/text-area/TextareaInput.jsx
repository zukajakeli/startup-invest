import requiredIcon from 'assets/icons/required-icon.svg';

import * as S from './textarea-input-components';

const TextareaInput = ({ required = true, placeholder }) => {
  return (
    <S.Wrapper>
      <S.Textarea placeholder={placeholder} />
      {required && <S.RequiredIcon src={requiredIcon} alt="required" />}
    </S.Wrapper>
  );
};

export default TextareaInput;
