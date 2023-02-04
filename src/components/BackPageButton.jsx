import styled from "styled-components";

const BackButton = styled.button`
    all: unset;
    cursor: pointer;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.6;
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
`;


const BackPageButton = ({ title, children }) => {

    return (
        <BackButton>
            {children}
        </BackButton>
    );
};

export default BackPageButton;
