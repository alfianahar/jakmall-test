import { Children } from 'react'
import { useFormContext } from 'react-hook-form';
import styled from "styled-components";


const FormContainer = styled.form`
 display: flex;
 justify-content: space-between;
 flex-direction: column;
 height: 100%;
  
  @media only screen and (min-width: 800px) {
    flex-direction: row;
  }
`;

const Form = ({ children, next, isLastStep }) => {
    const { handleSubmit } = useFormContext()

    const onSubmit = (data) => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        if (!isLastStep) return next();
    }
    return (
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
            {children}
        </FormContainer>
    )
}

export default Form