import styled from "styled-components";

const Button = styled.button`
  /* width: 22.9rem; */
  height: 6rem;
  outline: none;
  border-radius: 3rem;
  border: 0.4rem solid #55aa79;
  border-color: #55aa79;
  color: #55aa79;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  background: linear-gradient(to right, #55aa79 50%, rgba(255, 255, 255, 0) 0%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.4s ease-out;

  &:hover {
    background-position: left bottom;
    color: #13182b;
  }
`;

export default Button;
