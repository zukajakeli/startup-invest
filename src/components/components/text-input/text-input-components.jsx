import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '47%')};
`;

export const InputText = styled.input`
  border: 0.3rem solid #fdb8b7;
  outline: none;
  border-radius: 2.4rem;
  height: 4.6rem;
  padding: 0rem 2.4rem;
  color: ${({ isUploadInput }) => (isUploadInput ? 'white' : '#767c8b')};
  font-size: 1.6rem;
  font-weight: 400;
  position: relative;
  flex: 1 16rem;
  width: 100%;

  &::-webkit-file-upload-button {
    visibility: hidden;
  }

  ${({ isUploadInput }) => isUploadInput && 'cursor: pointer; '}
`;

export const RequiredIcon = styled.img`
  position: absolute;
  right: 0rem;
  top: -0.5rem;
`;

export const UploadIcon = styled.img`
  position: absolute;
  left: 2rem;
  top: 1rem;
`;

export const EyeIcon = styled.img`
  position: absolute;
  right: 2.3rem;
  top: 1.3rem;
  width: 1.8rem;
  height: 1.8rem;
  cursor: pointer;
`;
