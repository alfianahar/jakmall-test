import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  background: #FFFFFF;
  border: 1px solid #CCCCCC;
  padding: 1rem .75rem;
`;

const Label = styled.label`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.4;
  font-family: 'Inter';
`;

const InputLabel = styled.label`
width: 100%;
  color: #8d8d8d;
  position: absolute;
  top: 27px;
  left: 55px;
  background: #ffffff;
  transition: 300ms;
  transform: translate(-50%, -50%);
`;


const InputField = styled.input`
  outline: none;
  padding: 16px 22px;
  border: 1px solid #dadce0;
  font-size: 18px;
  border-radius: 5px;

  &:focus
  {
    border: 2px solid royalblue;
  }

  &:valid + ${InputLabel}
  {
    top: -1px;
    padding: 0 3px;
    font-size:14px;
    color: #8d8d8d;
  }

  &:focus + ${InputLabel}
  {
    top: -1px;
    padding: 0 3px;
    font-size:14px;
    color: royalblue;
    transition: 300ms;
  }
`;


const Input = ({ label, children, ...rest }) => {
  console.log(rest)
  return (
    <InputContainer>
      <InputField {...rest} />
      <InputLabel>
        {label}
      </InputLabel>
    </InputContainer>
  );
};

export default Input;
