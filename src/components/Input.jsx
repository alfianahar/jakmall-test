import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  position: relative;
`;

const Label = styled.label`
  position: absolute;
  left: 20px;
  top: 20px;
  font-size: 14px;
  color: #ccc;
  pointer-events: none;
  transition: all 0.2s ease-out;
`;

const InputField = styled.input`
  width: 100%;
  height: 100%;
  font-size: 18px;
  border: none;
  outline: none;
  &:focus + ${Label} {
    top: 10px;
    font-size: 12px;
    color: #333;
  }
`;

const Input = ({ label, ...rest }) => {
  return (
    <InputContainer>
      <InputField {...rest} />
      <Label htmlFor="input-field">{label}</Label>
    </InputContainer>
  );
};

export default Input;
