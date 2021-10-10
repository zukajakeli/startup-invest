import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const Textarea = styled.textarea`
  border: 0.3rem solid #fdb8b7;
  outline: none;
  border-radius: 2.4rem;
  height: 4.6rem;
  padding: 1.5rem 2.4rem;
  color: #767c8b;
  font-size: 1.6rem;
  font-weight: 400;
  position: relative;
  flex: 1 16rem;
  width: 100%;
  height: 13.8rem;
  resize: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const RequiredIcon = styled.img`
  position: absolute;
  right: 0rem;
  top: -0.5rem;
`;
