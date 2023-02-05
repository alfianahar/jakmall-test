import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";

let InputField
let TextAreaField

const Label = styled.label`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.4;

  display: block;
  position: relative;
  max-height: 0;
  font-weight: 500;
  pointer-events: none;

  &::before {
    color: #000000;
    content: attr(data-content);
    display: inline-block;
    filter: blur(0);
    backface-visibility: hidden;
    transform-origin: left top;
    transition: transform 0.2s ease;
    left: 1rem;
    position: relative;
  }

  &::after {
    bottom: 1rem;
    content: "";
    height: 0.1rem;
    position: absolute;
    transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1),
      opacity 180ms cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s ease;
    opacity: 0;
    left: 0;
    top: 100%;
    margin-top: -0.1rem;
    transform: scale3d(0, 1, 1);
    width: 100%;
    background-color: #FF8A00;
  }

  &::before,
  ${InputField}:focus + &::before {
    transform: translate3d(0, -3.12rem, 0) scale3d(0.82, 0.82, 1);
  }
`

InputField = styled.input`
  background: none;
  border-width: 0;
  display: block;
  
  width: 100%;
  box-sizing: border-box;
  padding: 1.8rem 1rem 0.6rem;
  font-size: 1rem;
  border: 0.1rem solid rgba(255, 138, 0, 0.42);
  transition: border-color 0.2s ease;
  caret-color: #FF8A00;

  &::placeholder {
    color: rgba(0, 0, 0, 0);
  }
  &:focus + ${Label}::after {
    transform: scale3d(1, 1, 1);
    opacity: 1;
  }
  &:placeholder-shown + ${Label}::before {
    transform: translate3d(0, -2.2rem, 0) scale3d(1, 1, 1);
  }
  ${Label}::before,
  &:focus + ${Label}::before {
    transform: translate3d(0, -3.12rem, 0) scale3d(0.82, 0.82, 1);
  }
  &:focus + ${Label}::before {
    color: #FF8A00;
  }

    ${props =>
    props.disabled &&
    `
    background-color: #e0e0e0;
    cursor: not-allowed;
  `}
`

const LabelTextarea = styled.label`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.4;

  display: block;
  position: relative;
  max-height: 0;
  font-weight: 500;
  pointer-events: none;

  &::before {
    color: #000000;
    content: attr(data-content);
    display: inline-block;
    filter: blur(0);
    backface-visibility: hidden;
    transform-origin: left top;
    transition: transform 0.2s ease;
    left: 1rem;
    position: relative;
  }

  &::after {
    bottom: 1rem;
    content: "";
    height: 0.1rem;
    position: absolute;
    transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1),
      opacity 180ms cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s ease;
    opacity: 0;
    left: 0;
    top: 100%;
    margin-top: -0.1rem;
    transform: scale3d(0, 1, 1);
    width: 100%;
    background-color: #FF8A00;
  }

  &::before,
  ${TextAreaField}:focus + &::before {
    transform: translate3d(0, -6.42rem, 0) scale3d(0.82, 0.82, 1);
  }
`

TextAreaField = styled.textarea`
  background: none;
  border-width: 0;
  display: block;
  
  height: 7rem;
  width: 100%;
  box-sizing: border-box;
  padding: 1.8rem 1rem 0.6rem;
  font-size: 1rem;
  border: 0.1rem solid rgba(255, 138, 0, 0.42);
  transition: border-color 0.2s ease;
  caret-color: #FF8A00;

  &::placeholder {
    color: rgba(0, 0, 0, 0);
  }
  &:focus + ${LabelTextarea}::after {
    transform: scale3d(1, 1, 1);
    opacity: 1;
  }
  &:placeholder-shown + ${LabelTextarea}::before {
    transform: translate3d(0, -2.2rem, 0) scale3d(1, 1, 1);
  }
  ${LabelTextarea}::before,
  &:focus + ${LabelTextarea}::before {
    transform: translate3d(0, -6.42rem, 0) scale3d(0.82, 0.82, 1);
  }
  &:focus + ${LabelTextarea}::before {
    color: #FF8A00;
  }
`

const InputContainer = styled.div`
  margin-bottom: 0.625rem;
  background-color: #FFFFFF;
  transition: background-color 0.2s ease;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  &:hover,
  &:focus-within {
    background-color: #FFFFFF;
  }

  &:hover ${InputField} {
    border-color: rgba(0, 0, 0, 0.62);
  }
`

const HiddenLabel = styled.span`
  border: 0;
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`

const CheckboxContainer = styled.div`
  display: inline-flex;
  align-items: center;
  margin-bottom: 0.625rem;
  pointer-events: auto;
`

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
  position: absolute;
  z-index: 100;
  width: 30%;
  cursor: pointer;
`

const CheckboxLabel = styled.label`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #2D2A40;
  mix-blend-mode: normal;
  opacity: 0.8;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`

export const Input = ({ name, label, type, disabled, ...rest }) => {
  const { register } = useFormContext()
  return (
    <InputContainer>
      <InputField disabled={disabled} placeholder={label} type={type} {...register(name, { ...rest })} />
      <Label data-content={label}>
        <HiddenLabel></HiddenLabel>
      </Label>
    </InputContainer>
  );
};

export const Textarea = ({ name, label, type, ...rest }) => {
  const { register } = useFormContext()
  return (
    <InputContainer>
      <TextAreaField placeholder={label} type={type} {...register(name, { ...rest })} />
      <LabelTextarea data-content={label}>
        <HiddenLabel></HiddenLabel>
      </LabelTextarea>
    </InputContainer>
  );
};

export const Checkbox = ({ name, label, type, checked }) => {
  const { register } = useFormContext()

  return (
    <CheckboxContainer >
      <CheckboxLabel>
        {checked ?
          <i style={{ color: '#1bd97b' }} className='bx bx-md bx-checkbox-checked'></i>
          : <i style={{ color: '#e9e9e9' }} className='bx bx-md bx-checkbox'></i>}
        <HiddenCheckbox type={type} {...register(name)} />
        <CheckboxLabel>{label}</CheckboxLabel>
      </CheckboxLabel>
    </CheckboxContainer>
  );
};



