import styled from "styled-components";

const FormDetailWrapper = styled.div`
 display: flex;
 flex-direction: column;
 width: 100%;
`;

const FormStep = ({ title, children }) => {

    return (
        <FormDetailWrapper>
            {children}
        </FormDetailWrapper>
    );
};

export default FormStep;
